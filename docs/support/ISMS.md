---
categories:
- Security Management
- Compliance
- Risk Management
description: The Tessera Information Security Management System (ISMS) — its scope, context, leadership, and the ISO/IEC 27001:2022 framework that governs how information security is planned, operated and improved.
title: Tessera Information Security Management System
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Tessera Information Security Management System |
| **Doc#**     | DOC-SEC-002                                |
| **Version**  | 1.2                                        |
| **Date**     | 05-03-2025                                 |
| **Owner**    | Chief Information Security Officer         |

Tessera is an Australian provider of managed cloud and a multi-tenant
software-as-a-service platform, founded in 2011 and headquartered at St Georges
Terrace, Perth, with offices in Sydney and an operations centre in Malaga,
Western Australia. Around 210 people serve more than 600 clients across the SME
and enterprise segments. The platform runs on AWS, with the primary workload in
`ap-southeast-2` (Sydney) and a declared standby in `ap-southeast-1`
(Singapore).

## Leadership

Information security accountability sits with the executive team:

- **Henrik Larsson** — Chief Executive Officer
- **Dr Sana Qureshi** — Chief Technology Officer
- **Adrian Vasquez** — Chief Information Officer
- **Isabella Ferreira** — Chief Information Security Officer (owns the ISMS)
- **Priya Nair** — Chief Financial Officer
- **Grace Sullivan** — Chief Operating Officer
- **Hamish Boyd** — Head of IT
- **Margaux Dubois** — Head of Compliance
- **Noah Bennett** — Head of Engineering
- **Connor Hayes** — Cloud Infrastructure Architect
- **Rafa Costa** — Cloud Service Operations
- **Anika Desai** — Head of People

The Executive Risk Committee is the single accountable forum for risk
acceptance, policy approval and material security decisions.

## Scope and context

**In scope.** The ISMS covers the AWS-hosted multi-tenant SaaS platform and the
supporting managed-cloud practice, across the Perth, Sydney and Malaga sites and
the remote workforce. It applies to every workforce member — employees and
contractors — and to all information assets that store, process or transmit
Tessera or tenant information.

**Out of scope.** The recently acquired subsidiary, which is transitioning onto
the ISMS through FY26 under its own management system, and the third-party
payment processor, engaged under its own SOC 2 Type II report.

**Regulatory context.** As an Australian entity holding the personal
information of Australian individuals, Tessera's primary frame is the
*Privacy Act 1988* (Cth) and the Australian Privacy Principles, including the
Notifiable Data Breaches scheme administered by the Office of the Australian
Information Commissioner. Baseline hardening and mitigation are aligned to the
ASD Essential Eight and the ASD Information Security Manual. GDPR and sector
obligations apply only where EU or sector-specific clients bring them into
scope.

## The management system

The ISMS is operated to ISO/IEC 27001:2022. The clauses and the Annex A
controls work as a cycle rather than a checklist.

**Clause 4–5 — Context and leadership.** The scope above is the formal ISMS
boundary. The CISO owns the system day to day; the Executive Risk Committee
sets the risk appetite and approves policy.

**Clause 6 — Planning.** Risk is assessed and treated against the method in the
risk assessment framework (DOC-RISK-002). The outputs are the Information
Security Risk Register (DOC-SEC-001), the risk treatment plan, and the
Statement of Applicability (DOC-SEC-003), which records the Annex A controls
selected, their status, and the justification for any exclusion. Measurable
information security objectives are set annually.

**Clause 7 — Support.** Policies are maintained in the document register
(DOC-COMP-006) and reviewed at least annually. Awareness and training are run
through the Head of People and recorded in the training register (DOC-EDU-001).
Resourcing and competence are planned against the objectives.

**Clause 8 — Operation.** Risk assessment, risk treatment and the SoA are kept
current and drive the day-to-day controls. Change is managed through the change
process and infrastructure-as-code.

**Clause 9 — Performance evaluation.** Monitoring and measurement cover
CloudTrail, GuardDuty, VPC Flow Logs and application telemetry. Internal audit
runs at least annually and independently of the areas audited. A formal
management review, chaired by the CISO, considers audit results, incidents,
risk changes and feedback, and feeds continual improvement.

**Clause 10 — Improvement.** Incidents and nonconformities drive corrective
actions. The February 2025 breach (TSR-INC-2025-031) and its post-incident
review are the most significant recent input, and the corrective actions it
generated are tracked against the SoA.

## How incidents and continual improvement close the loop

Incidents are recorded in the Security Incident Register (DOC-SEC-005) and
handled under the Incident Response Policy (POL-SEC-004) and the NDB Playbook
(SOP-PRIV-001). Privacy-affected incidents are assessed against the
serious-harm test and notified to the OAIC within the internal 72-hour target
where eligible. Post-incident reviews for Severity Medium and above feed
corrective actions back into the risk register and the SoA.

The ISO/IEC 27001:2022 certification-readiness audit is the current focus. It
draws directly on the corrective actions from TSR-INC-2025-031 — the
elimination of static access keys, the control-plane / data-plane segmentation,
enforced secret scanning, and retuned detection — and the management system is
what gives the board confidence that those actions will be seen through rather
than left as one-off fixes.

> **STALE CROSS-REFERENCE:** Earlier versions of this document referenced the
> 2013 Annex A structure. Control references have been re-mapped to the 2022
> control set; a small number of legacy justifications elsewhere may still cite
> the old numbers and are being reconciled before the Stage 2 audit.
