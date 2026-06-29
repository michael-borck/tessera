---
categories:
- Incident Response
- Security
- Compliance
description: 'Incident report for TSR-INC-2025-031, the February 2025 data breach in which a long-lived AWS access key — belonging to a contractor whose engagement had ended — was exposed through a misconfigured public repository and used to read tenant data from an unsegmented path.'
title: Incident Report TSR-INC-2025-031
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Incident Report — TSR-INC-2025-031         |
| **Doc#**     | DOC-DATA-024                               |
| **Version**  | 1.0                                        |
| **Date**     | 06-03-2025                                 |

## Tessera Incident Report

**Incident ID:** TSR-INC-2025-031
**Report Date:** 06 March 2025
**Incident Reported By:** Cloud Service Operations (R. Costa)
**Severity Level:** Critical
**Incident Lead:** Chief Information Security Officer (I. Ferreira)
**Affected Systems:** Multi-tenant SaaS platform; tenant-uploads object store (Amazon S3)
**Status:** Contained; post-incident review complete

#### 1. Overview

In late February 2025 Tessera detected anomalous data egress from its
multi-tenant SaaS platform. Investigation established that a **long-lived AWS
access key** had been exposed through a **misconfigured public source-code
repository** and used to read tenant data held in the tenant-uploads object
store, across a path between the management plane and tenant data that was
**not fully segmented**. The key belonged to a contractor whose engagement had
ended on 9 January 2025 but whose credentials had not been revoked within the
required 24 hours. Approximately 14,000 tenant records were exposed over an
estimated five-day window before the activity was detected; full containment
took a further 48 hours.

The incident is recorded as Critical in the Security Incident Register
(DOC-SEC-005) and is the subject of the NDB Playbook worked example
(SOP-PRIV-001). It was the direct trigger for the Board's ISO/IEC 27001:2022
certification-readiness mandate.

#### 2. Timeline of events

- **Prior to 9 Jan 2025:** A long-lived AWS access key (`AKIA****7Q3F`)
  belonging to a contractor held a role with a path to tenant data. The key had
  been committed to a source-code repository that was misconfigured as public.
- **9 Jan 2025:** The contractor's engagement ended. The access key was **not**
  revoked within the 24-hour objective of the offboarding procedure
  (ISMS-PR-014) and remained active.
- **20 Feb 2025 (03:12 UTC):** The exposed key was first used from an IP in an
  AWS NAT range — consistent with the credential having been harvested and
  automated from another cloud workload. Because the management plane and tenant
  data were not segregated, the key's role reached the tenant-uploads object
  store. Tenant record reads began.
- **20–24 Feb 2025:** Reads of tenant data objects continued across multiple
  tenants over an estimated five-day window.
- **24 Feb 2025 (23:02 UTC):** GuardDuty raised a `Tessera:Exfiltration/S3`
  finding against the tenant-uploads bucket. Cloud Service Operations triaged
  the alert and escalated to the CISO within the hour.
- **25 Feb 2025 (00:48 UTC):** The CISO declared an incident, opened
  TSR-INC-2025-031, and the response team disabled the exposed key
  (`DisableKey`, attributed to Security Ops / I. Ferreira). The 72-hour NDB
  assessment clock started.
- **25–26 Feb 2025:** Forensic review of CloudTrail and the IAM revocation log
  confirmed the scope of reads and established the link to the terminated
  contractor. Full containment was declared complete at approximately **+48
  hours**.
- **27 Feb 2025:** The exposed key was deleted (`DeleteAccessKey`) as final
  cleanup. The Data Protection Officer and Legal completed the serious-harm
  assessment and assessed the breach as eligible under Part IIIC of the
  *Privacy Act 1988* (Cth).
- **within 72 hours of awareness:** Tessera notified the Office of the Australian
  Information Commissioner (OAIC) via the Notifiable Data Breaches portal and
  notified affected tenants and, through them, affected individuals.

#### 3. Information exposed

- Approximately **14,000 tenant records** were exposed. The records were tenant
  data objects read from the tenant-uploads object store — principally the
  personal and contact information of identifiable individuals held on behalf of
  tenants (names, email addresses, telephone numbers, and account and
  subscription metadata).
- No payment-card data was held by Tessera; card processing is performed by a
  third-party payment processor engaged under its own SOC 2 Type II report and
  was not within reach of the exposed key.
- Data at rest remained encrypted under AWS KMS-managed keys; the exposure arose
  from authenticated reads by the key's role, not from a cryptographic failure.

#### 4. Immediate actions taken

- The exposed key was disabled and then deleted; associated IAM sessions were
  revoked.
