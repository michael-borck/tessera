---
categories:
- IT Management
- Software
- Compliance
description: Lists the software approved for installation and use on Tessera
  endpoints and in the Tessera environment.
title: Approved Software
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Approved Software                   |
| **Doc#**     | DOC-ITMA-003                        |
| **Version**  | 1.0                                 |
| **Date**     | 06-02-2023                          |
| **Owner**    | Head of IT (H. Boyd)                |
| **Approved By** | CISO (I. Ferreira)              |

This is the approved-software list for Tessera. The software below has been
reviewed by IT and Security and may be installed on Tessera-managed devices and
used for Tessera or tenant data. Software not on this list may be used only if
it is necessary for a business purpose, is legal and properly licensed, and is
approved case by case by the manager and the Security team. The list is reviewed
at least annually.

## Approved software

**Identity and access**
- **Auth0** — primary identity provider (workforce SSO and platform
  authentication).
- **1Password** — secrets and password management.

**Development and operations**
- Code editors — **Visual Studio Code**, Vim and equivalents.
- **Docker** — local containers.
- **Node.js / npm** — JavaScript runtime and package management.
- **Postman** — API testing.
- **AWS CLI** and **Terraform** — cloud and infrastructure-as-code.
- **Atlassian suite** — Jira and Confluence.

**Productivity and collaboration**
- **Microsoft 365** (Office apps, SharePoint, OneDrive).
- **Slack** — team messaging.
- **Zoom** — video conferencing.
- **Adobe suite** — design and document tooling.
- **Sketch** — design (macOS).

> *[H. Boyd: this list used to name Okta as the primary IdP before the 2024
> identity migration to Auth0. If you come across an older runbook that still
> says Okta, treat it as stale and rely on this entry instead.]*

## Open-source and free software

Reputable, well-documented open-source or free software may be used for
development at the discretion of the Engineering team, provided the endpoint
agent is active and process behaviour is monitored. Periodic audits review
open-source usage. Examples include:

- Chrome and Firefox (with vetted extensions);
- Homebrew; and
- GraphQL / GraphiQL.

## Approval

Software not listed above may be installed if it is necessary for a business
purpose, is legal, carries a valid licence, and is approved on a case-by-case
basis by the manager or the Security team.
