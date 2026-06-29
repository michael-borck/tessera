---
categories:
- Risk Management
- Security Management
- Operational Security
description: This policy establishes the scope, objectives and procedures of Tessera's
  information security risk management process.
title: Risk Management
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Risk Management                     |
| **Doc#**     | POL-RISK-014 |
| **Version**  | 1.0                                 |
| **Date**     | 24-07-2023                          |
| **Owner**    | Isabella Ferreira, Chief Information Security Officer |
| **Approved By** | Henrik Larsson, Chief Executive Officer |
| **ISO/IEC 27001:2022** | Clause 6.1 Planning (risk assessment & risk treatment); A.8.8 Management of technical vulnerabilities |

This policy sets out the scope, objectives and procedures of Tessera's
information security risk management process. Risk management is how we decide
which controls to put in place, which risks to accept, and where to spend. It
is the backbone of our ISMS.

The process is aligned to **Clause 6.1 of ISO/IEC 27001:2022** (planning —
risk assessment at 6.1.2 and risk treatment at 6.1.3). It is also the control
we use to discharge our obligation under **APP 11** of the Privacy Act 1988
(Cth) to take reasonable steps to protect personal information, and to keep
pace with the **ASD Essential Eight** and the ACSC threat picture. The output
that ties identified risks to selected controls is the **Statement of
Applicability (DOC-SEC-003)**.

The owner of this process is the **CISO (I. Ferreira)**.

## Policy Statements

Tessera policy requires that:

(a) A risk assessment must be conducted to evaluate threats and vulnerabilities
to the confidentiality, integrity and availability of the sensitive,
confidential and proprietary information Tessera stores, transmits and
processes — including personal information held under the Privacy Act.

(b) Risk assessments must be performed at least annually and whenever there is
a major change to Tessera's business, technical operations or supporting
infrastructure.

(c) Risks identified must be treated — mitigated, transferred or accepted — and
the treatment recorded.

(d) Documentation of all risk assessment, treatment and acceptance decisions
must be retained for a minimum of seven years.

## Controls and Procedures

### Risk Management Objectives

Tessera maintains formal risk assessment and risk treatment processes to:

- identify risks that may affect business operations or the confidentiality,
  integrity and availability of critical data, including tenant data and
  personal information; and
- reduce risk to an acceptable level through mitigation controls, with residual
  risk above the acceptable level formally accepted by senior management.

#### Acceptable Risk Levels

Risks scoring low impact or low likelihood under the scoring mechanism below
are generally treated as acceptable. All other risks are individually reviewed
and managed through the risk treatment process. Residual risk above the
acceptable level requires sign-off by the CISO and a member of the executive.

### Risk Management Process

Risk assessment and risk treatment are core parts of Tessera's ISMS. The
process satisfies Clause 6.1 of ISO/IEC 27001:2022 and supports our APP 11
obligations.

Tessera adopts the **nine-step risk assessment method described in NIST SP
800-30 Rev. 1** as its standard method. SP 800-30 is a widely used, public
methodology; we use it because it is well-understood by auditors and produces
results we can compare year on year. The steps are written in Tessera's own
terms below.

Risk assessments are run:

* Before integrating new system technologies and before non-routine changes to
  physical or technical safeguards. (Routine updates, deployments based on an
  existing baseline, new tenant onboarding and ordinary platform code changes
  are not in scope of a fresh assessment — they are covered by change
  management.)
* When changes to physical equipment or facilities introduce new, untested
  configurations.
* In response to environmental or operational change affecting the security of
  sensitive data.

Tessera implements controls sufficient to reduce risk to a reasonable and
appropriate level in order to:

1. Protect the confidentiality, integrity and availability of the sensitive
   data Tessera holds for its tenants.
2. Protect against reasonably anticipated threats to the security or integrity
   of tenant and sensitive data.
3. Protect against unauthorised use or disclosure of tenant and sensitive data.
4. Ensure workforce members comply with these controls.

In addition:

1. Any residual risk remaining after controls are applied requires sign-off by
   the CISO and senior management.
2. All workforce members are expected to cooperate with those doing risk work,
   including contractors and auditors. Breaches of this policy are dealt with
   under the HR and Personnel Security Policy.
3. Operation and maintenance of the risk process is the responsibility of the
   CISO and the Risk Management Team.
4. All risk decisions — including decisions *not* to implement a control — are
   documented and retained for seven years.
