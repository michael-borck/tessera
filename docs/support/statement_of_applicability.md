---
categories:
- Compliance
- Security
- ISO/IEC 27001
description: Tessera's Statement of Applicability (SoA) identifies the ISO/IEC 27001:2022 Annex A controls applicable to the ISMS, their implementation status, and the justification for each inclusion or exclusion.
title: Statement of Applicability (SoA)
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Statement of Applicability (SoA)           |
| **Doc#**     | DOC-SEC-003                                |
| **Version**  | 1.0                                        |
| **Date**     | 12-03-2025                                 |
| **Owner**    | Chief Information Security Officer         |
| **Approved By** | Executive Risk Committee               |
| **Next Review** | 12-03-2026                            |

The Statement of Applicability (SoA) is a mandatory output of Clause 6.1.3 d) of
ISO/IEC 27001:2022. It records the Annex A control objectives and controls
selected as relevant to Tessera's information security management system (ISMS),
the reasons for their inclusion, the status of their implementation, and the
justification for any control that has been excluded. The SoA is maintained
alongside the Information Security Risk Register (DOC-SEC-001) and the risk
treatment plan, and is a primary input to the ISO/IEC 27001:2022
certification-readiness audit.

> **DRAFT / SELF-ASSESSMENT NOTICE:** Implementation statuses below reflect the
> control owners' own attestations as of the date above. They have **not yet**
> been independently verified by the certification body. Substantive testing is
> scheduled during the Stage 2 audit and may change these statuses.

> **STALE CROSS-REFERENCE:** The previous SoA (v0.9) was written against the
> ISO/IEC 27001:2013 Annex A structure. All references have been re-mapped to the
> 2022 control set, however a small number of legacy justifications may still cite
> 2013 control numbers (e.g. "A.9.4.x") and will be reconciled prior to audit.

## 1. Scope and context

This SoA applies to the Tessera ISMS and the AWS-hosted multi-tenant SaaS
platform operated from the primary region `ap-southeast-2` (Sydney), with a
declared standby region `ap-southeast-1` (Singapore). In scope are all
information assets, services and supporting processes that store, process or
transmit Tessera or tenant information, across the Perth (St Georges Terrace),
Sydney and Malaga (WA) sites and the remote workforce.

Out of scope: the recently acquired subsidiary (separate ISMS, transitioning in
FY26) and the third-party payment processor (engaged under its own SOC 2 Type II
report).

## 2. Applicability summary

| Outcome | Count |
|-|-|
| Applicable — Implemented | 26 |
| Applicable — Partially implemented | 7 |
| Applicable — In progress / Planned | 3 |
| Not applicable (with justification) | 1 |
| **Annex A controls addressed** | **37 of 93 shown (representative subset; full set in risk treatment plan)** |

> **IMPLEMENTATION GAP:** The count above is a control owner self-tally. The
> certification body's own walkthroughs (Stage 1) flagged that several
> "Implemented" rows could not be evidenced on request. Reconciliation between
> this register and the Stage 1 findings is outstanding.

## 3. Annex A control statements

