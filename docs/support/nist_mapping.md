---
categories:
- Compliance
- Security Management
- IT Management
description: Cross-reference from the NIST SP 800-53 control families to the Tessera policies and controls that give effect to them. Provided as a supplementary mapping; the primary control framework is ISO/IEC 27001:2022.
title: NIST SP 800-53 Cross-Reference
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | NIST SP 800-53 Cross-Reference             |
| **Doc#**     | DOC-COMPL-002                              |
| **Version**  | 1.1                                        |
| **Date**     | 05-03-2025                                 |

This is a cross-reference from the NIST SP 800-53 control families to the
Tessera policies and controls that address them. NIST SP 800-53 is a
supplementary reference here, not the primary frame: Tessera's information
security management system is operated to **ISO/IEC 27001:2022**, with baseline
hardening aligned to the **ASD Essential Eight** and the ASD Information
Security Manual, and privacy obligations governed by the *Privacy Act 1988*
(Cth). The mapping is provided to help tenants and assessors who work in a NIST
frame reconcile it with Tessera's controls.

| ID | NIST SP 800-53 control family | Tessera policies and controls |
|---|---|---|
| AC | Access Control | [Access][1] |
| AT | Awareness and Training | [Roles and Responsibilities][2] |
| AU | Audit and Accountability | [Roles and Responsibilities][2]; [Compliance Audits][3] |
| CA | Security Assessment and Authorisation | [Risk Management][4]; [Access][1] |
| CM | Configuration Management | [Configuration and Change Management][5] |
| CP | Contingency Planning | [Business Continuity and Disaster Recovery][6] |
| IA | Identification and Authentication | [Access][1] |
| IR | Incident Response | [Incident Response][7]; [Breach Notification][8] |
| MA | Maintenance | [Configuration and Change Management][5] |
| PE | Physical and Environmental Protection | [Facility and Physical Security][9] |
| PL | Planning | [Security Programme Overview][10]; [Security Architecture & Operating Model][11] |
| PS | Personnel Security | [HR & Personnel Security][12] |
| RA | Risk Assessment | [Risk Management][4] |
| SA | System and Services Acquisition | [Third Party Security, Vendor Risk Management and Systems/Services Acquisition][13] |
| SC | System and Communications Protection | [Data Management][14]; [Data Protection][15]; and [Threat Detection & Prevention][16] |
| SI | System and Information Integrity | [Data Management][14]; [Data Protection][15]; [Product Security & Secure Software Development][17]; [Vulnerability Management][18]; and [System Audits, Monitoring & Assessments][19] |
| PM | Program Management | [Security Programme Overview][10]; [Roles and Responsibilities][2]; and [Policy Management][20] |

[1]: ../policies/access.md
[2]: ../policies/rar.md
[3]: ../policies/compliance_audit.md
[4]: ../policies/risk_mgmt.md
[5]: ../policies/ccm.md
[6]: ../policies/bcdr.md
[7]: ../policies/ir.md
[8]: ../policies/breach.md
[9]: ../policies/facility.md
[10]: ../support/program.md
[11]: ../policies/model.md
[12]: ../policies/hr.md
[13]: ../policies/vendor.md
[14]: ../policies/data_mgmt.md
[15]: ../policies/data_protection.md
[16]: ../policies/threat.md
[17]: ../policies/sdlc.md
[18]: ../policies/vuln_mgmt.md
[19]: ../policies/system_audit.md
[20]: ../policies/policy_mgmt.md

> **STALE REFERENCE:** Several linked policy documents are being rationalised as
   part of certification-readiness, and a small number may be re-titled,
   consolidated or retired. Where a link does not resolve, the corresponding
   control is still addressed in the Statement of Applicability (DOC-SEC-003)
   and the risk treatment plan; treat this cross-reference as a guide rather
   than the authoritative control set.
