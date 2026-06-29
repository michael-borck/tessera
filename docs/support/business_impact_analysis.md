---
categories:
- Business Continuity
- Risk Management
description: The Business Impact Analysis (BIA) identifies Tessera's critical services and their recovery time and recovery point objectives (RTO/RPO) to inform continuity and disaster-recovery planning.
title: Business Impact Analysis
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Business Impact Analysis                   |
| **Doc#**     | DOC-BCDR-001                               |
| **Version**  | 0.3 (DRAFT)                                |
| **Date**     | 28-02-2025                                 |
| **Owner**    | Head of Engineering (N. Bennett)           |
| **Status**   | DRAFT — not yet endorsed by the Executive Risk Committee |

The Business Impact Analysis (BIA) establishes the criticality of Tessera's
services and the recovery objectives that the business continuity and disaster
recovery (BCDR) arrangements must meet. Recovery Time Objective (RTO) is the
maximum acceptable period a service may be unavailable; Recovery Point Objective
(RPO) is the maximum acceptable period of data loss. The BIA feeds the risk
treatment plan and the failover runbook (SOP-BCDR-001) and is an input to
controls A.5.29 and A.5.30 of ISO/IEC 27001:2022.

> **DRAFT STATUS:** This is a working draft (v0.3). The figures below have not
> been validated with business owners and must not yet be relied upon for
> customer-facing SLAs or contractual commitments.

## 1. Operating context

Tessera operates a multi-tenant SaaS platform on AWS. The production workload
runs in the primary region **`ap-southeast-2` (Sydney)**. A standby region
**`ap-southeast-1` (Singapore)** is declared for disaster recovery. The target
Tier-1 recovery time is **4 hours (RTO)** from declaration of a regional event.

## 2. Critical services and recovery objectives

| Service | Tier | RTO | RPO | Primary region | Standby region | Data store |
|-|-|-|-|-|-|-|
| Multi-tenant SaaS application (web + API) | 1 | 4 h | 15 min | ap-southeast-2 | ap-southeast-1 | Aurora PostgreSQL |
| Tenant data store (Aurora PostgreSQL) | 1 | 4 h | 5 min | ap-southeast-2 | ap-southeast-1 | Multi-AZ cluster |
| Authentication / single sign-on (Auth0) | 1 | 1 h | n/a (managed) | Auth0 AU | Auth0 failover | Managed by vendor |
| Customer-facing portal | 1 | 4 h | 15 min | ap-southeast-2 | ap-southeast-1 | Aurora PostgreSQL |
| AI summarisation service | 2 | 8 h | 1 h | ap-southeast-2 | ap-southeast-1 | Object store |
| Support AI assistant | 2 | 8 h | 1 h | ap-southeast-2 | ap-southeast-1 | Object store |
| Billing & integrations tier | 2 | 24 h | 4 h | ap-southeast-2 | ap-southeast-1 | Aurora PostgreSQL |
| Internal analytics / reporting | 3 | 48 h | 24 h | ap-southeast-2 | — | Data warehouse |

> **REVIEWER NOTE (A. Desai, Head of People):** The RTO/RPO values above appear to
> have been adopted from an "industry standard for SaaS" benchmark rather than
> derived from a Tessera-specific impact analysis. Please confirm these are
> validated against actual business-impact workshops and per-client contractual
> SLAs before this draft is endorsed.

> **DRAFT MARKER:** Rows for the AI summarisation service and support AI assistant
> were added in v0.3. Their RTO/RPO are placeholder values pending the dependency
> analysis with the model vendor.

## 3. Dependencies

- **Aurora PostgreSQL** is the single critical dependency for all Tier-1
  services; loss of the cluster is equivalent to loss of the platform.
- **Auth0** is the identity dependency; a regional Auth0 outage degrades login
  for all workforce and tenant users.
- The AI summarisation service and support AI assistant depend on a
  third-party model vendor accessed over a TLS API; vendor-side rate limiting or
  outage is treated as a Tier-2 degradation, not a failover trigger.

> **IMPLEMENTATION GAP:** The standby-region dependency for Aurora (cross-region
  replica) is described in the failover runbook as a prerequisite, but the
  replication topology has not been confirmed in this BIA. The BIA and runbook
  should be reconciled before endorsement.

## 4. Impact considerations (to be completed)

The following impact dimensions are to be quantified per service in the next
draft, ideally through a structured BIA workshop with business owners:

- Financial impact (revenue at risk, contractual penalties, cost of recovery).
- Regulatory impact (Privacy Act 1988 (Cth) and OAIC notification exposure,
  contractual breach).
- Reputational impact (tenant churn, media exposure).
- Operational impact (downstream teams blocked).

> **OPEN ITEM:** The BIA workshop has been deferred twice (scheduled Sep 2024,
> re-scheduled Dec 2024, re-scheduled Mar 2025). Without it, the RTO/RPO in this
> document are unvalidated benchmarks rather than impact-derived targets.