5. The process is tracked, measured and monitored as follows:

    1. The CISO (or delegate) opens a **Jira** issue in the Security project
       (SEC) to initiate a risk assessment.
    2. The CISO assigns an analyst to carry it out.
    3. Findings are documented and linked to the Jira issue.
    4. When the assessment and treatment plan are complete, the CISO approves
       or rejects the issue. A rejected issue returns for further work.
    5. On approval, the CISO closes the issue, with notes. Treatment actions
       become tracked Jira sub-tasks.

6. The process is monitored quarterly through reporting to the Executive Risk
   Committee.

Third-party risk, including procurement and systems acquisition, is covered in
[Vendor Risk Management](vendor.md).

#### Risk Management Schedule

The two components — assessment and treatment — run on this schedule:

* *Scheduled basis* — an overall risk assessment of Tessera's information
  system environment is conducted annually. It is timed so that treatment
  decisions feed the corporate budgeting cycle.
* *Through the system life cycle* — from the identification of a need for a new
  or untested configuration or application through to disposal, ongoing
  assessment of threats and vulnerabilities is part of maintenance.
* *As needed* — the CISO or Risk Management Team may call a full or partial
  assessment in response to changes in business strategy, technology,
  information sensitivity, the threat landscape, legal liability, or other
  significant factors.

### Risk Assessment and Analysis

The point of a risk assessment is to identify threats and vulnerabilities and
to estimate their likelihood and impact, so that appropriate controls can be
chosen. The nine steps below are the adopted SP 800-30 method.

* **Step 1. System characterisation.** Define the scope: where sensitive data
  is received, maintained, processed or transmitted, and the boundaries of the
  Tessera platform under assessment. *Output — a characterisation of the system
  assessed and a clear statement of its boundaries.*

* **Step 2. Threat identification.** Identify and document potential
  threats — the ways a threat-source could exercise a vulnerability. We draw on
  historical incidents, ACSC and vendor threat intelligence, and lessons from
  TSR-INC-2025-031. *Output — a threat list of sources that could exploit
  platform vulnerabilities.*

* **Step 3. Vulnerability identification.** Build a list of technical and
  non-technical platform vulnerabilities that threat-sources could exploit or
  trigger — from policy gaps to weak safeguards to software, hardware or
  configuration weaknesses. *Output — a list of platform vulnerabilities.*

* **Step 4. Control analysis.** Document and assess the effectiveness of the
  technical and non-technical controls already in place or planned, to
  minimise the likelihood of a vulnerability being exploited. *Output — a list
  of current or planned controls used to mitigate likelihood and impact.*

* **Step 5. Likelihood determination.** Determine the overall likelihood that a
  vulnerability could be exploited by a threat-source, given the existing or
  planned controls. *Output — likelihood of low (0.1), medium (0.5) or high
  (1.0), per SP 800-30.*

* **Step 6. Impact analysis.** Determine the adverse impact if a threat
  successfully exploited a vulnerability — considering importance to Tessera's
  mission, sensitivity and criticality of the data, cost, and loss of
  confidentiality, integrity or availability. *Output — magnitude of impact of
  low (10), medium (50) or high (100), per SP 800-30.*

* **Step 7. Risk determination.** Multiply likelihood by impact to establish a
  risk level, which drives the action senior management must take. *Output —
  risk level of low (1–10), medium (>10–50) or high (>50–100), per SP
  800-30.*

* **Step 8. Control recommendations.** Identify controls that could reduce or
  eliminate the identified risks to an acceptable level — considering
  effectiveness, legislation and regulation (including the Privacy Act and
  APP 11), organisational policy, operational impact, and reliability.
  *Output — recommended controls and alternatives.*

* **Step 9. Results documentation.** Record the results in a risk assessment
  report and brief senior management, so decisions on policy, budget and
  platform change are evidence-based. *Output — the risk assessment report.*

> *[I. Ferreira, note to self: the likelihood/impact numeric bands above are
> the SP 800-30 defaults. The risk register (docs/support/risk_register.md)
> uses the same bands — keep them aligned before the Stage 1 audit, and check
> whether the SoA (DOC-SEC-003) still quotes the old 1–5 scale anywhere.]*

### Risk Treatment and Monitoring

Risk treatment prioritises, evaluates and implements the controls recommended
by the assessment, to protect the confidentiality, integrity and availability
of Tessera platform data. Control selection depends on the organisation's risk
appetite, set by the executive.

* **Step 1. Prioritise actions.** Using Step 7 of the assessment, sort
  threat/vulnerability pairs by risk level, descending. The top of the list
  gets immediate attention and priority for resources. *Output — actions
  ranked high to low.*

