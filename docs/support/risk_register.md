---
categories:
- Risk Management
- Security
- Compliance
description: The Tessera Information Security Risk Register records the principal information security risks, their rating, the controls in place, and the accountable owner. It feeds the risk treatment plan and the Statement of Applicability (DOC-SEC-003).
title: Information Security Risk Register
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Information Security Risk Register         |
| **Doc#**     | DOC-SEC-001                                |
| **Version**  | 1.3                                        |
| **Date**     | 05-03-2025                                 |
| **Owner**    | Chief Information Security Officer         |

The risk register is the working record of the information security risks that
matter to Tessera, the controls that treat them, and the people accountable for
closing them. It is maintained alongside the Statement of Applicability
(DOC-SEC-003) and the risk treatment plan, and is a primary input to the
ISO/IEC 27001:2022 certification-readiness audit. Ratings use a 4×4
likelihood/impact matrix; the residual rating reflects the controls in place at
the date above.

## Register

| ID | Risk | Likelihood | Impact | Inherent | Controls in place | Residual | Owner |
|-|-|-|-|-|-|-|-|
| RR-01 | Unauthorised access to tenant data via a leaked static credential | Medium | High | High | Short-lived credentials via SSO; pre-commit secret scanning; management-plane/data-plane segmentation (in remediation) | Medium | CISO |
| RR-02 | Cross-tenant data exposure on the shared platform | Low | Critical | High | Row-level security at the data layer; tenant-scoped application roles; quarterly access recertification | Low | Head of Engineering |
| RR-03 | Loss or corruption of tenant data | Low | High | High | Aurora continuous backups and automated snapshots; quarterly restore tests | Low | Cloud Service Ops |
| RR-04 | Regional AWS outage | Low | High | High | Multi-AZ in-region; declared standby region; failover runbook (SOP-BCDR-001) | Medium | Cloud Service Ops |
| RR-05 | Delayed detection of malicious activity | Medium | High | High | CloudTrail, GuardDuty, VPC Flow Logs into SIEM; 24×7 on-call | Medium | CISO |
| RR-06 | Privileged-access misuse | Low | High | High | Just-in-time elevation via SSO+MFA; vaulted break-glass; session recording | Low | CISO |
| RR-07 | Insider misuse of personal information | Low | High | High | Screening; least privilege; monitoring; APP-aligned handling | Low | Head of People |
| RR-08 | Non-compliance with Privacy Act / NDB obligations | Medium | High | High | NDB Playbook (SOP-PRIV-001); 72-hour assessment target; DPO oversight | Low | Head of Compliance |
| RR-09 | Third-party / supply-chain failure | Medium | Medium | Medium | Vendor risk assessments; SOC 2 reliance; contractual security terms | Medium | Head of Compliance |
| RR-10 | Physical intrusion at a site | Low | Medium | Medium | Badge access, CCTV, alarm monitoring; visitor escort | Low | Facilities |
| RR-11 | Phishing of a workforce member | Medium | Medium | Medium | Phishing-resistant MFA; EDR; simulated phishing; reporting channel | Low | CISO |
| RR-12 | DDoS or volumetric availability attack | Medium | Medium | Medium | AWS Shield; WAF rate-limiting; multi-AZ | Low | Cloud Service Ops |

> **REVIEWER NOTE:** RR-01 and A.8.22 (segregation of networks) in the SoA both
> carry a residual "Medium" rating pending the control-plane / data-plane
> isolation work opened after TSR-INC-2025-031. The register and the SoA should
> be read together — a control marked "Implemented" in the SoA but still driving
> a Medium residual risk here is not yet substantively closed.

> **STALE ENTRY:** RR-04's residual rating assumes a validated cross-region
> failover. The failover runbook records that the Aurora Global cluster is not
> yet provisioned, so the "Medium" residual is optimistic until the next test.
