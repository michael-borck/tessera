---
categories:
- Human Resources
- Employee Management
- Training
description: Sets out how Tessera screens, onboards, trains, manages and offboards
  workforce members in line with ISO/IEC 27001:2022 Annex A.6 and the Privacy Act 1988.
title: HR and Personnel Security
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | HR and Personnel Security           |
| **Doc#**     | POL-HUMA-017                        |
| **Version**  | 1.0                                 |
| **Date**     | 21-09-2023                          |
| **Owner**    | Head of People (A. Desai)           |
| **Approved By** | CISO (I. Ferreira) / COO (G. Sullivan) |
| **ISO/IEC 27001:2022** | A.6.1–A.6.5 — HR security (screening, terms, awareness, disciplinary, termination) |

This policy governs the personnel-security lifecycle at Tessera: how we screen,
onboard, train, manage and offboard the people who touch our systems and tenant
data. It implements the human-resource security controls in **Annex A.6** of
ISO/IEC 27001:2022 and our obligations under the *Privacy Act 1988* (Cth),
particularly **APP 11** (security of personal information). The Head of People
owns this policy; line managers and the Security team operate it.

## Policy Statements

In addition to the roles and responsibilities set out in [Roles and
Responsibilities](rar.md), Tessera requires that:

(a) **Screening (A.6.1).** Background verification checks are carried out on all
prospective employees and contractors before they start, proportional to the
role, the classification of information they will access, and the perceived
risk. Checks are conducted in accordance with Australian law and the
candidate's informed consent.

(b) **Terms and conditions (A.6.2).** Every employee, contractor and third-party
user signs a written agreement that binds them to this policy, the Acceptable
Use Policy (POL-SEC-022) and Tessera's confidentiality obligations before they
are granted access.

(c) **Awareness and training (A.6.3).** All workforce members complete security
and privacy awareness training during onboarding and at least annually
thereafter. Training covers the *Privacy Act 1988* and the Australian Privacy
Principles, the Notifiable Data Breaches scheme, and Tessera's incident and
breach-reporting expectations.

(d) **Disciplinary process (A.6.4).** A fair, documented disciplinary process
applies to breaches of this and related policies, up to and including
termination and referral to authorities.

(e) **Termination and offboarding (A.6.5).** Offboarding removes access to all
Tessera systems, returns company assets, and restates obligations that survive
termination.

(f) Workforce members must not transmit sensitive information through unmanaged
channels or post it to public forums. Where technical support requires sharing
diagnostic detail, the data must be sanitised first.

## Controls and Procedures

## HR Management and Reporting

Tessera maintains workforce personnel records in **Employment Hero**. The Head
of People is the system owner. Personal information is retained no longer than
necessary for the purpose for which it was collected (APP 11.2), in line with
the retention schedule.

### Organisation Structure

A reporting structure aligned to Tessera's business lines is maintained and
published in the org chart on the intranet. Reporting lines are reviewed when a
team is restructured.

### Job Functions and Descriptions

Position descriptions document the skills, responsibilities, access profile and
knowledge levels required for each role, and are updated when a role changes.

### Performance Reviews and Feedback

Employees receive ongoing feedback from their manager and peers. Formal
performance reviews are conducted annually using the performance module in
**Employment Hero**. Performance measures and incentives reflect the
responsibilities of the role and the expected standards of conduct.

### Acceptable Use of End-user Computing

Detailed acceptable-use obligations are set out in the standalone [Acceptable
Use Policy](acceptable_use.md) (POL-SEC-022). The points below highlight the
HR-relevant obligations and apply to all workforce members:

(a) Per the [security architecture](model.md), all workforce members are treated
as remote users and must follow remote-access controls (MFA, managed device,
encrypted storage).

(b) Use of Tessera systems is monitored by the IT and Security teams in
accordance with the *Privacy Act* and applicable workplace-surveillance law.

(c) Computing devices (company-issued or BYOD) must not be left unattended in
public.

(d) Whole-disk encryption must be enabled on every device that stores or
accesses company data.

