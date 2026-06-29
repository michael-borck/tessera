---
categories:
- Physical Security
- Access Control
- Facility Management
description: Sets out physical access and security controls for Tessera's Perth,
  Sydney and Malaga offices, aligned to ISO/IEC 27001:2022 Annex A.7.
title: Facility Access and Physical Security
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Facility Access and Physical Security |
| **Doc#**     | POL-SECU-003                        |
| **Version**  | 1.0                                 |
| **Date**     | 03-08-2023                          |
| **Owner**    | Head of IT (H. Boyd)                |
| **Approved By** | COO (G. Sullivan)               |
| **ISO/IEC 27001:2022** | A.7.1–A.7.6 — Physical security (perimeters, entry, secure areas, monitoring) |

Physical access to Tessera premises is restricted to authorised individuals.
This policy implements the physical and environmental security controls in
**Annex A.7** of ISO/IEC 27001:2022. The Head of IT owns the access-control and
CCTV systems; day-to-day facilities management at each site is handled by a
contracted facilities manager.

## Policy Statements

Tessera requires that:

(a) Physical access to Tessera offices, comms rooms and restricted areas is
restricted to authorised workforce members and escorted visitors.

(b) Workforce members wear their access card visibly while inside secure areas
and challenge unbadged individuals.

(c) All workforce members comply with the physical-security procedures published
for each site.

(d) Visitors and vendors are escorted by a Tessera workforce member at all times
while on site.

(e) Workforce members report any unauthorised visitor or access attempt to the
Facilities Manager or the Security team.

(f) A record is kept of every physical access event — normal entry, visitor
escort, maintenance and repair — for the secure areas and comms rooms. Records
are retained for a minimum of seven years.

(g) Fire detection, suppression, escape routes and floor-warden duties are
maintained in line with the building's work health and safety obligations and
relevant Australian standards.

## Controls and Procedures

### Physical Security

#### Access requirements

- Physical access is controlled by **Gallagher** card readers and smart locks at
  every perimeter and restricted door. Each access event is logged.
  - Restricted areas and comms rooms are locked when unattended.
  - Access to restricted areas is granted only to authorised workforce members,
    approved by the Head of IT.
  - Access is revoked as part of the leaver process (ISMS-PR-014).
  - Lost or stolen cards must be reported to the manager, the local Site Lead or
    the Facilities Manager without delay.
  - The Facilities Manager deactivates a lost or stolen card on the Gallagher
    system and reissues access as required.
  - Physical keys (where still in use) are changed within 7 days of being
    reported lost or stolen.

- Enforcement
  - Violations are reported to the relevant team lead or the Security team.
  - Workforce members who breach this policy are subject to disciplinary action
    under the HR and Personnel Security Policy (POL-HUMA-017), up to and
    including termination.
  - Visitors who breach this policy may be refused further site access.

- Workstation security
  - Workstations are used only by authorised workforce members for their
    assigned duties.
  - Workforce members must lock their screen when they leave their workstation
    (screen-saver lock is set at **15 minutes** of inactivity on managed
    devices).
  - Workforce members report unauthorised access attempts to the Security team.
  - Tessera-issued devices remain Tessera property and are issued to users by IT.

> *[H. Boyd, margin note: confirm the 15-minute screen lock here still matches
> the endpoint baseline — I think Security moved managed laptops to a shorter
> value in the last MDM push.]*

#### Building standards by location

All entry points are secured by Gallagher card readers and covered by Genetec
CCTV.

- **Perth — St Georges Terrace (HQ)**
  - Staffed Monday–Friday, with after-hours card access for Tessera workforce
    members.
  - The Tessera floor is secured 24/7 and requires an access card at all times.
  - The comms room is secured 24/7 and is card-access restricted to authorised
    IT and Security staff only.
  - Visitor entry is through reception, which logs visitor details and the host.

- **Sydney**
  - Shared-floor tenancy; the Tessera suite is secured 24/7 and requires an
    access card.
  - The comms cabinet is a lockable cabinet within the secured suite,
    card-access restricted.

- **Malaga WA**
  - Operations and engineering workshop facility; secured 24/7, card access
    required.
  - The server and network cabinet sits in a locked comms room, card-access
    restricted.

#### Access-control data storage

The Gallagher access-control server for each site runs on local infrastructure
within that site's secured comms room, and access logs are replicated off-site.

CCTV is recorded on the **Genetec** platform. Footage is retained for a minimum
of 30 days, and longer where an incident is flagged for preservation.

#### Access-control process

Unissued access cards are held in a locked cabinet at each site's reception.

##### New hires
Access is provisioned from the joiner ticket raised in the People & IT project
in Jira (see HR and Personnel Security Policy, POL-HUMA-017). The card is
typically activated the day before the start date and held in the locked cabinet
until issued.

##### Separations
The leaver ticket triggers card deactivation. Immediate separations are
processed as soon as the ticket is raised; future separations are scheduled to
deactivate on or before the termination date.

##### Special-access requests
Restricted areas (comms rooms, the Malaga build area) require named-approver
approval. Approval routing moved from email to Jira in late 2024; some older
runbooks still describe the email approval path. If the documented approver is
unavailable, the Head of IT or COO may act as approver.

#### Maintenance and repairs

Maintenance, repairs and modifications to the access-control and CCTV systems
are performed by the contracted security-systems vendor for each site. Records
are stored in the Physical Security folder in SharePoint and retained for seven
years.

#### Reporting and auditing

Access-control records are reviewed at least annually. Special-access lists are
reviewed with their approvers quarterly. Records are owned by the Facilities
Manager and held in the Physical Security folder in SharePoint.

### Data centre security

Tessera does not operate its own data centre. Production workloads run in **AWS
Sydney (ap-southeast-2)**, with cross-region standby. Physical and environmental
security of the data centre — perimeter, power, cooling, fire suppression and
physical access to the host facility — is the responsibility of the cloud
provider under the AWS shared-responsibility model. Tessera's responsibility is
the logical security of what runs in the account, which is covered in the
[Security Architecture and Operating Model](model.md) and the cloud architecture
diagram (docs/support/architecture_diagram.qmd).

### Clean-desk and workstation procedures

Workforce members must secure all sensitive and confidential material —
electronic and physical — when they leave their workspace, and at the end of the
day. This includes:

- laptops, tablets and other portable devices;
- removable media (USB drives, external disks);
- printed material; and
- whiteboards holding sensitive information.

Managed laptops and tablets must be screen-locked when unattended and taken home
at the end of the day where the site is not staffed overnight. Removable media
and printed documents are stored in a locked drawer or cabinet when not in use.
Printed material is collected from the printer immediately. Passwords are never
written down or left in the open.

Access cards and physical keys must not be left unattended anywhere in the
office.
