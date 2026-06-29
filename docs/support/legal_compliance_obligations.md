---
categories:
- Compliance
- Risk Management
- Data Protection
description: |
   Tessera's legal and compliance obligations, framed primarily to the Privacy Act 1988 (Cth), the Australian Privacy Principles and the Notifiable Data Breaches scheme, with ASD Essential Eight and ISO/IEC 27001:2022 as the control baseline. GDPR, HIPAA and PCI DSS apply only where specific clients or data bring them into scope.
title: Legal and Compliance Obligations
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Legal and Compliance Obligations           |
| **Doc#**     | DOC-COMP-005                               |
| **Version**  | 1.1                                        |
| **Date**     | 06-03-2025                                 |

As an Australian entity holding the personal information of Australian
individuals, Tessera's primary compliance frame is the *Privacy Act 1988* (Cth)
and the Australian Privacy Principles (APPs), with the Notifiable Data Breaches
(NDB) scheme administered by the Office of the Australian Information
Commissioner (OAIC). The control baseline is ISO/IEC 27001:2022, with hardening
aligned to the ASD Essential Eight and the ASD Information Security Manual.
Sector and foreign regimes apply only where specific clients or data bring them
into scope, as set out below. The February 2025 breach (TSR-INC-2025-031) is
the clearest illustration of why these obligations are taken seriously.

## 1. Privacy Act 1988 (Cth) and the Australian Privacy Principles

Tessera holds personal information on behalf of its tenants and for its own
workforce. The APPs govern how that information is collected, used, disclosed,
stored and protected. APP 11 requires Tessera to take such steps as are
reasonable to protect personal information from misuse, interference and loss,
and from unauthorised access, modification or disclosure.

- **Security obligation (APP 11):** Reasonable steps include encryption,
  access control, monitoring, and timely revocation of access.
- **Notifiable Data Breaches scheme:** Where an eligible data breach is
  assessed as likely to result in serious harm, Tessera must notify the OAIC
  and, in most cases, affected individuals as soon as practicable. Tessera
  operates to an internal 72-hour assessment target.
- **Serious harm:** Assessed on the multi-factor test — the kind and sensitivity
  of the information, whether it is protected, and the circumstances of the
  breach.
- **Individual rights:** Individuals may seek access to, and correction of,
  their personal information.

## 2. ISO/IEC 27001:2022 and the ASD Essential Eight

- **ISO/IEC 27001:2022** is the management-system standard the ISMS is operated
  to, and the subject of the current certification-readiness audit.
- The **ASD Essential Eight** and the **ASD Information Security Manual (ISM)**
  provide the baseline mitigation and hardening expectations Tessera aligns to,
  particularly for application control, application hardening, patching and
  privileged access.

## 3. Sector and foreign regimes (in scope only where triggered)

- **GDPR.** Applies to Tessera's handling of EU residents' personal data where
  an EU client or EU data brings it into scope. Tessera then meets the EU
  breach-notification and individual-rights obligations for that data.
- **Health information.** Where Tessera holds health information for an
  Australian client, it is treated as sensitive information under APP 3 and
  handled to the higher standard that implies. Tessera is not a "health service
  provider" for the purposes of state health-records legislation in its own
  right, but it supports clients who are.
- **PCI DSS.** Tessera does not store payment-card data; card processing is
  performed by a third-party payment processor engaged under its own SOC 2
  Type II report, which keeps PCI scope off Tessera's environment.

## Implications and current focus

The TSR-INC-2025-031 breach was assessed as an eligible data breach and
notified to the OAIC within the internal 72-hour target — a compliance strength
on the notification side. The control weaknesses that enabled it (a leaked
static key and absent segmentation) are the focus of the remediation programme
and the ISO/IEC 27001:2022 certification-readiness work, tracked against the
Statement of Applicability. Ongoing compliance depends on those preventive
controls being substantively closed, not just the notification process being
fast.

> **DRAFT NOTE:** This document was rewritten from a US-centric (GDPR/HIPAA
   primary) version. The primary frame is now the Privacy Act and the APPs.
   Any policy still framing Tessera's obligations as HIPAA-primary should be
   treated as legacy and corrected.
