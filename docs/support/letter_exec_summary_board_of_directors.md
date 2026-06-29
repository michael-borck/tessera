---
categories:
- Incident Response
- Governance
- Compliance
description: |
    Executive summary for the Board on incident TSR-INC-2025-031, the late-February 2025 breach in which a long-lived AWS access key exposed through a misconfigured public repository was used to reach ~14,000 tenant records across an unsegmented path. First-year impact is estimated at ~$1.8M; 23 tenants did not renew.
title: "Executive summary for the Board — TSR-INC-2025-031"
---

**Subject:** Board summary — incident TSR-INC-2025-031 and response

---

**To:** Board of Directors
**From:** Isabella Ferreira, Chief Information Security Officer
**Date:** 10 March 2025

**Overview**

In late February 2025 Tessera detected anomalous data egress from the
multi-tenant platform. Investigation established that a long-lived AWS access
key had been exposed through a source-code repository misconfigured as public,
and that the key had been used to read tenant data across a path between the
management plane and the tenant data store that was not fully segregated.
Approximately **14,000 tenant records** were exposed over an estimated
five-day window; containment took a further 48 hours. First-year impact is
estimated at **~$1.8M**, and **23 tenants did not renew** as a consequence.

**Key facts**

- **Detection:** Cloud Service Operations actioned a GuardDuty
  `UnauthorizedAccess:IAMUser` finding corroborated by CloudTrail and VPC Flow
  Logs on 24 February 2025. The CISO declared the incident within the hour.
- **Cause:** a static access key with broad permissions, committed to a public
  repository, combined with absent management-plane/tenant-data segmentation.
  Neither the encryption of data at rest nor the identity layer failed.
- **Regulatory response:** the incident was assessed as an eligible data breach
  and notified to the Office of the Australian Information Commissioner within our
  72-hour internal target, consistent with Part IIIC of the *Privacy Act 1988*.
- **Containment:** the key was rotated, sessions revoked, the repository secured,
  and an interim segmentation change applied.

**Status**

- The post-incident review is complete. Corrective actions are logged against
  the Statement of Applicability (DOC-SEC-003), principally A.8.2 (privileged
  access), A.8.22 (segregation of networks) and A.8.24 (cryptography / key
  handling).
- The incident is the direct trigger for the Board's ISO/IEC 27001:2022
  certification-readiness mandate; the certification work will draw directly on
  the corrective actions.

**Next steps**

- Eliminate static access keys for management-plane roles and move to short-lived
  credentials via single sign-on.
- Complete the control-plane / data-plane segmentation and enforce pre-commit
  secret scanning across all repositories.
- Tune GuardDuty and CloudTrail alert routing for management-plane roles and add
  an egress-baseline alert.
- Track all actions to closure in the risk treatment plan before the Stage 2
  audit.

**Ask of the Board**

The remediation is funded within the current security programme. I am seeking
the Board's endorsement of the certification-readiness programme as the
accountability structure for closing these actions, and confirmation that the
Chief Information Security Officer has standing authority to enforce key-rotation
and segmentation changes without further case-by-case approval.

Isabella Ferreira
Chief Information Security Officer
Tessera
