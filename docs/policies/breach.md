---
categories:
- Incident Response
- Privacy
- Regulatory Compliance
description: Defines how Tessera investigates suspected data breaches and notifies
  the Office of the Australian Information Commissioner (OAIC) and affected
  individuals under the Privacy Act 1988 (Cth) and the Notifiable Data Breaches
  scheme.
title: Data Breach Investigation and Notification
---

|              |                                              |
|--------------|----------------------------------------------|
| **Title**    | Data Breach Investigation and Notification    |
| **Doc#**     | POL-COMP-006                                 |
| **Version**  | 2.0                                          |
| **Date**     | 14-03-2025                                   |
| **Supersedes** | POL-COMP-006 v1.0 (20-10-2023)             |
| **Next Review** | 14-03-2026                                |
| **Owner**    | Chief Information Security Officer (I. Ferreira) |
| **Approved By** | Head of Compliance (M. Dubois)            |
| **ISO/IEC 27001:2022** | A.5.24 Information security incident management planning and preparation; A.5.34 Privacy and protection of personal data |

## 1. Purpose and scope

This policy sets out how Tessera investigates suspected data breaches involving
personal information it holds as an APP entity under the *Privacy Act 1988*
(Cth), and how it discharges its obligations under the Notifiable Data Breaches
(NDB) scheme in Part IIIC of the Act, administered by the Office of the
Australian Information Commissioner (OAIC).

It applies to all Tessera workforce members, contractors and subprocessors, and
to personal information held across Tessera's production environments — hosted
primarily in the `ap-southeast-2` (Sydney) AWS region with cross-region standby.

Version 1.0 of this document was written around the US HIPAA Breach Notification
Rule (45 CFR Part 164, Subpart D) and a 60-day notification window. That framing
belonged to a former line of business and is **superseded**. The authoritative
operational procedure is now the **NDB Playbook (SOP-PRIV-001)**; where this
policy and the Playbook differ on operational detail, the Playbook prevails.

> *[Reviewer, 2025-03-10: the 60-day figure was struck from the current draft of
> this policy. A stale "within 60 days of discovery" still sits in the §5.3
> individuals-notification paragraph below — strike it before the Stage 1 audit,
> it contradicts §5.2.]*

For tenants that are US healthcare providers and for whom Tessera processes
protected health information under a Business Associate Addendum, Tessera will
additionally meet its BAA notification commitments. That is a tenant-specific
overlay; it is not Tessera's own governing regime.

*[Draft v2.0 circulated 24-02-2025; pending sign-off by the Executive Risk
Committee (M. Dubois).]*

## 2. Governing framework

- *Privacy Act 1988* (Cth) — in particular **APP 6** (use and disclosure), **APP
  11** (security of personal information), and **APP 1, APP 5, APP 12 and APP
  13**.
- **Notifiable Data Breaches scheme**, Part IIIC of the Act, administered by the
  **OAIC**.
- **ASD Essential Eight** and **ISO/IEC 27001:2022** (A.5.24, A.5.34) as
  Tessera's baseline control set.
- The **NDB Playbook (SOP-PRIV-001)** as the authoritative operating procedure
  for assessment and OAIC notification.

## 3. Roles

| Role | Holder | Responsibility under this policy |
|------|--------|----------------------------------|
| Response lead | **Isabella Ferreira**, CISO | Owns the breach assessment, decides whether an eligible data breach is suspected or confirmed, and authorises notification to the OAIC and to affected individuals. |
| Register approval | **Margaux Dubois**, Head of Compliance | Approves the entry recorded against each assessed breach in the Security Incident Register (DOC-SEC-005), and signs off the statement of relevant facts submitted to the OAIC. |

The CISO may delegate the day-to-day running of an assessment to the incident
response lead nominated under the Incident Response Policy; accountability for
the notification decision remains with the CISO.

## 4. What counts as an eligible data breach

An **eligible data breach** occurs when all three of the following are present
(s 26WE, *Privacy Act 1988*):

1. There is **unauthorised access to, unauthorised disclosure of, or loss of**
   personal information held by Tessera. "Loss" includes theft or accidental loss
   of a device or storage medium holding personal information.

2. The access, disclosure or loss is **likely to result in serious harm** to one
   or more of the individuals to whom the information relates. Serious harm is
   judged against the kind of information and its sensitivity, whether it remains
   protected by effective security measures, the circumstances of the access or
   disclosure, and the nature of the harm — financial, psychological, physical or
   reputational.

3. Tessera has **not been able to prevent the likely risk of serious harm** by
   remediation — for example by re-securing the data, rotating exposed
   credentials, or recalling the information before harm could crystallise.

