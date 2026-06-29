---
categories:
- Business Continuity
- Runbooks
- Cloud Operations
description: Step-by-step runbook for failing over the Tessera multi-tenant SaaS platform from the primary AWS region (ap-southeast-2, Sydney) to the standby region (ap-southeast-1, Singapore).
title: Failover Runbook
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Failover Runbook                           |
| **Doc#**     | SOP-BCDR-001                               |
| **Version**  | 1.1                                        |
| **Date**     | 02-03-2025                                 |
| **Owner**    | Cloud Service Operations (R. Costa)        |
| **Approved By** | Head of Engineering (N. Bennett)       |

This runbook describes the procedure for failing over the Tessera multi-tenant
SaaS platform from the primary region (`ap-southeast-2`, Sydney) to the standby
region (`ap-southeast-1`, Singapore). It is exercised at least annually and after
any significant change to the platform topology. The target recovery time
objective (RTO) is **4 hours** from declaration of failover (see BIA,
DOC-BCDR-001).

## Roles

- **Incident Commander** — Cloud Service Ops lead (R. Costa) or delegate.
- **Database Lead** — Cloud Infrastructure Architect (C. Hayes) or delegate.
- **Network Lead** — on-call network engineer.
- **Comms Lead** — Head of People (A. Desai) for internal; CISO (I. Ferreira)
  for tenant and regulator-facing communications.

## Prerequisites

1. Confirm the standby region VPC, subnets and KMS keys are provisioned.
2. Confirm a valid Route 53 health-check and weighted/alias policy exists for the
   application endpoint.
3. Confirm an Aurora Global cluster spans both regions with a readable
   cross-region replica in `ap-southeast-1`.

## Procedure

1. Declare failover. The Incident Commander opens `#inc-failover` and pages the
   Database, Network and Comms leads. Record the declaration timestamp — this
   starts the RTO clock.
2. Freeze deployments. Disable the CI/CD deployment pipeline in both regions to
   prevent schema drift during cutover.
3. Stop inbound writes to the primary. Quiesce the application tier in
   `ap-southeast-2` by cordoning the ECS services and draining the Application
   Load Balancer.
4. Verify the primary is unwritable. Confirm no new transactions are landing on
   the primary Aurora writer instance.
5. Verify replication lag. From the standby region, check that the cross-region
   replica `Seconds_Behind_Master` / `AuroraReplicaLag` is at or near zero.
6. Disconnect the primary. Isolate the primary writer to protect against split-
   brain.
7. Promote the Aurora Global cluster to primary in `ap-southeast-1`, making the
   standby replica the new writer.
8. Verify the new writer. Run smoke queries against tenant data and confirm
   row-level security policies are intact.
9. Bring up the application tier in the standby region. Scale the ECS services
   and confirm health checks pass against the new writer.
10. Validate the AI summarisation service and support AI assistant can reach the
    third-party model vendor endpoint from the standby region.
11. Run the tenant smoke-test suite. Confirm representative tenants across
    isolation segments can authenticate and read/write.
12. Switch Route 53 to the standby region by updating the alias record to the
    standby Application Load Balancer and lowering the primary weight to zero.
13. Monitor DNS propagation and error rates. Confirm TLS termination and the
    KMS-backed decryption path are healthy.
14. Declare service restored. Record the restoration timestamp against the RTO
    clock and notify the Executive Risk Committee.
15. Post-failover: stand up a replacement primary, re-establish replication in
    the reverse direction, and open a post-incident review within 5 business
    days.

## Known issues and open items

> **CONFIGURATION GAP — BLOCKING STEP 7:** A Terraform state inspection performed
> during the last dry-run (Feb 2025) found that the standby-region Aurora
> deployment is a **standalone regional cluster, not a member of an Aurora Global
> cluster**, and that **no cross-region read replica exists** in `ap-southeast-1`:
>
> ```
> $ terraform state show aws_rds_global_cluster.tessera_global
> Resource not found in state.
>
> $ aws rds describe-global-clusters --region ap-southeast-1
> { "GlobalClusters": [] }
>
> $ aws rds describe-db-clusters --region ap-southeast-1 \
>     --query 'DBClusters[*].{Cluster:DBClusterIdentifier,Engine:Engine,Members:DBClusterMembers[*].DBInstanceRole}'
> [ { "Cluster": "tessera-aurora-sg", "Engine": "aurora-postgresql",
>     "Members": [ { "DBInstanceRole": "writer" } ] } ]
> ```
>
> Because there is no cross-region replica, **step 7 cannot actually promote
> anything** — the standby cluster has no continuously-replicated tenant data.
> Executing this runbook as written would result in data loss up to the last
> manual snapshot. Remediation: provision the Aurora Global cluster and validate
> replication before the next test.

> **STALE REFERENCE:** Step 3 still references "ECS services" but the AI
> summarisation tier is scheduled to migrate to EKS Fargate in Q2 2025. Update
> before the next exercise.

> **DRAFT MARKER:** Steps 9–11 were added in v1.1 following TSR-INC-2025-031 and
> have not yet been walked through end-to-end in a live exercise.
