---
categories:
- Data Lifecycle
- Backup and Recovery
- Data Classification
description: This policy sets out how Tessera manages the end-to-end data lifecycle
  for its own information and for tenant data held on the platform, from creation
  and acquisition through retention, backup, and secure deletion.
title: Data Management Policy
---

|                   |                                                   |
|-------------------|---------------------------------------------------|
| **Title**         | Data Management Policy                            |
| **Doc#**          | POL-DATA-015                                      |
| **Version**       | 1.0                                               |
| **Date**          | 01-03-2023                                        |
| **Owner**         | Head of IT — H. Boyd                              |
| **Approved By**   | CISO — I. Ferreira                                |
| **ISO/IEC 27001:2022** | A.8.10 Information deletion; A.8.13 Information backup; A.8.3 Information access restriction |

This policy sets out how Tessera manages the end-to-end data lifecycle — for its
own corporate information and for the tenant data it holds on the multi-tenant
SaaS platform — from creation and acquisition through storage, backup, retention,
and secure deletion. It works alongside the Data Classification Policy
(POL-DATA-001), which defines the four classification tiers referenced
throughout.

Tessera holds personal information within the meaning of the *Privacy Act 1988*
(Cth) and must take reasonable steps to protect it under **APP 11**, to limit its
use and disclosure to what is necessary under **APP 6**, and to destroy or
de-identify it when it is no longer needed (APP 11.2). Retention is therefore
driven by what the law and the tenant contract actually require, not by habit;
where no obligation to keep data exists, the default is to dispose of it.

## Policy statements

Tessera requires that:

