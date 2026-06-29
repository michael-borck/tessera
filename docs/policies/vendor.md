---
categories:
- Vendor Management
- Risk Management
- Compliance
description: Sets out how Tessera assesses and manages the security and privacy risk of
  suppliers, cloud services and acquired systems.
title: Third-Party Security, Vendor Risk Management and Systems/Services Acquisition
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Third-Party Security, Vendor Risk Management and Systems/Services Acquisition |
| **Doc#**     | POL-RISK-005 |
| **Version**  | 1.0                                 |
| **Date**     | 10-06-2023                          |
| **Owner**    | Isabella Ferreira, Chief Information Security Officer |
| **Approved By** | Grace Sullivan, Chief Operating Officer |
| **ISO/IEC 27001:2022** | A.5.19–A.5.23 Supplier relationships and cloud services |

Tessera runs on third-party services — cloud infrastructure, SaaS tools,
contractors and sub-processors — and our tenants' data flows through them. This
policy sets out how we make sure those third parties do not compromise the
integrity, security or privacy of Tessera or tenant data. "Third parties" here
means vendors, customers acting as partners, sub-contractors and contracted
developers.

The policy satisfies **A.5.19 to A.5.23** of ISO/IEC 27001:2022 (information
security in supplier relationships, supplier agreements, the ICT supply chain,
monitoring and change of supplier services, and cloud services). It also
discharges Tessera's obligations under **APP 11** (security of personal
information) and **APP 8** (cross-border disclosure) of the Privacy Act 1988
(Cth): where a supplier will receive or process personal information, we
confirm the transfer is permitted and that the supplier is bound to protect it
to a standard no lower than Tessera's own.

The owner of this process is the **CISO (I. Ferreira)**.

## Policy Statements

Tessera policy requires that:

(a) A list of approved vendors and partners is maintained and reviewed at least
annually.

(b) Approval from management, procurement and Security must be in place before
onboarding any new vendor or contractor, and before implementing any change to
an existing contract.

(c) For any technology that will integrate with the Tessera production
environment or operations, a vendor technology review must be performed by the
Security team to understand and approve the risk. Periodic compliance
assessment and SLA review may also apply.

(d) Tessera tenants and partners must not be granted access outside their own
environment — they cannot access, modify or delete data belonging to other
tenants or third parties.

(e) Additional vendor agreements are put in place as required by applicable law
and contract — including a Business Associate Addendum (BAA) for the specific
carve-out in (f).

(f) **US-healthcare carve-out.** For vendors that will handle protected health
information (PHI/ePHI) in support of Tessera tenants who are US healthcare
providers, a [HIPAA Business Associate Addendum (BAA)][BAA] is required. This
is a justified carve-out for a specific regulated data type and a specific
tenant segment; it is **not** the default arrangement for Tessera suppliers.
Tessera's own governing regime is the *Privacy Act 1988* (Cth) and ISO/IEC
27001:2022; the BAA exists only where US healthcare data is genuinely in scope.

[BAA]: hipaa_baa.md

## Controls and Procedures

### Vendor Technology Risk Review

Before any technology is integrated into Tessera operations or infrastructure,
the Security team runs a vendor technology review. The request goes to the
Security team by email or through the internal service desk (Jira, the SEC
project).

The review uses interviews and documentation to confirm the vendor meets
regulatory requirements and follows security good practice, so that risk is
reduced to an acceptable level.

A Vendor Technology Risk (VTR) assessment is run using a VSAQ-style
questionnaire (the open Vendor Security Assessment Questionnaire format). The
process:

1. The reviewer sends the questionnaire link(s) to the vendor contact.
2. The vendor completes the questionnaire(s).
3. The vendor saves/exports its answers.
4. The vendor returns the answers file to the reviewer.
5. The reviewer loads the answers into the assessment and scores them.
6. The reviewer follows up with the vendor as needed.
7. The reviewer and the business owner discuss whether the residual risk is
   acceptable; vendor remediation may be required.

A list of [approved vendors and contractors][1] is maintained jointly by the
Security and Operations teams.

[1]: approved_vendors.md

> *[I. Ferreira, note to self: the VTR scoring rubric was last updated in
> 2024. Cross-check that the VSAQ template still matches the A.5.20 control
> evidence the auditor asked for before we re-issue it.]*

### Vendor Contractual Agreements

**Privacy Act / sub-processor terms.** Where a vendor will receive or process
personal information held by Tessera, the contract must address APP 8
(cross-border disclosure) and APP 11 (security): the vendor must handle the
information only for the engaged purpose, protect it to a standard no lower
than Tessera's own, support Tessera's NDB obligations, and notify Tessera
without delay of any suspected breach. Sub-processor chains must be disclosed
and approved.

**SLA for service providers.** For network and infrastructure providers that
support production or critical operations, a Service Level Agreement is defined
and included in the contract.

Executed agreements are linked or attached to the vendor entry on the
[approved vendors list][2].

[2]: approved_vendors.md

### Monitoring Vendor Risks

Vendor contracts are reviewed annually or according to the signed contract
term, whichever is shorter.

Based on the risk level and the sensitivity and criticality of the data the
vendor can access, the review may include an updated risk assessment by the
Security team, plus legal and business review of contract terms.

For service providers, Cloud Service Operations monitors service status against
the SLA — either by reviewing the vendor's status page at least quarterly, or
through automated alerting for service interruption.

### Software and Systems Acquisition Process

Security maintains a list of [pre-approved business software][3] and a list of
[approved vendors and contractors][4].

[3]: approved_software.md
[4]: approved_vendors.md

Where additional commercial software, hardware or cloud services are needed, a
request is raised through the internal service desk (Jira), which triggers
manager/Security approval and the procurement process.

The Security team may run a risk analysis on the software or system to confirm
it meets Tessera's security, compliance and legal requirements and does not
interfere with existing controls. Where a risk is identified, additional
controls are identified and implemented (or planned) before acquisition; an
alternative product may be chosen.

> *[Reviewer, 2025-02: the old default clause requiring a HIPAA BAA with "any
> vendor that may access PHI/ePHI" was removed when this policy was
> Australianised. If you find a downstream doc (e.g. the procurement checklist)
> still quoting the old default, update it to the carve-out in Policy Statement
> (f).]*
