---
categories:
- Human Resources
- Training
- Security Awareness
description: An abridged version of Tessera's security policy that all workforce members are required to be familiar with and comply with, framed to the Privacy Act 1988 (Cth) and ISO/IEC 27001:2022.
title: Employee Handbook and Policy Quick Reference
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Employee Handbook and Policy Quick Reference |
| **Doc#**     | DOC-SECU-008                               |
| **Version**  | 1.2                                        |
| **Date**     | 05-03-2025                                 |

This is an abridged version of Tessera's security policy. All workforce members
— employees and contractors — are required to be familiar with it and to comply
with it.

You are taken to have read and understood the corporate security and privacy
policies, standards and procedures, even if you have not yet read them in full.
So it is worth reading them properly at some point.

- As an Australian entity holding the personal information of individuals,
  Tessera and everyone who works here must comply with the *Privacy Act 1988*
  (Cth) and the Australian Privacy Principles, including the Notifiable Data
  Breaches scheme. All workforce members complete the required privacy and
  security awareness training.
- You are required to follow the detailed procedures in the policies that relate
  to your role.

Security is everyone's responsibility. If you are unsure, stop and ask — it is
always cheaper than the alternative.

### Acknowledgement

As a Tessera workforce member, I acknowledge that:

- I have reviewed and will comply with the company [security policies and
  procedures][1], [acceptable use][2], and [sanction policies][3].
- I accept that my work devices, including any approved BYOD devices, and the
  activity on them are subject to security monitoring.
- I will protect my work devices at remote locations and will not leave them
  unattended.
- I will keep my laptops and workstations securely configured — full-disk
  encryption, the endpoint security agent, malware protection, the local
  firewall, a password-protected screen lock, and current security patches.
- I will follow documented policies and procedures to protect sensitive and
  confidential data.
- I have completed the required [privacy and security awareness training][4].
- I understand that tenant data and other sensitive data may only be stored in
  approved production environments.
- I understand the company and regulatory requirements to protect critical data,
  and I will NOT:
    - store critical data such as tenant data, personal information or secrets
      on consumer file shares, in logs, or in source code;
    - send critical data such as tenant data or secrets by email, chat, or other
      unsecured channels;
    - post critical data in blogs, support tickets, or other public forums; and
    - discuss tenant or personal information in public.
- I will keep my passwords confidential and will not share them.
- I will not use shared, generic, guest, anonymous, emergency or temporary
  accounts without explicit approval.
- I will report any incident or suspicious activity to Security and/or my
  manager.

### Training

As part of onboarding, and periodically thereafter, you will be prompted to
complete:

- **General security policy and procedures**, including:
    - [Roles, Responsibilities and Training](../policies/rar.md)
    - [HR and Personnel Security](../policies/hr.md)
    - [Data Classification and Handling](../policies/data_mgmt.md#data-classification-model)
- **Privacy and security awareness** (annual), covering the APPs, the NDB
  scheme, phishing and credential hygiene.
- **Role-based security** training:
    - **Engineering** — [Product Security and Secure Software Development](../policies/sdlc.md),
      [Data Management](../policies/data_mgmt.md), [Data Protection](../policies/data_protection.md),
      [Configuration and Change Management](../policies/ccm.md).
    - **Administrative, Marketing and Procurement** —
      [Third Party Security, Vendor Risk Management and Systems/Services Acquisition](../policies/vendor.md).
    - **Administrative and Senior Leadership/Executive** —
      [Business Continuity and Disaster Recovery](../policies/bcdr.md),
      [Compliance Audits and External Communications](../policies/compliance_audit.md),
      [Risk Management](../policies/risk_mgmt.md).
    - **HR and Facilities** — [HR and Personnel Security](../policies/hr.md),
      [Facility Access and Physical Security](../policies/facility.md).
    - **Product Management and Business Development** —
      [Privacy and Consent](../policies/privacy.md).
    - **Security, Compliance and IT** — all policies and procedures, in full.

### Acceptable use for end-user computing

Tessera policy requires that:

(a) Per the Tessera [security architecture](../policies/model.md), all workforce
members are treated as remote users and must follow the access controls and
procedures for remote access.

(b) Use of Tessera computing systems is subject to monitoring by the IT and
Security teams.

(c) Employees may not leave computing devices (including laptops and smart
devices) used for business — company-provided or BYOD — unattended in public.

(d) Device encryption must be enabled for all devices accessing company data,
such as full-disk encryption for laptops.

(e) Use only legal, [approved software](approved_software.md) with a valid
licence. Do not use personal software for business, or vice versa.

(f) Encrypt email containing sensitive or confidential data.

(g) Employees may not post sensitive or confidential data in public forums or
chat rooms. If a posting is needed to obtain technical support, data must be
sanitised first.

(h) Anti-malware protection and monitoring must be installed and enabled on all
endpoint systems commonly affected by malware.

(i) All data storage devices and media must be managed per the Tessera data
classification and handling procedures.

(j) Mobile devices may not connect directly to Tessera production environments.

(k) It is strictly forbidden to download or store sensitive tenant or personal
data on end-user devices, including laptops, workstations and mobile devices.

### Your responsibilities for computing devices

Tessera provides company-issued laptops and workstations to all employees and
does not currently require or support bring-your-own-device.

The laptop or workstation assigned to you is yours to configure and manage
within company security policy and standards. You are responsible to:

- configure the system to meet the [configuration and management
  requirements](../policies/ccm.md), including password policy, screen-lock
  timeout and host firewall;
- ensure the required anti-malware and security monitoring agent is installed
  and running; and
- install security patches promptly or enable auto-update.

IT and Security provide automated configuration scripts and technical
assistance as needed.

You are also responsible for keeping a backup of your business files in the
appropriate location on the Tessera file-sharing or team site — for example
documents, presentations, reports, design files and meeting notes.

!!! important

    Do not back up critical data such as tenant data or personal information to
    file-sharing sites. If you have such data locally, contact IT and Security
    for the appropriate data-management and protection solution.

Unless your workstation has access to **Critical** data, backups of user
devices are self-managed by the device owner and may be stored on an encrypted,
password-protected external drive or cloud service (passwords must meet Tessera
requirements).

### Getting help

Support for most business applications is self-service — for example, password
reset through the identity provider.

If needed, use the internal service desk to request IT and Security support.
Common requests include password reset and access requests, new software or
hardware, technical support, and recommended changes to policies or processes.

### How to report an incident or suspicious activity

You are responsible for reporting all suspicious activity and security-related
incidents immediately to the Information Security team, by one of:

- (preferred) the internal help desk at
  [security@tessera.locoensayo.org](mailto:security@tessera.locoensayo.org);
- the `#infosec` Slack channel for non-sensitive, non-confidential questions;
- your direct manager; or
- for a concern under the Whistleblower Policy, your immediate manager, the CEO
  or the COO. See the [Whistleblower Policy section in the HR Security
  Policy][5] for detail.

> **DRAFT NOTE:** This handbook was rewritten from a HIPAA-oriented version.
   References to "ePHI", "HIPAA training" and "patient information" have been
   replaced with the Privacy Act / APP frame. Some linked policies are being
   rationalised as part of certification-readiness; the handbook will be
   updated as those land.

[1]: ../policies/access.md
[2]: ../policies/access.md
[3]: ../policies/hr.md
[4]: training.md
[5]: ../policies/hr.md#whistleblower-policy