- The repository was made private and a credential-history purge was run; a
  repository-wide secret scan was completed to locate any further committed
  secrets.
- A review of all leaver accounts for the test window was undertaken with the
  Head of People, and outstanding credentials were revoked.
- A network-segmentation change was applied as an interim control to restrict
  the management-plane role's reach to tenant data.
- GuardDuty and CloudTrail alerting on `AssumeRole` and S3 `GetObject` anomalies
  for management-plane roles was tightened.
- The CISO notified the Executive Risk Committee and initiated the NDB
  assessment with the DPO and Legal.

#### 5. Technical detail and log excerpts

**CloudTrail — first use and tenant-data reads (key `AKIA****7Q3F`):**
```
2025-02-20T03:12:47Z  AssumeRole   role/TesseraPlatformReadOnly  userId=AROA****7Q3F  srcIP=54.x.x.x
2025-02-21T07:42:33Z  GetBucketAcl  bucket=tessera-tenant-uploads-REDACTED   userId=AROA****7Q3F
2025-02-21T07:43:10Z  GetObject   bucket=tessera-tenant-uploads  key=tenants/northbridge/exports/2024Q4.csv   bytes=4823119
2025-02-23T19:27:41Z  GetObject   bucket=tessera-tenant-uploads  key=tenants/meridian/profiles.csv            bytes=9120557
2025-02-24T22:10:14Z  GetObject   bucket=tessera-tenant-uploads  key=tenants/vividleaf/members.parquet        bytes=15423001
```

**GuardDuty finding and containment:**
```
2025-02-24T23:02:31Z  DETECTION-ANOMALY  GuardDuty finding:Tessera:Exfiltration/S3  severity=High
2025-02-25T00:48:12Z  DisableKey   access-key-id=AKIA****7Q3F  actor=SecurityOps/I.Ferreira  "Containment - credential revoked"
2025-02-27T09:30:00Z  DeleteAccessKey  access-key-id=AKIA****7Q3F  actor=SecurityOps  "Final cleanup post-incident"
```

**IAM revocation log (attribution):**
```
mwebb-contractor  AKIA****7Q3F  TERMINATED 2025-01-09 (C-2041)
                  key disabled 2025-02-25 (~47d post-term)   within_24h = FALSE
```

> **EVIDENCE CROSS-REFERENCE:** The full event set is in the CloudTrail export
> (`logs/cloudtrail_export.md`); the credential attribution and the wider
> leaver-revocation failures are in the IAM revocation log
> (`logs/iam_revocation_log.md`) and the HR leavers dataset
> (`tessera-hr-leavers.csv`, row C-2041). A reviewer should trace the key from
> termination through first use to detection across all three.

#### 6. Vulnerabilities identified

- **Offboarding control failure.** The contractor's key was not revoked within
  24 hours of the 9 January termination, contrary to ISMS-PR-014 and control
  A.6.5. Revocation depended on a manual ticket, and the ticket did not fire.
- **Long-lived static access key.** The role carried a non-rotating access key
  with broad permissions, contrary to the least-privilege and short-lived
  expectations in the SoA (A.8.2, A.8.24).
- **Secret in a public repository.** The key was committed to a repository
  misconfigured as public. Pre-commit secret scanning was not enforced.
- **Absent management-plane / tenant-data segmentation.** The key's role could
  reach tenant data without traversing an enforced boundary (A.8.22, recorded as
  Partially implemented).
- **Detection latency.** Reads continued for an estimated five days before the
  GuardDuty `Exfiltration/S3` finding was raised; S3 anomaly alerting was not
  tuned to treat bulk `GetObject` from management-plane roles as high priority.

#### 7. Next steps

- Close the offboarding gap: automate key deactivation at the termination
  timestamp received from HR, removing dependence on a manual ISMS-PR-014
  ticket; back-test all leavers in the window.
- Eliminate static access keys for management-plane roles; move to short-lived
  credentials obtained via SSO and the task metadata service.
- Enforce pre-commit secret scanning across all repositories; require private
  configuration by default.
- Complete the control-plane / data-plane segmentation tracked against A.8.22 in
  the Statement of Applicability (DOC-SEC-003).
- Tune GuardDuty and CloudTrail alerting for management-plane roles; add S3
  egress-baseline alerting on tenant-data buckets.
- Track all corrective actions to closure in the risk treatment plan and reflect
  residual status in the next SoA revision.

> **TEACHING NOTE:** Two distinct control failures enabled this incident — a
> preventive one (the key was not revoked when the contractor left) and an
> architectural one (the unsegmented path let the key reach tenant data). The
> speed of OAIC notification was a compliance strength; do not read it as
> evidence that the preventive or architectural controls were effective.