(e) Use only [approved software](approved_software.md) with a valid licence,
installed from an approved source. Personal software must not be used for
business purposes, and vice versa.

(f) Sensitive or confidential email must be encrypted.

(g) Sensitive or confidential data must not be posted to public forums or chat
rooms. Sanitise data before posting for technical support.

(h) Anti-malware protection and monitoring must be installed and active on all
endpoints that could be affected by malware.

(i) All storage media must be handled per the Data Classification and Data
Handling procedures.

(j) Sensitive data must not be downloaded or stored on end-user devices.

(k) Mobile devices must not connect directly to Tessera production environments.

### Employee Screening Procedures

Tessera advertises roles, assesses technical skills and cultural fit through
structured interviews, and performs background checks — identity, right-to-work
in Australia, referees, and, where the role warrants, criminal-history and
qualification checks — before the start date. Checks are run by the People team
and a third-party screening provider engaged through Procurement.

*(I. Ferreira, note to self: confirm the screening list still lines up with
ISMS-PR-014 before the Stage 1 audit — the right-to-work wording changed when we
updated the joiner-mover-leaver procedure.)*

### Employee Onboarding Procedures

A joiner checklist is maintained by the People team and published in the HR
system. The People Coordinator raises a joiner ticket in the **People & IT**
project in **Jira** to track provisioning and training.

The onboarding process covers:

1. **Training.**
   - Security and privacy awareness training covering this policy, the
     Acceptable Use Policy, and the Employee Handbook.
   - **Privacy Act / APP / NDB awareness** is the default baseline for all new
     starters.
   - Staff who support tenants that are **US healthcare providers** also
     complete HIPAA awareness training, and a Business Associate Addendum is
     reflected in the tenant's contract.
   - Records of training and policy acceptance are kept in Employment Hero and
     must be completed within 30 days of the start date.

2. **Access.**
   - Standard access is provisioned to the role profile recorded on the Jira
     joiner ticket.
   - Non-standard access follows the [Access Establishment and Modification
     procedures](access.md).
   - Joiners, movers and leavers are run through the joiner-mover-leaver
     procedure (ISMS-PR-014).

3. **System configuration.**
   - IT provisions the end-user device with the standard image, endpoint agent,
     encryption and required software.
   - Engineers and other technical roles may self-configure within published IT
     and Security baselines, provided the endpoint agent and required security
     configuration remain in place.

> *[Reviewer, A. Desai, 2025-03-04: the joiner checklist still references the old
> "new starter pack" PDF that was retired with the 2024 HRIS migration — replace
> with the Employment Hero onboarding workflow before the next review.]*

### Employee Exiting / Termination Procedures

A leaver checklist is maintained by the People team and published in the HR
system. When a termination or resignation is confirmed, the People team raises a
leaver ticket in the **People & IT** Jira project; IT and Security action the
access and asset steps.

1. The People team notifies IT and Security of a confirmed termination or
   resignation, and the effective date and time.
2. **All system access must be revoked within 2 hours of termination**, in line
   with the offboarding procedure (ISMS-PR-014). This covers SSO / identity
   provider accounts, cloud console access, source-code repositories, SaaS
   applications and VPN.
3. Company assets (laptop, phone, keys, access card) are returned and recorded
   against the leaver ticket. *(Asset return was previously tracked in a
   separate Return-of-Assets register that has since been folded into the Jira
   leaver ticket — some older runbooks still reference the old register.)*
4. Surviving obligations — confidentiality, IP assignment, return of company
   information — are restated in writing.
5. Where there is evidence of misuse, a user's access may be suspended
   immediately and before the formal termination date; such cases are recorded
   as a security incident (see [Incident Response](ir.md)).
6. Security periodically audits for accounts that have not been used for an
   extended period and disables them.

### Employee Issue Escalation

Workforce members escalate concerns through their manager or the People team. The
membership of the Escalation Team is maintained by the CEO or their delegate.

Security incidents, particularly those involving personal or tenant data, follow
the [Incident Response](ir.md) process. Suspected privacy breaches follow the
NDB Playbook (SOP-PRIV-001). The incident owner:

