---
categories:
- Data Security
- Compliance
- Encryption Standards
description: How Tessera protects the confidentiality, integrity, and availability
  of tenant and corporate data across its production and corporate systems.
title: Data Protection
---

|                   |                                                   |
|-------------------|---------------------------------------------------|
| **Title**         | Data Protection                                   |
| **Doc#**          | POL-DATA-004                                      |
| **Version**       | 1.0                                               |
| **Date**          | 25-08-2023                                        |
| **Owner**         | CISO — I. Ferreira                                |
| **Approved By**   | Head of IT — H. Boyd                              |
| **ISO/IEC 27001:2022** | A.8.24 Use of cryptography; A.8.21 Security of network services; A.8.2 Privileged access rights |

This policy sets out how Tessera protects the confidentiality, integrity, and
availability of the data it holds — tenant data on the multi-tenant SaaS platform
and the corporate data that runs the business. It works with the Data
Classification Policy (POL-DATA-001) and the Data Management Policy
(POL-DATA-015): classification decides what a dataset *is*, data management
decides its *lifecycle*, and this policy decides how it is *protected* in motion,
at rest, and in use.

Tessera holds personal information within the meaning of the *Privacy Act 1988*
(Cth) and must take such steps as are reasonable to protect it under **APP 11**.
The encryption, network-service, and access controls described here are how
Tessera discharges that obligation, mapped to **ISO/IEC 27001:2022** Annex A
controls **A.8.24** (use of cryptography) and **A.8.21** (security of network
services).

Production systems that create, receive, store, or transmit tenant data
(hereafter "Production Systems") must follow the requirements below.

## Policy statements

Tessera requires that:

(a) data is handled and protected according to its classification (POL-DATA-001)
and the encryption standards in this policy, where applicable;

(b) data of the same classification is kept together in a given repository, and
sensitive and non-sensitive data are not mixed; controls — authentication,
authorisation, encryption, auditing — are applied to the highest classification
held in any repository;

(c) workforce members do not hold standing administrative access to production
data during normal operations; exceptions are emergency operations such as
forensic analysis and manual disaster recovery, conducted under the break-glass
process in POL-SECU-010;

(d) Production Systems disable every service not required for their business
purpose;

(e) all access to Production Systems is logged, in line with the Tessera Auditing
requirements; and

(f) Production Systems have security monitoring enabled — activity and
file-integrity monitoring, vulnerability scanning, and malware detection, as
applicable.

## Controls and procedures

### Data protection implementation

Data is classified and handled per the Tessera Data Classification Policy
(POL-DATA-001) and the handling matrix in POL-DATA-015. Confidential and
Restricted data is tagged at creation where the platform supports tagging; each
tag maps to a data type, which maps in turn to a protection level for encryption,
access control, backup, and retention. Classification may also be inferred from
location — source held in Tessera repositories is treated as **Internal** by
default, even where no tag is applied to an individual file.

Confidential and Restricted data is always stored and transmitted using approved
encryption. The multi-tenant VPC layout, the KMS key hierarchy, and the IAM
separation that underpin these controls are described in the [cloud architecture
diagram](../support/architecture_diagram.qmd); this policy states the *controls*
the diagram *implements*.

IT systems that process or store sensitive data follow the provisioning,
configuration, change-management, patching, and anti-malware standards defined in
the [Configuration and Change Management policy](ccm.md).

#### Customer and production data protection

Tessera hosts on **Amazon Web Services**, with the primary region
`ap-southeast-2` (Sydney) and a cross-region standby for redundancy and disaster
recovery. Data is replicated across regions within Australia.

All Tessera employees, systems, and resources follow the practices below to
reduce the risk of compromise of production data:

1. Controls are implemented and reviewed to protect production data from improper
   alteration or destruction.
2. Confidential data is stored so that user access is logged and automatically
   monitored for signs of incident.
3. Tenant production data is segmented and accessible only to the tenant it
   belongs to.
4. Production data at rest sits on encrypted volumes, using keys managed by
   Tessera. Encryption at rest is enforced through the automated deployment
   scripts referenced in [Configuration and Change Management](ccm.md).
5. Volume-encryption keys, and the systems that generate them, are protected from
   unauthorised access — key material is reachable only by privileged accounts.
6. Encrypted volumes use the approved cipher algorithms, key strengths, and key
   management process defined in §"Encryption key management" below.
7. RAID volume members are individually encrypted and assembled at boot, which
   requires manual entry of the key material to mount the encrypted volume.

> *[Reviewer, 2025-03-04: item 6 originally pointed at "§12.3.1," a numbering
> carried over from an earlier draft. That section was renumbered when the policy
> was restructured; point it at the Key Management heading above instead.]*

#### Access

