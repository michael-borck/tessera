---
categories:
- Vendor Management
- Procurement
- Compliance
description: Lists the vendors approved for use across Tessera, with the service
  each provides and the basis of approval.
title: Approved Vendors
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Approved Vendors                    |
| **Doc#**     | DOC-COMP-007                        |
| **Version**  | 1.0                                 |
| **Date**     | 13-02-2023                          |
| **Owner**    | Head of Compliance (M. Dubois)      |
| **Approved By** | CISO (I. Ferreira)              |

This is the approved-vendor list for Tessera. Each vendor below has been through
procurement and security review and is approved for the purpose stated. The list
is reviewed at least annually and whenever a contract is renewed or a material
security concern arises. Adding a vendor requires a request through Procurement
and a security assessment by the Security team; using an unlisted vendor for
Tessera or tenant data is not permitted.

## Approved vendors

| Vendor | Purpose |
|--------|---------|
| **Amazon Web Services (AWS)** | Primary IaaS — compute, storage, networking and managed services for the Tessera platform, in ap-southeast-2 (Sydney) with cross-region standby. |
| **Auth0** | Identity provider — workforce SSO and platform customer authentication (OAuth 2.0 / OIDC / SAML). |
| **Atlassian** | Jira (ticketing, GRC and change) and Confluence (engineering wiki). |
| **GitHub** | Source-code hosting, code review and CI/CD. |
| **GitLab** | Secondary source-control and CI runner for selected workloads. |
| **Splunk** | SIEM — security event aggregation, correlation and detection. |
| **NextDC** | Australian colocation — cross-connect and DR standby for on-premises edge gear. |
| **Vocus (TPG Telecom)** | WAN and internet transit for the Perth, Sydney and Malaga sites. |
| **Employment Hero** | HRIS — personnel records, onboarding and payroll. |
| **KPMG** | External audit and assurance (ISO/IEC 27001 and SOC 2). |
| **Australian Cyber Security Centre (ACSC) / AusCERT** | Threat-intelligence and incident-notification feeds (participation, not a commercial contract). |

## Notes

- The list above is not exhaustive for low-risk, indirect procurement (for
  example, stationery). For anything that will store, process or transmit Tessera
  or tenant data, only a listed vendor may be used.
- Tenant-driven add-ons — for example, a US healthcare tenant's Business
  Associate obligations — are reflected in the tenant schedule and do not appear
  here.

> *[M. Dubois: the Splunk renewal is under review against a managed-detection
> alternative, so do not assume Splunk is permanent when scoping new detection
> content. Ref: PROC-2025-118.]*