1. Raises an issue in the Security project in Jira.
2. Investigates and documents it, then moves it to Review.
3. Has a second reviewer check the conclusion; rejected items return for further
   work.
4. Marks approved items Done, with notes.
5. Notifies the reporter of the outcome.

### Whistleblower Policy and Process

Tessera requires high standards of conduct from all workforce members. This
section aligns with the whistleblower protections in **Part 9.4AAA of the
Corporations Act 2001 (Cth)**, which protects eligible whistleblowers who
disclose reportable conduct about Tessera or a related body corporate.

(a) **Reportable conduct.** Workforce members are encouraged to report:
   - dishonest, fraudulent or corrupt conduct;
   - illegal conduct or a breach of any law enforced by the ACCC, ASIC or
     another regulator;
   - conduct that endangers the public or the financial system; and
   - conduct that otherwise poses a serious risk to Tessera's reputation or
     viability.

(b) **Eligible whistleblowers.** Officers, employees, contractors and their
relatives, dependants and spouses can qualify for protection under Pt 9.4AAA.

(c) **How to report.** Reports can be made to the Head of People, the CEO, the
CFO, or the external Whistleblower Officer engaged by Tessera. Reports may be
made anonymously and still qualify for protection.

(d) **Confidentiality.** The identity of a whistleblower, and information likely
to identify them, is kept confidential to the fullest extent permitted by law,
and is disclosed only with consent or where the law requires or permits.

(e) **No detriment.** Tessera prohibits any act that causes detriment, or
threatens detriment, to a person because they made, or may make, a protected
disclosure. Workforce members who breach this prohibition are subject to
disciplinary action up to and including termination. A whistleblower who suffers
detriment may seek compensation and other remedies through the courts.

(f) **Investigations.** Reports are handled by the Whistleblower Officer and
reported to the Audit and Risk Committee. Frivolous or knowingly false reports
made maliciously are a disciplinary matter; a report made honestly but
ultimately unsubstantiated is not.

## Employee Performance Review Process

Formal performance reviews are conducted annually using the performance module in
**Employment Hero**.

- 360° feedback is gathered from colleagues who work closely with the employee.
- The employee completes a self-assessment covering outcomes and behaviours.
- The manager reviews the self-assessment and peer feedback and documents the
  rating.
- The final review is signed by the employee and the manager.

## Employee Incentives and Rewards

Tessera recognises contribution through peer recognition, manager acknowledgement
and the rewards available through the Employment Hero perks module. Recognition
is intended to reinforce behaviours that support security, service and teamwork.

## Continuous Education and Skills Development

Employees may attend conferences, training and study relevant to their role,
subject to manager approval and the training budget.

### Non-Compliance Investigation and Sanctions

Workforce members must report suspected non-compliance with this or any related
policy to the Head of People or the Security team. Good-faith reporters are
protected from retaliation.

1. The Head of People, with the Security team, investigates reported violations.
   An investigation may include:
   - collecting and reviewing logs and audit trails;
   - interviewing those who may be aware of or involved;
   - requiring cooperation from all individuals; and
   - giving the individual an opportunity to respond.

   The investigator documents the investigation as it proceeds, including the
   individuals involved.

2. Violations may result in corrective action up to and including termination.
   Violations by contractors, customers or partners may result in termination of
   the relationship and may be referred to law enforcement.

   - A fair process weighs factors such as whether this is a first offence, the
     individual's training, and the seriousness of the conduct.
   - Serious misconduct may warrant summary termination.
   - A violation that causes a breach of confidentiality, a change to data
     integrity, or denial of access for others may warrant immediate
     termination.

3. The investigator recommends steps to prevent recurrence.

4. Suspected insider threats are handled by a small, privileged team convened by
   the CISO and the Head of People; reports may be made anonymously.

5. Investigation records are retained for a minimum of seven years.

6. When a formal sanction is commenced, the Head of People notifies the
   individual's manager within 24 hours, setting out the individual, the reason,
   and the access restrictions or other actions to be applied.

[Warning Notice Template](ref/sanction-notice.pdf)