Employee access to production is guarded by an approval workflow and is disabled
by default. When access is approved, time-bound temporary access is granted. The
Security team reviews production access on a case-by-case basis, and standing
access is re-attested under the access control policy (POL-SECU-021). Access is
revoked under the joiner-mover-leaver procedure (**ISMS-PR-014**) within 24 hours
of a termination or role change.

#### Separation

Tenant data is logically separated at the database or datastore level using a
unique identifier per tenant. The separation is enforced at the API layer: the
caller authenticates against a chosen tenant, the tenant identifier is carried in
the access token, and every database or datastore query is scoped by that
identifier. The VPC, KMS, and IAM structures that back this separation are shown
in the [cloud architecture diagram](../support/architecture_diagram.qmd).

#### Backup and recovery

For the backup and recovery process, see the controls and procedures in
[Data Management](data_mgmt.md).

#### Monitoring

Tessera uses AWS CloudWatch and CloudTrail to monitor the cloud estate. On a
system failure or alarm, key personnel are notified by text, chat, and email so
that corrective action can begin; an on-call rotation covers major services where
further support is needed.

A security agent monitors production systems. The agents track system activity,
raise alerts on suspicious behaviour, and report vulnerability findings to a
centralised management console. The agent is installed on all on-premises Linux
servers and is baked into the Amazon Machine Images (AMIs) used in the Tessera
AWS environments.

### Protecting data at rest

#### Encryption of data at rest

All databases, data stores, and file systems are encrypted with AES-256, using
separate keys for each storage type. Keys are rotated on the schedule set out in
the key management section below.

#### Local disk and volume encryption

Encryption and key management for the local disks of on-premises servers and
end-user devices follow the platform standards for Windows, macOS, and Linux —
BitLocker, FileVault, and LUKS respectively.

### Protecting data in transit

1. All external data transmission is encrypted end to end using keys managed by
   Tessera. This includes cloud infrastructure and third-party vendors and
   applications.
2. Transmission-encryption keys, and the systems that generate them, are
   protected from unauthorised access; key material is reachable only by
   privileged accounts.
3. Transmission-encryption keys use a minimum of 4096-bit RSA, or keys and
   ciphers of equivalent or higher strength (for example, 256-bit AES session
   keys in the IPSec case).
4. Transmission-encryption keys are limited to one year of use and then
   regenerated.
5. For every Tessera API, authentication, authorisation, and auditing are
   enforced for all remote systems sending, receiving, or storing data.
6. System logs of all production-data transmissions are kept and made available
   for audit.

#### Encryption of data in transit

All internet and intranet connections are encrypted and authenticated using TLS
1.2 (or above), ECDHE_RSA with P-256 key exchange, and AES_128_GCM.

#### End-user messaging channels

Restricted and Confidential data is not sent over end-user messaging channels —
email or chat — unless end-to-end encryption is enabled.

### Protecting data in use

Data in use is the active data held in system memory, CPU caches, or registers
while an application processes it. Protection of data in use relies on
application-layer controls and system access controls. See the SDLC and access
controls for details.

> *[Reviewer, 2025-02-18: the two links above pointed at `sdlc.md`, which was
> consolidated into the secure development lifecycle section of the Engineering
> Handbook in 2024. The handbook is not yet published on the policy site; until
> it is, leave the references as prose rather than dead links. — I. Ferreira]*

Tessera applications implement logical account-level data segregation to protect
data in a multi-tenant deployment, and may incorporate Runtime Application
Self-Protection (RASP) and attribute-based access control (ABAC) for additional
protection of data in use.

### Encryption key management

Tessera uses AWS Key Management Service (KMS) for encryption key management.

- KMS keys are unique to Tessera environments and services.
- KMS keys are rotated automatically each year.
- Administrative access to KMS is restricted to the Cloud Infrastructure team
  (C. Hayes) and the CISO's office (I. Ferreira), and key administrative actions
  are logged via CloudTrail.

### Certificate management

Tessera uses AWS Certificate Manager (ACM) and Let's Encrypt for certificate
management.

- Certificates are renewed automatically.
- The Security team monitors certificates for expiry, potential compromise, and
  validity of use; the revocation process is invoked when a certificate is no
  longer needed or on discovery of potential compromise.

### Data integrity protection

Where appropriate, Tessera Engineering implements versioning and lifecycle (or an
equivalent data-management mechanism) so that direct edit and delete are not
permitted on the data — this guards against accidental or malicious overwrite,
including ransomware. In AWS, IAM and S3 bucket policy in production enforce this
when environments are configured; when a change is required, a new version is
created rather than overwriting the existing object.

- Every edit creates a new version, and old versions are preserved for the period
  defined in the lifecycle policy.
- Data objects are "marked for deletion" so they remain recoverable within the
  window set by the retention policy.
- Data is archived off-site — to a separate AWS account and/or region.

Additionally, all access to sensitive data is authenticated and audited through
logging of the infrastructure, systems, and applications involved.