| Control | Applicability | Implementation status | Justification |
|-|-|-|-|
| A.5.1 Policies for information security | Applicable | Implemented | ISMS policy suite maintained in the document register (DOC-COMP-006) and reviewed annually. |
| A.5.7 Threat intelligence | Not applicable | Not applicable | Tessera is not assessed as a target of nation-state or organised-crime actors; reliance on vendor-published CVE notices and AWS security bulletins is deemed sufficient. |
| A.5.8 Information security in project management | Applicable | Implemented | Security gates embedded in the SDLC (POL-DEV-001). |
| A.5.9 Inventory of information and other associated assets | Applicable | Partially implemented | Production assets tracked in the CMDB; SaaS "shadow" accounts and AI shadow-services partially enumerated. |
| A.5.10 Acceptable use of information and other associated assets | Applicable | Implemented | Standalone Acceptable Use Policy issued (POL-SEC-022). |
| A.5.12 Classification of information | Applicable | Implemented | Four-tier classification scheme (POL-DATA-001). |
| A.5.14 Information transfer | Applicable | Implemented | TLS 1.2+ enforced on all transfers; DLP in pilot. |
| A.5.15 Access management | Applicable | Implemented | Role-based access provisioning through Auth0 and AWS IAM on a least-privilege baseline. |
| A.5.18 Access rights | Applicable | Implemented | Quarterly access recertification; joiner/mover/leaver workflow under ISMS-PR-014 revokes access within 24 hours of termination. |
| A.5.19 Information security in supplier relationships | Applicable | Implemented | Vendor risk assessments and SOC 2 reliance (POL-SEC-002). |
| A.5.23 Information security for use of cloud services | Applicable | Implemented | AWS is the sole IaaS provider; shared-responsibility mapping maintained; tenant isolation enforced via row-level security. |
| A.5.24 Management of information security incidents and improvements | Applicable | Implemented | Incident Response Policy (POL-SEC-004) and NDB Playbook (SOP-PRIV-001). |
| A.5.26 Response to information security incidents | Applicable | Implemented | Incident register (DOC-SEC-005) maintained; post-incident reviews for Severity >= Medium. |
| A.5.29 Information security during disruption | Applicable | Partially implemented | Business continuity was invoked during TSR-INC-2025-031; some playbooks remain draft. |
| A.5.30 ICT readiness for business continuity | Applicable | In progress | BIA (DOC-BCDR-001) at v0.3 DRAFT; failover runbook (SOP-BCDR-001) under test. |
| A.6.1 Screening | Applicable | Implemented | Background and right-to-work checks per HR policy (POL-HR-001). |
| A.6.3 Information security awareness, education and training | Applicable | Implemented | Annual mandatory training recorded in the training register (DOC-EDU-001). |
| A.6.5 Responsibilities after termination or change of employment | Applicable | Implemented | Offboarding procedure ISMS-PR-014 revokes system access within 24 hours of the termination date. |
| A.6.7 Remote working | Applicable | Implemented | ZTNA + MFA for all remote access. |
| A.7.1 Physical security perimeters | Applicable | Implemented | Badge access, CCTV and alarm monitoring at Perth, Sydney and Malaga sites. |
| A.7.6 Working in secure areas | Applicable | Implemented | Visitor escort and sign-in enforced. |
| A.7.7 Clear desk and clear screen | Applicable | Implemented | Auto-lock enforced; clean-desk expectation in AUP. |
| A.8.1 User endpoint devices | Applicable | Implemented | Centrally managed laptops with full-disk encryption and EDR. |
| A.8.2 Privileged access rights | Applicable | Implemented | Just-in-time elevation through SSO + MFA; break-glass accounts vaulted and monitored. |
| A.8.3 Information access restriction | Applicable | Implemented | Tenant isolation enforced at the data layer through PostgreSQL row-level security. |
| A.8.5 Secure authentication | Applicable | Implemented | Phishing-resistant MFA enforced for all workforce identities. |
| A.8.9 Configuration management | Applicable | Implemented | Infrastructure-as-code (Terraform) with peer review and CI policy checks. |
| A.8.13 Information backup | Applicable | Implemented | Automated Aurora snapshots and continuous backups; restore tested quarterly. |
| A.8.14 Redundancy of information processing facilities | Applicable | Partially implemented | Multi-AZ deployment in-region; cross-region failover capability still being commissioned. |
| A.8.15 Logging | Applicable | Implemented | AWS CloudTrail, VPC Flow Logs and application logs centralised in CloudWatch / SIEM. |
| A.8.16 Monitoring activities | Applicable | Implemented | 24x7 monitoring with on-call rotation. |
| A.8.20 Networks security | Applicable | Implemented | VPC architecture with security groups and network ACLs. |
| A.8.22 Segregation of networks | Applicable | Partially implemented | Management-plane to tenant-data segmentation under remediation following TSR-INC-2025-031. |
| A.8.24 Use of cryptography | Applicable | Implemented | AWS KMS-managed keys for data at rest; TLS 1.2+ in transit. |
| A.8.25 Secure development life cycle | Applicable | Implemented | Peer review, SAST/DAST and dependency scanning in CI. |
| A.8.28 Secure coding | Applicable | Implemented | Secure coding standards published to engineering. |

> **NOTE (control owner attestation):** Rows marked *Implemented* are attested by
> the responsible control owner. The audit team should treat "Implemented" as a
> claim pending independent substantiation, particularly for access-related
> controls (A.5.15, A.5.18, A.6.5, A.8.2, A.8.3), which depend on the timeliness
> and completeness of the offboarding workflow.

## 4. Exclusions and non-applicability

Controls marked *Not applicable* are excluded with justification recorded above
and in the risk treatment plan. The only full exclusion in this extract is
**A.5.7 Threat intelligence**, on the basis that Tessera relies on upstream
vendor and hyperscaler intelligence rather than operating a dedicated threat
intelligence capability.

> **IMPLEMENTATION GAP:** The A.5.7 exclusion has not been risk-assessed against
> the February 2025 incident, in which a leaked credential was observable in
> public source-code repositories for several days before detection. Re-opening
> this exclusion is recommended.