(a) data is classified at the point of creation or acquisition according to the
[Tessera classification model](#data-classification-model), by label or tag;

(b) an up-to-date inventory and data-flow map is maintained for all Restricted
and Confidential data;

(c) all business data is stored in, or replicated to, a Tessera-controlled
repository — including data that originates on end-user devices;

(d) data is backed up at a frequency and durability appropriate to its
classification, and backups are validated for integrity;

(e) retention periods are defined and observed, and meet every applicable
regulatory and contractual requirement — for tenant data, the product terms and
any tenant-specific agreement govern; and

(f) security documentation and audit trails are retained for a minimum of seven
years unless a longer period is required by law, contract, or the classification
scheme.

## Controls and procedures

### Data classification model

Tessera defines four classifications of data. The tiers and examples are
governed by POL-DATA-001; they are summarised here so the handling matrix below
is self-contained.

- **Restricted** — the highest-sensitivity tier. Tenant records and tenant
  personal information, production secrets (access keys, certificates, passwords),
  security incident and audit records, and payment-card data covered by PCI DSS.
  Unauthorised disclosure could cause severe harm or regulatory breach; external
  disclosure is prohibited without an approved and contractually supported
  process.
- **Confidential** — proprietary information of significant value to Tessera:
  business plans, employee and HR records, pre-announcement material, specialised
  source code, non-production security artefacts, and audit or compliance
  reports. Disclosure requires an NDA and management approval.
- **Internal** — information used in day-to-day operations: internal procedures
  and runbooks, policies, product roadmaps, most source code. Disclosure requires
  management approval; an NDA is usual but may be waived case by case.
- **Public** — information intended for external consumption (post-announcement
  material, marketing collateral, published product documentation, website and
  social-channel content). Integrity and availability still matter, even though
  confidentiality does not.

### Data handling requirements matrix

Handling requirements — encryption, access, retention, backup — are determined by
classification. The matrix below is the authoritative quick reference; where it
and POL-DATA-001 appear to differ, POL-DATA-001 §7 governs and the matrix is
corrected at the next review.

| Data             | Labelling or tagging | Segregated storage | Endpoint storage | Encrypt at rest | Encrypt in transit | Encrypt in use | Controlled access | Monitoring | Destruction at disposal | Retention period | Backup recovery |
|------------------|----------------------|--------------------|------------------|-----------------|--------------------|----------------|-------------------|------------|-------------------------|------------------|-----------------|
| **Restricted**   | Required             | Required           | Prohibited       | Required        | Required           | Required       | Blocked to end users by default; temporary privileged access only | Required  | Required  | 7 years for audit trails; varies for tenant-owned data † | Required        |
| **Confidential** | Required             | N/R                | Allowed          | Required        | Required           | Required       | All access on need-to-know       | Required  | Required  | 7 years for official documentation; otherwise per business need | Required        |
| **Internal**     | Required             | N/R                | Allowed          | N/R             | N/R                | N/R            | All staff and contractors (read); owners and authorised individuals (write) | N/R        | N/R       | 7 years for official documentation; otherwise per business need | Optional        |
| **Public**       | N/R                  | N/R                | Allowed          | N/R             | N/R                | N/R            | Everyone (read); owners and authorised individuals (write) | N/R        | N/R       | Per business need       | Optional        |

N/R = Not Required.

† Tenant-owned data is retained for as long as the tenant remains a Tessera
customer, or as required by law or contract, whichever is longer. A tenant may
request deletion of their data at any time, unless retention is required by law
(for example, records relating to a notifiable data breach, which are retained
for the period the OAIC may reasonably require for assessment and enforcement).

### Data inventory and lifecycle management

The Security team runs an automated inventory that queries the cloud estate —
principally the AWS account structure — to maintain a current record of data
repositories, including:

- Amazon S3 buckets
- Amazon RDS and DynamoDB instances
- Amazon EBS volumes
- source code repositories
- the Microsoft 365 tenant (Exchange, SharePoint, OneDrive)
- on-premises storage at the Perth and Malaga WA facilities (maintained manually)

The inventory record is held in a Security-team database, tagged with owner and
classification where applicable, and kept current through automation. The same
system is designed to track the movement of data between repositories and to
alert on unsanctioned movement.

**Amazon S3 object lifecycle management.** The platform adjusts the storage class
of certain data automatically, based on its usage pattern and age, so that
tenants can hold large volumes without paying for hot storage they no longer
need. The current S3 storage classes in use are:

- General Purpose (S3 Standard)
- Infrequent Access (S3 Standard-IA)
- Archive (S3 Glacier and Glacier Deep Archive)

S3 lifecycle policies transition data between these classes. In most cases the
platform applies the policy automatically; tenants may also adjust the storage
class of their own objects through the API to meet a specific price or
performance goal. Backups are governed by the same lifecycle mechanism — older
backups age out rather than requiring explicit deletion, and their storage class
steps down as they age.

> *[Reviewer, 2025-02-27: confirm the Glacier Deep Archive line is live in
> production — the storage-cost review in January suggested only Standard and
> Standard-IA were in use. Strike the tier if it is not yet enabled.]*

**Other business data.** Internal and confidential business records — product
plans, strategy documents, presentations, reports — are kept off individual
workstations where practical and stored in Tessera-managed systems:

- Tickets and engineering work items — **Jira** (Cloud).
- Source code — **GitHub Enterprise** (see *Source code* below).
- HR records — the HRIS (**Employment Hero**).
- Expense and procurement records — *(tool to be confirmed at sign-off; the
  current draft assumes the finance platform, but the 2024 move off the legacy
  expense system is not yet reflected here — R. Costa, please confirm).*
- Unstructured documents (Word, Excel, PowerPoint) — the Tessera SharePoint team
  site.
- Confidential business documents are stored encrypted, with access controlled on
  a need-to-know basis.

**Transient data.** Data may be staged temporarily during processing — for
example, raw files held briefly on a transfer host before being loaded into the
production environment. These transient stores are not intended for retention and
are purged immediately after use. Tessera does not use transient storage for
Restricted data.

### Backup and recovery

#### Customer data

Tenant data is held in a dedicated production AWS account, using a combination of
Amazon S3, DynamoDB, and Aurora PostgreSQL. The primary region is
`ap-southeast-2` (Sydney); data is replicated to a standby region for redundancy
and disaster recovery. By default, Amazon S3 provides the durability expected of
its eleven-nines design across the buckets in use.

The data-store services and platforms in use meet the security and resilience
controls required for the data classifications held on the platform. Where a
tenant is a US healthcare provider, a Business Associate Addendum is executed and
the relevant HIPAA security obligations are mapped to the controls in this
policy and POL-DATA-004 — Tessera is not itself a covered entity.

Tessera backs up all customer and system data automatically to protect against
catastrophic loss. An automated process backs data up to a separate AWS region
within Australia — the primary copy is written to `ap-southeast-2` (Sydney) and
cross-region replication carries a standby copy to a second Australian region.
Backups run daily by default and are encrypted with the same standards as live
production data.

Tenants may also use the Tessera API to extract and store their data elsewhere;
standard API usage fees apply.

#### Source code

Tessera hosts its source in git repositories on **GitHub Enterprise**. Source
repositories are backed up to the Tessera AWS S3 infrastructure account weekly,
with a common configuration applied to each repository to enforce the SDLC
controls. Should GitHub suffer a catastrophic loss, source is restored from the
S3 backups. Because both GitHub and AWS can host git, the commit history provides
an additional layer of recoverability across repositories.

#### Business records and documents

Each data owner or creator is responsible for keeping a backed-up copy of their
business files — documents, presentations, reports, design files, meeting notes —
in the appropriate location on the Tessera SharePoint team site rather than only
on a local workstation. Unless the local workstation handles **Restricted** data,
workstation backups are self-managed by the device owner and may sit on an
encrypted external drive or a cloud service (such as iCloud) provided the data is
both encrypted and password-protected to Tessera's password standard.

### Data deletion procedures

#### For platform customers

Tenant data is retained for as long as the account is in active status. When an
account is voluntarily closed, the data enters an expired state and is retained
for 14 days, after which the project or account and its related data are removed.
Tenants who wish to close their account should download their data manually or
via the API beforehand.

If an account is involuntarily suspended, a 14-day grace period applies during
which the account is inaccessible but can be reopened once the tenant meets their
payment obligations and resolves any terms-of-service issues. A tenant who wants
to back up data from a suspended account must first return the account to good
standing so that the API and user interface are available. After 14 days the
suspended account is closed and the data is permanently removed — except where
Tessera is required by law to retain it.

Where deletion of data is required, it is carried out in line with APP 11.2
(destruction or de-identification of personal information no longer needed) and
the secure-disposal controls in POL-DATA-001. Records relating to a notifiable
data breach — including the assessment, notifications made to the OAIC and to
affected individuals, and the remediation record — are retained for the period
the OAIC may reasonably require, and are not deleted on tenant account closure.

#### Access revocation on departure

When a member of the workforce leaves Tessera or changes role, their access to
data repositories is revoked under the joiner-mover-leaver procedure
(**ISMS-PR-014**), which requires access to be removed within 24 hours of
termination. Data custodians in Cloud Infrastructure (C. Hayes) confirm removal of
repository, database, and source-control access against the offboarding checklist
in that procedure.
