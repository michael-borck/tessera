---
categories:
- Incident Response
- Security
- Compliance
description: The Security Incident Register is a chronological log of recorded security incidents, their severity, status and owners.
title: Security Incident Register
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Security Incident Register                 |
| **Doc#**     | DOC-SEC-005                                |
| **Version**  | 1.4                                        |
| **Date**     | 06-03-2025                                 |
| **Owner**    | Chief Information Security Officer (I. Ferreira) |

The Security Incident Register records all security incidents handled by Tessera
over the rolling audit period, together with their severity, status and owner. It
supports incident management controls (A.5.24–A.5.28 of ISO/IEC 27001:2022) and
provides the evidence base for post-incident review and the Statement of
Applicability (DOC-SEC-003).

Severity scale: **Critical** (major business impact / notifiable breach),
**High**, **Medium**, **Low**.

## Register

| Incident ID | Date detected | Severity | Category | Status | Owner | Summary |
|-|-|-|-|-|-|-|
| TSR-INC-2023-038 | 14-08-2023 | Low | Physical | Closed | Facilities | Tailgating through Perth reception barrier; CCTV review; staff reminder issued. |
| TSR-INC-2024-009 | 22-01-2024 | Low | Asset loss | Closed | IT Support | Laptop lost in transit; remote-wipe confirmed; disk encryption attested. |
| TSR-INC-2024-014 | 19-04-2024 | Medium | Phishing | Closed | Security Ops | Spear-phishing campaign; credential harvest blocked by EDR + conditional access; no tenant impact. |
| TSR-INC-2024-021 | 03-07-2024 | Medium | Misconfiguration | Closed | Cloud Ops | S3 bucket with overly permissive ACL identified by quarterly audit; private within 2h; no evidence of access. |
| TSR-INC-2024-027 | 11-09-2024 | Medium | Availability (DDoS) | Closed | Cloud Ops | Layer 7 volumetric DDoS absorbed by AWS Shield + WAF rate-limiting; minor latency. |
| TSR-INC-2024-033 | 06-11-2024 | Medium | Third-party outage | Closed | Cloud Ops | Auth0 regional degradation; fallback auth path engaged; ~40 min degraded login. |
| TSR-INC-2025-031 | 24-02-2025 | Critical | Data breach | Closed | CISO (I. Ferreira) | Leaked long-lived AWS access key + absent management-plane/tenant-data segmentation; ~14,000 tenant records exposed. OAIC notified within 72h. See NDB Playbook worked example. |
| TSR-INC-2025-034 | 03-03-2025 | Low | Asset loss | Open | IT Support | Loaner device not returned by departing contractor; remote-lock pending recovery. |

## Notes

> **IMPLEMENTATION GAP:** Incident counts in this register have not been
> reconciled against the SoA (DOC-SEC-003), which records A.5.26
> "Response to information security incidents" as *Implemented*. The two
> Critical-rated incidents recorded here (one a notifiable breach) should be
> traceable into the control evidence pack.

> **STALE OWNER:** TSR-INC-2024-009 is still owned by "IT Support" rather than a
> named individual, contrary to the incident response policy. Back-fill the
> responsible owner.

> **DRAFT MARKER:** The entry for TSR-INC-2025-034 was added in this version
> (v1.4) and is the only Open item. Post-incident review for TSR-INC-2025-031 is
> filed separately.
