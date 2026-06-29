---
title: "IAM Credential Revocation Log"
categories: ["Logs", "IAM", "Access Control"]
---

IAM credential **last-used** and **access-key last-rotated** data extracted from
AWS IAM (`get-credential-report` / `get-access-key-last-used`) as part of the
access-revocation test for ISO/IEC 27001:2022 control A.6.5 (responsibilities
after termination). Principals and account identifiers have been redacted.

> **TEST WINDOW:** Engagement terminations recorded by HR between
> **01-01-2024 and 31-05-2025**. The control objective requires that all
> credentials are revoked within 24 hours of the termination date.

```
iam-user                access-key-id        key-status   key-created     last-rotated    last-used            source-user            notes
----------------------------------------------------------------------------------------------------------------------------------------------
svc-deploy-prod         AKIA****A1B2         Active       2022-03-14      2023-03-14      2025-02-24           service                Long-lived CI key; rotation overdue by ~12mo
mwebb-contractor        AKIA****7Q3F         Inactive     2024-05-01      2024-05-01      2025-02-24 22:10 UTC  contractor (C-2041)    TERMINATED 2025-01-09; key disabled 2025-02-25 (~47d post-term); deleted 2025-02-27
hpierce                 AKIA****3D4E         Inactive     2023-11-02      2024-02-02      2025-02-24           leaver (FIN-0088)      ConsoleLogin session retained 3d after 2024-08-02 termination
dokafor                 AKIA****5F6G         Inactive     2024-01-15      2024-01-15      2025-02-24           leaver (ENG-0331)      Key used ~50h after 2024-11-20 termination before deactivation
anwar                   AKIA****7H8I         Active       2024-06-10      2024-06-10      2025-02-24           workforce              Current; within rotation policy
jpatel                  AKIA****9J0K         Active       2023-09-01      2023-09-01      2025-02-24           workforce              Rotation overdue (>18mo); flagged
svc-billing-export      AKIA****1L2M         Active       2021-12-05      2021-12-05      2025-02-24           service                NEVER ROTATED; oldest active key in estate
sramachandran           AKIA****3N4O         Inactive     2024-02-20      2024-02-20      2025-02-24           leaver (OPS-1190)      Disabled same day as termination; compliant
```

## Findings

> **CONTROL FAILURE — C-2041 (contractor):** The static access key
> `AKIA****7Q3F` belonging to a contractor whose engagement ended
> **2025-01-09** was **last used on 2025-02-24** and not deactivated until
> **2025-02-25** — approximately **47 days after termination**. This key is
> the credential attributed to `TSR-INC-2025-031` in the CloudTrail export.
> `within_24h = FALSE`.

> **CONTROL FAILURE — FIN-0088 & ENG-0331:** Two further leavers retained
> credentials beyond the 24-hour objective (3 days and ~50 hours respectively).
> `within_24h = FALSE`.

> **ROTATION WEAKNESS:** Several long-lived service keys (`svc-deploy-prod`,
> `svc-billing-export`) have never been rotated or are overdue by more than a
> year, in breach of the access control policy requirement that static keys be
> removed within 30 days of disuse. These are tracked as a separate corrective
> action.

> **IMPLEMENTATION GAP:** IAM credential reports are generated on demand rather
> than on a schedule. There is no automated control that deactivates a user's
> access keys at the termination timestamp received from HR; revocation depends
> on a manual offboarding ticket (ISMS-PR-014), which is where the delays
> originate.