* **Step 2. Evaluate control options.** Review the recommended controls and
  alternatives for reasonableness and appropriateness — feasibility
  (compatibility, user acceptance) and effectiveness (degree of protection).
  Select the most appropriate option for each pair. *Output — a list of
  feasible controls.*

* **Step 3. Cost-benefit analysis.** Compare the benefit (risk reduction) of
  each control against its cost. Controls that are not cost-effective are
  flagged. *Output — documented cost-benefit analysis for each control.*

* **Step 4. Select controls.** The Risk Management Team selects the best
  controls — a mix of administrative, physical and technical safeguards — to
  reduce risk to an acceptable level. Selected controls are recorded in the
  **Statement of Applicability (DOC-SEC-003)**, which is the document that ties
  treatment decisions to Annex A controls. *Output — selected controls, mapped
  in the SoA.*

* **Step 5. Assign responsibility.** Identify the people with the skills to
  implement each control, and assign owners. Identify the equipment, training
  and resources required. *Output — owners and resource assignments.*

* **Step 6. Develop implementation plan.** Build the overall and per-control
  implementation plans: each risk/threat pair and level; prioritised actions;
  the recommended controls; required resources; owners; start and target dates;
  maintenance requirements. Status, metrics and milestones are reported to
  senior management. *Output — the safeguard implementation plan.*

* **Step 7. Implement and monitor.** As controls are implemented, monitor the
  affected systems to confirm the controls meet expectations. Eliminating all
  risk is not realistic; controls lower risk, they do not necessarily remove
  it. If expectations are not met, repeat part of the process. Additional
  monitoring matters most during major environmental, organisational or
  facilities change. *Output — residual-risk documentation.*

### Technical Vulnerability Management

Vulnerabilities identified in production components are managed under the
vulnerability management process that satisfies **A.8.8 (Management of
technical vulnerabilities)** of ISO/IEC 27001:2022. Patch and vulnerability
SLAs follow the ASD Essential Eight maturity targets. Findings from
vulnerability scanning and from the ACSC and vendor feeds feed the risk
register and, where they change the risk picture, trigger a partial assessment
under this policy.

### Risk Register

The CISO maintains the ISMS risk register. It is the single source of truth for
identified risks and their treatment status, and it is the working copy that
feeds the Statement of Applicability.

The register is held in **Jira** (the SEC project) and mirrored to the ISMS
Confluence space for review. It captures every risk and threat identified
during the annual assessment and all interim reviews, with owner, treatment,
current status and review date.

> *[Reviewer, 2025-02: the register is being migrated off SharePoint to Jira/
> Confluence. If you find a copy still pointing at the old SharePoint
> `Risk Register.xlsx`, treat it as stale — the Jira SEC project is
> authoritative.]*

### Cyber Liability Insurance

Tessera holds cyber liability insurance with coverage matched to the
organisation's risk profile. The current policy is placed with **Aon** and the
policy schedule is held by Finance (DOC-FIN-001).

### Fraud Risks

Given its size, operating model, separation of duties, continuous monitoring
and audit coverage, Tessera assesses its fraud-related risk as low.

Tessera engages **Carstairs & Ng, Chartered Accountants** for accounting
services and the annual financial audit.

Fraud risk is re-evaluated as part of the annual risk assessment. The
assessment considers the standard fraud triangle:

- Pressures and/or incentives
- Opportunities
- Rationalisation

Financial-related fraud assessment is led by the **CFO, Priya Nair**, supported
by the COO (Grace Sullivan).

IT-related fraud assessment is led by the **CISO, Isabella Ferreira**, with the
Head of Compliance (M. Dubois).

#### Potential Frauds and Likelihood

| Fraud Risk                       | Likelihood | In Place Controls/Monitors |
|----------                        |----------  |--------------------------  |
| Fraudulent Financial Reporting   | Low        | Monthly executive review of business plan and revenue; external audit by Carstairs & Ng |
| Misappropriation of Assets       | Low        | Expense reporting and asset tracking under the Asset Management policy |
| Regulatory and Legal Misconduct  | Low        | Compliance policies and whistleblower procedure; external law firm review of legal conduct |
| Payroll Fraud                    | Low        | Payroll reviewed by at least two people internally and by Carstairs & Ng |
| Kickbacks / Conflict of Interest | Low        | Team-based vendor review and selection (see Vendor Risk Management) |
| Misuse of Cloud Resources        | Low        | Continuous monitoring of all cloud accounts and regions; spend alerts |
| Other IT Fraud                   | Low        | IT asset and resource tracking |
