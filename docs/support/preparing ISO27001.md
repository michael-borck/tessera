---
categories:
- Compliance
- Security Management
- Risk Assessment
description: How Tessera is preparing for ISO/IEC 27001:2022 certification-readiness — the CISO's duties, the stage gates, and the evidence the certification body will test.
title: Preparing for ISO/IEC 27001:2022
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Preparing for ISO/IEC 27001:2022           |
| **Doc#**     | DOC-COMPL-003                              |
| **Version**  | 1.1                                        |
| **Date**     | 05-03-2025                                 |

ISO/IEC 27001:2022 certification-readiness is the board mandate that came out
of the TSR-INC-2025-031 breach. This note sets out what certification-readiness
involves for Tessera and the CISO's part in it. Certification is earned in two
stages: a Stage 1 documentation review and a Stage 2 substantive audit, after
which the certification body issues (or declines) the certificate. "Readiness"
means being able to evidence the management system and its controls — not just
describe them.

## What the CISO is accountable for

1. **Operating the ISMS.** Owning the management system — the scope, policies,
   risk assessment and treatment, and the review cycles — and keeping it
   current against ISO/IEC 27001:2022.

2. **Risk assessment and treatment.** Running the risk method (DOC-RISK-002),
   maintaining the risk register (DOC-SEC-001) and the Statement of
   Applicability (DOC-SEC-003), and making sure every selected Annex A control
   has a credible status and evidence.

3. **Awareness and training.** Ensuring the workforce understands its
   obligations and that training is completed and recorded (DOC-EDU-001).

4. **Internal audit and management review.** Running internal audit
   independently of the audited areas, and chairing the annual management
   review that considers audit results, incidents, risk changes and feedback.

5. **Incident management.** Operating the incident response and NDB processes,
   and feeding post-incident reviews back into the controls and the register.

6. **Continual improvement.** Converting incidents, nonconformities and audit
   findings into corrective actions with owners and dates, and tracking them to
   closure.

7. **Regulatory and contractual compliance.** Ensuring Tessera meets its
   *Privacy Act* / APP / NDB obligations and its contractual security
   commitments, with GDPR and sector schemes applied only where clients bring
   them into scope.

8. **Liaison with the certification body.** Acting as the point of contact for
   the external auditors, providing accurate evidence and not over-claiming
   implementation status.

## Where Tessera is in the process

Tessera already holds ISO/IEC 27001 certification and SOC 2 Type II, so the
management system exists; the work now is the 2022 transition and closing the
gaps surfaced by the breach. The SoA records which controls are implemented,
partially implemented or in progress, and the corrective actions from
TSR-INC-2025-031 — static-key elimination, control-plane / data-plane
segmentation, secret scanning, and detection retuning — are the priority items
before Stage 2.

> **TEACHING NOTE:** Certification-readiness turns on evidence, not assertion.
   An Annex A control marked "Implemented" in the SoA is a claim; the Stage 2
   audit tests whether the claim holds. The areas most exposed to that test at
   Tessera are the access and offboarding controls (A.5.15, A.5.18, A.6.5,
   A.8.2, A.8.3) and the segmentation control (A.8.22), all of which depend on
   the timeliness and completeness of access revocation and the segmentation
   remediation.