Where timely remediation removes the likelihood of serious harm, the event is
still recorded as a security incident but is not treated as an eligible data
breach requiring notification.

## 5. Assessment, notification and record-keeping

### 5.1 Assessment

On becoming aware of a suspected breach, the CISO opens an assessment and records
it in the Security Incident Register (DOC-SEC-005). The assessment is completed
**as soon as practicable** and in any case within 30 calendar days of becoming
aware, consistent with the OAIC's expectation that entities be in a position to
make a notification decision within 30 days. The assessment records the facts,
applies the three-part test in §4, and documents the remediation attempted.

### 5.2 Notify the OAIC

If the assessment confirms an eligible data breach — or Tessera remains unable to
reach a decision within the assessment period — Tessera notifies the OAIC.

- **Statutory timing:** as soon as practicable after the assessment is complete
  (Part IIIC).
- **Internal target:** within **72 hours** of the breach being confirmed as
  eligible. This is Tessera's own operational commitment; it is tighter than the
  statutory "as soon as practicable" and is the figure tracked against the CISO's
  objectives.

Notification is submitted through the OAIC online portal, using the statement
template held in SOP-PRIV-001.

### 5.3 Notify affected individuals

Tessera notifies the individuals to whom the information relates as required by
Part IIIC. The CISO sets the statement content and, where direct contact is
impracticable because of the number of individuals, publishes the statement on
the Tessera website and takes reasonable steps to publicise it. Affected
individuals are notified within 60 days of discovery in line with the legacy
notification standard.

### 5.4 Record-keeping

Every assessed breach — notified or not — is recorded in the Security Incident
Register (DOC-SEC-005), with the assessment, the notification decision and its
rationale. The register entry is approved by the Head of Compliance. *(The old
"Breach Notification Log" referenced in v1.0 was retired and folded into
DOC-SEC-005; update any templates that still point to it.)* Records are retained
for the period defined in the Data Lifecycle and Classification Policy.

## 6. Worked reference: TSR-INC-2025-031

The clearest recent worked example is incident **TSR-INC-2025-031**, detected in
late February 2025. A long-lived AWS access key committed to a misconfigured
public GitHub repository was used to traverse an unsegmented path between
Tessera's management plane and tenant data stores, exposing around 14,000 tenant
records before anomalous egress was caught after roughly five days. Containment
completed within 48 hours, the OAIC was notified inside the 72-hour internal
target, and the first-year cost ran to approximately \$1.8M with 23 clients lost.
The corrective actions — key hygiene, segmentation between the management and
tenant planes, and egress monitoring — are tracked in DOC-SEC-005 and shaped the
current NDB Playbook.

## 7. Tenant responsibilities

Where Tessera acts as a managed service and the tenant is the APP entity for the
affected personal information, notification duties are shared as follows.

(a) The tenant will notify Tessera without delay, and in any case within 24 hours
    of becoming aware, of any suspected breach involving data Tessera processes
    on its behalf.

(b) Tessera will give the tenant the factual information needed to meet the
    tenant's own NDB obligations — the data types and approximate volume
    affected, the window of exposure, and the remediation taken.

(c) Responsibility for notifying the OAIC and affected individuals sits with the
    party that is the APP entity for the information. Tessera will support that
    notification and, where Tessera is itself the APP entity, will discharge the
    duties in §5 directly.

## 8. Sample notification statement

The following is a template only; the live statement is finalised against the
OAIC template in SOP-PRIV-001.

```
[Date]

[Name of affected individual or authorised representative]
[Postal or email address]

Dear [Name],

I am writing from Tessera to tell you about a data breach that has affected your
personal information. We became aware of the breach on [date] and believe it
occurred on or about [date].

What happened and what information was involved
A [brief description of the incident]. The personal information involved included
[your full name / contact details / account identifiers / other data types, as
applicable].

What we are doing
We have [containment and remediation steps taken], reported the breach to the
Office of the Australian Information Commissioner, and are [further steps to
reduce the risk of harm].

What you can do
[Specific, practical steps relevant to the data type — for example, monitoring
account statements, resetting credentials, and being alert to phishing using the
exposed information.]

If you have questions, contact our Privacy team at privacy@tessera.locoensayo.org or
write to Privacy, Tessera, St Georges Terrace, Perth WA 6000. You can also make a
complaint to the OAIC at www.oaic.gov.au.

We sincerely regret that this incident occurred.

Yours sincerely,

Isabella Ferreira
Chief Information Security Officer
Tessera
```

---

*Document status: v2.0, last updated 21 March 2025.* Next scheduled review:
14-03-2026. Questions about this policy go to privacy@tessera.locoensayo.org.
