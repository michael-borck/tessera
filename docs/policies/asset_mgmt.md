---
categories:
- IT Management
- Risk Management
- Asset Inventory
description: Describes how Tessera inventories and manages physical and digital
  assets, aligned to ISO/IEC 27001:2022 A.5.9, A.5.10 and A.5.14.
title: Asset Management
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Asset Management                    |
| **Doc#**     | POL-ITMA-009                        |
| **Version**  | 1.0                                 |
| **Date**     | 19-04-2023                          |
| **Owner**    | Head of IT (H. Boyd)                |
| **Approved By** | CISO (I. Ferreira)              |
| **ISO/IEC 27001:2022** | A.5.9 Inventory; A.5.10 Acceptable use of assets; A.5.14 Information transfer |

# Asset Inventory Management

Maintaining an accurate inventory of physical and digital assets is a
precondition for every other security control — you cannot protect, monitor or
retire what you do not know you own. This policy implements Annex A controls
**A.5.9** (inventory of information and other associated assets), **A.5.10**
(acceptable use of assets) and **A.5.14** (information transfer). Data inventory
and lifecycle are covered separately in [Data Management](data_mgmt.md).

## Policy Statements

Tessera requires that:

(a) IT and Security maintain an inventory of all critical company assets,
physical and logical (A.5.9).

(b) Every asset has a named owner and is tagged with a data/risk classification.

(c) Physical assets are labelled with a Tessera property tag.

(d) Acceptable use of assets follows the Acceptable Use Policy (POL-SEC-022)
(A.5.10).

(e) Transfer of information between systems, sites or parties follows the
information-transfer handling rules in the Data Classification Policy
(A.5.14).

## Controls and Procedures

### Physical asset inventory

Tessera IT maintains the inventory of company-owned physical computing equipment
in **JupiterOne**, which acts as our CMDB. Tracked equipment includes:

- servers;
- workstations and laptops;
- printers; and
- networking equipment.

Each record captures manufacturer, model, serial number, property tag, assigned
owner and location. Movement of hardware and media — issue, return, transfer and
reuse — is recorded against the asset.

The IT Manager ensures every physical asset carries a Tessera property tag and
that JupiterOne reflects its current status. When a device is infected,
redeployed or retired, IT performs a full data wipe before reuse or disposal, in
line with the media-sanitisation standard.

### Digital asset inventory

The Security team runs automated discovery against the cloud estate (primarily
AWS) and ingests the results into JupiterOne. Digital assets tracked include:

- virtual machines and EC2 instances;
- S3 repositories;
- Lambda functions;
- IAM accounts and roles;
- security agents; and
- source-code repositories.

Records are tagged with owner, project and classification where applicable, and
kept current through automation.

> *[H. Boyd: the IAM-account discovery job has been noisy since the Auth0
> migration — some service accounts surface as "orphaned" that are actually
> active. Ticket OPS-4481 to tune the filter is still open, so treat orphan
> reports with caution until it lands.]*

### Paper records

Tessera does not use paper records for sensitive information. Recording or
storing sensitive data on paper is against policy.
