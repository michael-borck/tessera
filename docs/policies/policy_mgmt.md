---
categories:
- Compliance
- Policy Development
- Version Control
description: Describes how Tessera develops, versions, approves, publishes and
  retires policy documents, and the compliance drivers they implement.
title: Policy Management
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Policy Management                   |
| **Doc#**     | POL-COMP-019                        |
| **Version**  | 1.0                                 |
| **Date**     | 04-03-2023                          |
| **Owner**    | CISO (I. Ferreira)                  |
| **Approved By** | Head of Compliance (M. Dubois)   |
| **ISO/IEC 27001:2022** | A.5.1 — Policies for information security |

This policy sets out how Tessera's policy suite is written, reviewed, approved,
published and retired, and the compliance drivers it implements. The CISO owns
the policy suite; the Head of Compliance co-owns the compliance mapping.

## Compliance drivers

Tessera policies are written and maintained to implement the following drivers:

- **ISO/IEC 27001:2022** — the primary framework for our information security
  management system; Annex A control references appear in each policy's control
  table.
- **Privacy Act 1988 (Cth)**, the **Australian Privacy Principles (APPs)** and
  the **Notifiable Data Breaches (NDB) scheme** — our own governing privacy
  regime, administered by the OAIC.
- **ASD Essential Eight** — the baseline technical hardening applied across the
  estate.
- **SOC 2** — for customer assurance.
- **HIPAA** — only as a tenant-driven add-on: where a tenant is a US healthcare
  provider, a Business Associate Addendum applies and the relevant HIPAA
  obligations are reflected in the tenant's schedule.

## Policy Statements

Tessera requires that:

(a) Policies are developed and maintained to meet the compliance drivers above
and recognised security best practice.

(b) All policies are reviewed at least annually, and after any significant
incident or change to the threat or regulatory landscape.

(c) All policy changes are approved by the CISO. In addition:
  - Major changes may require approval by the CEO or their delegate.
  - Changes touching product development may require approval by the Head of
    Engineering.

(d) All policy documents are version-controlled, and previous versions are
retained for a minimum of seven years.

(e) Policy exceptions are handled case by case:
  - Each exception is documented with the business purpose and the reason the
    requirement cannot be met.
  - Each exception is approved by both the CISO and the COO.
  - An exception expires no later than one year after approval and is
    re-reviewed before it expires.

## Controls and Procedures

### Policy management process

#### Document structure

Each policy is a standalone document covering one domain. A document carries its
version in `YYYY.#` form (e.g. `2023.1`), followed by a control table (title,
doc#, version, date, owner, approver, and the ISO/IEC 27001:2022 Annex A control
reference where applicable) and then:

- Policy Statements
- Applicable Standards (where relevant)
- Controls and Procedures

#### Versioning

Each policy carries a version number — the four-digit year plus a sequence
number indicating when it was written or updated. A material change increments
the sequence number (e.g. `2023.1` → `2023.2`). A minor, non-material change
(reformatting, typos, small details) increments a revision number in `rev.#`
form immediately after the version.

#### Numbering

Policies keep their assigned document numbers under the [Document Numbering
System Policy](document_numbering.md) (POL-COMP-025). Procedure documents use
the **ISMS-PR** prefix for ISMS procedures (for example, the joiner-mover-leaver
procedure **ISMS-PR-014**), alongside the standard POL, SOP and DOC prefixes.
Statement references such as `§2.1(a)` are used in cross references; to protect
cross-reference integrity, statement numbering is not reordered or renumbered on
update. New statements are appended, and retired statements are marked
deprecated rather than deleted.

#### Review and maintenance

1. Policies are maintained to stay aligned with ISO/IEC 27001:2022, the Privacy
   Act / APPs / NDB, the ASD Essential Eight, and SOC 2. Updates are
   version-controlled like source code, in **git**.

2. Any workforce member may request a change at any time. The CISO and Head of
   Compliance review the suite at least annually.

3. To request a change:
   1. The requester raises a **policy change request** in the **GRC** project in
      **Jira**, optionally with a **git** pull request from a branch containing
      the proposed change.
   2. The CISO or Head of Compliance is assigned to review.
   3. The reviewer approves or rejects the request in Jira; rejected items
      return for further work.
   4. On approval, the reviewer marks the Jira request Done, with notes.
   5. Where a change requires a production configuration change, the change is
      made by authorised personnel through Tessera's [change management process](ccm.md).
   6. Where the change creates a new version (not a revision), the current
      version is archived under its version number before the new version is
      adopted and before the pull request is merged, so prior versions remain
      retrievable.

   !!! note

       - Changes are made on a `drafts` branch, not `master`.
       - Where multiple authors are involved, additional branches and pull
         requests may be used before merging into `drafts`.
       - Changes are not merged to `master` without CISO approval, and not
         without archiving the current version unless the change is a minor
         revision.
       - Once final and approved, a pull request from `drafts` to `master`
         includes the relevant team as approvers; the approvals serve as a
         record of review and training.
       - Communication and training for non-engineering staff are run separately
         by the Security team.

4. Current master policies are published on the **Compliance SharePoint site**
   (and mirrored to Confluence for the engineering wiki). The policy index was
   moved from the old intranet portal in 2024; some older documents still link
   to the [intranet index](#), which is no longer maintained.

   - Changes are announced to the workforce through a SharePoint ↔ Slack
     integration that posts to a dedicated channel.
   - The CISO also emails a plain-language summary of material changes.

5. Policies and associated documentation are retained for seven years from
   creation or last effective date, whichever is later.
   1. Version history is maintained in **git**.
   2. Backup storage is in AWS S3 and on the Microsoft 365 SharePoint tenant.

6. The policy suite is reviewed and audited at least annually, and after a
   significant change to Tessera's environment, by the Security Committee.
   Findings are tracked to closure.
   1. The CISO initiates the review via a Jira issue or pull request.
   2. Security Committee members and other reviewers are notified by email or in
      the pull request.
   3. Changes follow the process above and are documented in the issue or pull
      request.
   4. The CISO approves or rejects; approved items are marked Done or merged.
   5. Review status is reported through Jira and the security scorecard.

> *[Reviewer, M. Dubois: statement 5 says "seven years" but the Records
> Retention Schedule (DOC-COMP-011) lists policy records at "life of the
> document plus three years" — reconcile before the next review.]*

Additional responsibilities are set out in [Roles and Responsibilities](rar.md).
