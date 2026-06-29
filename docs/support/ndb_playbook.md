---
categories:
- Privacy
- Incident Response
- Regulatory Compliance
description: Operational playbook for assessing and responding to eligible data breaches under the Australian Notifiable Data Breaches (NDB) scheme (Privacy Act 1988 (Cth), Part IIIC).
title: Notifiable Data Breaches (NDB) Playbook
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Notifiable Data Breaches (NDB) Playbook    |
| **Doc#**     | SOP-PRIV-001                               |
| **Version**  | 1.2                                        |
| **Date**     | 05-03-2025                                 |
| **Owner**    | Chief Information Security Officer (I. Ferreira) |
| **Approved By** | Head of Compliance (M. Dubois)         |

This playbook governs the assessment of, and response to, suspected eligible data
breaches under the **Australian Notifiable Data Breaches (NDB) scheme**
established by Part IIIC of the *Privacy Act 1988* (Cth) and administered by the
**Office of the Australian Information Commissioner (OAIC)**. It supplements —
and for privacy-affected incidents supersedes — the general Breach
Investigation and Notification Policy (POL-COMP-006), which retains a legacy
HIPAA framing for historical reference only.

> **NOTE ON FRAMING:** Tessera is an Australian entity holding personal
> information of Australian individuals. The governing regime is the Privacy Act
> and the Australian Privacy Principles (APPs), not HIPAA. Where POL-COMP-006
> still refers to "ePHI", "HHS" or "45 CFR", this playbook is authoritative.

## 1. The NDB scheme in brief

An **eligible data breach** arises where:

1. there is unauthorised access to, unauthorised disclosure of, or loss of,
   personal information held by Tessera; **and**
2. this is likely to result in **serious harm** to one or more individuals; **and**
3. Tessera has not been able to prevent the likely risk of serious harm through
   remedial action.

Where these criteria are met, Tessera must notify the OAIC and, in most cases,
the affected individuals, **as soon as practicable** after becoming aware that
there are reasonable grounds to believe an eligible data breach has occurred.
The *Privacy Act* deems an entity to "become aware" via a 30-day presumption,
but Tessera operates to a tighter internal target (below).

The "serious harm" test is multi-factorial and considers, among other things:
the kind and sensitivity of the information; whether the information is protected
(by encryption, for example); the circumstances of the breach; and the nature of
the harm (financial, reputational, physical, psychological).

> **72-HOUR INTERNAL TARGET:** Tessera's internal service standard is to
> **complete the breach assessment within 72 hours** of a suspected breach being
> triaged, and to be in a position to notify the OAIC within that window where
> the breach is assessed as eligible. This is stricter than the scheme's
> outer limits and is set to give Legal and the Executive Risk Committee room to
> validate the assessment. Note: the *Privacy Act* itself does not impose a
> 72-hour notification deadline; the statutory touchstones are "as soon as
> practicable" and the 30-day awareness presumption.

## 2. Roles and responsibilities

- **Incident lead — CISO (Isabella Ferreira).** Owns the response, declares the
  assessment clock, and is the decision-maker on notifiability recommendations.
- **Data Protection Officer (DPO).** Advises on APP 11 (security of personal
  information) obligations, the serious-harm assessment, and individual
  notification content.
- **Legal Counsel.** Advises on privilege, regulatory exposure, law-enforcement
  liaison, and contractual notification obligations to tenants.
- **Head of People (Anika Desai).** Coordinates internal communications and any
  workforce-related aspects of the breach.
- **Head of Engineering (Noah Bennett) / Cloud Infrastructure (Connor Hayes).**
  Provides forensic and containment support from the platform side.
- **Head of Compliance (Margaux Dubois).** Owns the breach register entry and
  the record-keeping for the OAIC.

## 3. Procedure

1. **Detect / receive report.** Any workforce member who suspects a breach
   reports it immediately to `security@tessera.locoensayo.org` or via the on-call
   channel. The CISO triages within 1 business hour.
2. **Triage and assign.** The CISO confirms an incident is in scope, opens an
   entry in the Security Incident Register (DOC-SEC-005), and stands up the
   response team. The **72-hour assessment clock** starts when the incident is
   triaged.
3. **Contain.** Take immediate steps to stop ongoing unauthorised access or
   disclosure (revoke credentials, rotate keys, isolate hosts). Containment is
   documented but does not pause the assessment clock.
4. **Gather facts.** Establish what personal information is involved, how many
   individuals are affected, the vector, and the window of exposure. Pull
   evidence from CloudTrail, IdP/session logs and the IAM revocation log.
5. **Assess serious harm.** The DPO and Legal apply the multi-factor serious-harm
   test and record the reasoning. Where harm is unlikely, document the rationale
   and close the assessment; where likely, proceed.
6. **Decide notifiability.** The CISO, DPO and Legal jointly confirm whether the
   breach is *eligible* and therefore notifiable to the OAIC. The decision and
   its basis are recorded in the incident register.
7. **Prepare notification.** Draft the OAIC notification (statement of facts,
   kind of information, recommended steps, contact details) and, where required,
   individual notifications. Legal reviews for privilege and accuracy.
8. **Notify.** Lodge the notification with the OAIC via the online portal and
   notify affected individuals by the chosen method (email/website). Record
   notification timestamps.
9. **Remediate.** Implement corrective actions (e.g. key rotation, access
   reviews, segmentation fixes) and track them to closure.
10. **Review.** Within 10 business days, conduct a post-incident review; capture
    lessons and update controls, the SoA (DOC-SEC-003) and this playbook as
    needed.

## 4. Worked example — TSR-INC-2025-031

In late February 2025 Tessera detected anomalous data egress from its
multi-tenant platform. Investigation established that a long-lived AWS access key
had been exposed through a misconfigured public source-code repository and had
been used to reach tenant data across an unsegmented path between the management
plane and tenant data stores. Approximately **14,000 tenant records** were
exposed over an estimated five-day window; containment took a further ~48 hours.

- **Assessment:** the DPO and Legal assessed the exposure as likely to result in
  serious harm (personal and contact information of identifiable individuals).
- **Decision:** eligible data breach — notifiable.
- **Notification:** Tessera notified the OAIC **within the 72-hour internal
  target** and notified affected tenants and, through them, affected individuals,
  consistent with its obligations under Part IIIC.
- **Outcome:** first-year impact estimated at ~$1.8M; 23 tenants did not renew.
  The incident was the direct trigger for the ISO/IEC 27001:2022
  certification-readiness mandate.

> **TEACHING NOTE:** The speed of OAIC notification in TSR-INC-2025-031 was a
> compliance strength; the underlying control weaknesses (the long-lived key, the
> absent segmentation) are tracked separately as corrective actions. Do not treat
> a fast notification as evidence that the preventive controls were effective.

> **STALE REFERENCE:** Step 4 still lists "SIEM alert" as the primary detection
> source; for cloud-originated breaches, CloudTrail and GuardDuty are now
> primary. Update in the next revision.
