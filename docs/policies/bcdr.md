---
categories:
- Risk Management
- Operational Continuity
- Disaster Recovery
description: The Tessera Business Continuity and Disaster Recovery (BCDR) plan sets out
  how the platform is recovered and restored after a disruption.
title: Business Continuity and Disaster Recovery
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Business Continuity and Disaster Recovery |
| **Doc#**     | POL-RISK-008 |
| **Version**  | 1.0                                 |
| **Date**     | 08-11-2023                          |
| **Owner**    | Grace Sullivan, Chief Operating Officer |
| **Approved By** | Henrik Larsson, Chief Executive Officer |
| **ISO/IEC 27001:2022** | A.5.29 Information security during disruption; A.5.30 ICT readiness for business continuity |

This document is the Tessera Business Continuity and Disaster Recovery (BCDR)
plan. It sets out how Tessera keeps tenant services available through a
disruption and how the platform is recovered to normal operations afterwards.
Tessera runs a multi-tenant managed-cloud platform; the realistic disruptions
we plan for are loss of an AWS region, a wide-area connectivity outage, a
cyber incident that forces isolation of the production environment, and loss of
a work site or key personnel. The plan is written to satisfy **A.5.29**
(information security during disruption) and **A.5.30** (ICT readiness for
business continuity) of ISO/IEC 27001:2022, and to follow the business
continuity good practice in ISO 22301.

Operational accountability for the plan sits with the **Chief Operating Officer
(G. Sullivan)**. Security accountability during a disruption sits with the
**Chief Information Security Officer (I. Ferreira)**. The plan is reviewed at
least annually and after any activation or major test.

## Policy Statements

Tessera policy requires that:

(a) A documented BCDR plan, including backup and recovery of systems and data,
must be defined, maintained and tested.

(b) The plan must be exercised at least annually. Recovery objectives (RTO/RPO)
must be measured against the targets in the Business Impact Analysis, and gaps
filed as improvement actions.

(c) Security controls must be maintained during all BCDR activities. Recovery is
not a reason to bypass authentication, logging, tenant isolation or
break-glass controls.

## Controls and Procedures

### BCDR Objectives and Roles

#### Objectives

The objectives of this plan are to:

1. Provide a structured response to a disruption, organised into three phases:

    * *Notification/Activation phase* — detect and assess the disruption and
      activate the plan;
    * *Recovery phase* — restore services to an operational state, using the
      cross-region standby where required;
    * *Reconstitution phase* — return processing to normal operations and
      formally close the event.

2. Identify the activities, resources and procedures needed to keep Tessera
platform services running during a prolonged interruption.

3. Identify and quantify the impact of interruptions to Tessera systems, using
the Business Impact Analysis, DOC-BCDR-001, to classify systems by
criticality tier.

4. Assign responsibilities to named individuals and teams for recovery during a
prolonged interruption.

5. Coordinate with internal teams and with external partners and suppliers who
participate in recovery.

The disruptions that would activate this plan include regional AWS outages,
loss of connectivity to a site, natural disasters, civil disturbance, a
successful cyber attack requiring isolation of the production environment, and
loss of a work site.

#### Criticality of systems

Tessera classifies systems into two recovery categories. The authoritative
criticality tiers, RTO and RPO targets are defined in the **Business Impact
Analysis, DOC-BCDR-001 (v0.3 DRAFT)**.

1. *Critical systems* host the production application, tenant data stores,
authentication, or services that production depends on (for example the control
plane, the tenant databases, and the management plane). These must be restored
— or failover to the cross-region standby initiated — as soon as they become
unavailable. Target **RTO 4 hours / RPO 1 hour**.

2. *Non-critical systems* are everything not classified critical above —
internal tooling, reporting, analytics and administrative services. These are
restored at lower priority and must not block recovery of critical systems.
Target **RTO 48 hours / RPO 24 hours**.

> *[BIA draft, v0.3 — N. Bennett, 2025-02: the Tier 1 RTO/RPO above are the
> policy targets. The BIA working copy (DOC-BCDR-001 v0.3) currently records
> Tier 1 as RTO 2h / RPO 15 min pending sign-off; reconcile before the Stage 1
> audit.]*

#### Line of succession

Decision-making authority for this plan is held, in order:

* **Grace Sullivan, COO** — overall authority for the plan; responsible for the
  safety of personnel and for executing the procedures in this document.
* **Noah Bennett, Head of Engineering** — responsible for recovery of the
  Tessera technical environment and the cross-region failover.
* **Henrik Larsson, CEO** — acts as authority if neither the COO nor Head of
  Engineering is available, or delegates to an alternative.

To initiate the plan, use the after-hours contact list maintained by the
Security team (the current copy is held in the Security shared drive and
mirrored to team leads' local devices):

* Grace Sullivan, COO
* Noah Bennett, Head of Engineering
* Isabella Ferreira, CISO
* Henrik Larsson, CEO

#### Response teams and responsibilities

The following teams are trained to respond to a disruption affecting Tessera
infrastructure and systems.

1. **Cloud Infrastructure & IT** — recovery of the hosted environment, network
   and supporting services. Led by **Hamish Boyd, Head of IT**, reporting to
   the COO. **Connor Hayes (Cloud Infrastructure Architect)** owns the
   region-failover mechanics.

2. **HR & Facilities** — physical safety of personnel and environmental safety
   at each Tessera site (Perth HQ, Sydney, Malaga WA), supported by site leads.
   Led by the Facilities Manager, reporting to the COO.

3. **Cloud Service Operations / DevOps** — recovery of applications, web
   services, the platform and its supporting cloud infrastructure, including
   testing re-deployments and assessing damage. Led by **Noah Bennett, Head of
   Engineering**, with **Rafa Costa (Cloud Service Operations)** on rotation.

4. **Security** — assessment and response to any cybersecurity dimension of the
   event, per the Incident Response Policy ([POL-SECU-010](ir.md)). The
   Security team supports the other teams during non-cyber events. Led by
   **Isabella Ferreira, CISO**.

Team leads must keep a local copy of this policy and the contact list, in case
Internet access is unavailable during a disaster. All executive leadership are
informed of any activation. Current executive leadership are listed in the
organisational chart maintained by Head of People.

### General Disaster Recovery Procedures

#### Notification and Activation phase

This phase covers the initial detection, assessment and decision to activate.
Based on assessment — and per the Incident Response Policy (POL-SECU-010) where
the event has a cyber dimension — the plan may be activated by the **COO** or
**Head of Engineering**. The **CISO** may activate the plan directly in the
event of a cyber disaster.

The notification sequence:

* The first responder notifies the COO with all known information.
* The COO contacts the response teams and begins assessment. If the COO is
  unreachable, the Head of Engineering or CISO stands in.
* Team leads complete the damage assessment to determine the extent of damage
  and estimated recovery time. Where assessment cannot be performed locally
  because conditions are unsafe, the COO follows the alternate assessment
  procedure with the response teams.
* The plan is activated if any of the following are met:
    * Platform services will be unavailable for more than 4 hours against the
      Tier 1 RTO;
    * The primary AWS region (ap-southeast-2) is degraded and cross-region
      failover is required;
    * A site or hosting facility will be unavailable for more than 24 hours;
    * Other criteria as defined by the COO and CISO.
* On activation, the COO informs team leads of the event details and any
  relocation required.
* Team leads cascade to their teams.
* The COO notifies hosting and connectivity partners that an event has been
  declared and arranges any material transfer to the alternate site.
* The COO briefs remaining personnel and executive leadership on status.

Notification may be by message, email or phone. Out-of-hours escalation runs
through the Security on-call rotation.

#### Recovery phase

This phase recovers Tessera infrastructure and operations. Where the primary
region is the problem, recovery follows the **Failover Runbook, SOP-BCDR-001**,
which details the ap-southeast-2 → standby region failover: promotion of the
cross-region replicas, DNS cutover, and validation. Tasks below run largely in
parallel; sequence is a guide, not a constraint.

Recovery goal: return Tessera infrastructure to a production state, with
security controls intact.

1. Contact affected tenants and partners to open communication — Cloud Service
   Operations.
2. Assess damage to the environment — Cloud Service Operations + Security.
3. Stand up the standby environment (region failover per SOP-BCDR-001, or fresh
   bootstrap from infrastructure-as-code) — Cloud Infrastructure.
4. Confirm secure access to the recovered environment, including break-glass
   under POL-SECU-010 — Security.
5. Promote replicas / restore data from backup; verify integrity — Cloud
   Service Operations.
6. Deploy application code and run the recovery test suite — Engineering.
7. Verify logging, security alerting and tenant isolation — Security + DevOps.
8. Confirm patch levels and configuration baselines — DevOps.
9. Cut over DNS and dependent records to the recovered environment — Cloud
   Infrastructure.
10. Update tenants and partners through established channels — Cloud Service
    Operations.

#### Reconstitution phase

This phase returns Tessera to normal operations. The goal is full
reconstitution within the Tier 1 RTO of activation; where the original
environment has been rebuilt, operations are transitioned back from the
standby region.

1. Restoration of the primary site / region
    * Re-run the recovery steps at the primary region once it is restored.
    * For cloud environments, restoring the original region is not required
      except for forensic purposes; the standby may be promoted to primary by
      decision of the COO and Head of Engineering.
2. Plan deactivation
    * Any hardware used at an alternate site is handled and disposed of under
      the Tessera Media Disposal / Asset Management policy.
    * A post-incident review is held within two weeks; lessons feed the next
      test cycle.

### Testing and Maintenance

The COO, with the Head of Engineering and CISO, sets the annual test schedule,
the validation criteria, and ensures the test is run. The plan is exercised at
least annually (within 365 days). Two exercise types are used: tabletop and
technical. The contingency plan for every application system must be exercised
at minimum via a tabletop; where an application system is covered by a
technical test of its supporting infrastructure, that technical test satisfies
the annual requirement.

#### Tabletop Testing

The primary objective of a tabletop is to confirm that the named responders can
carry out the notification and activation procedures correctly and promptly.
Tabletop methodology follows the contingency-plan exercise guidance in the
**CMS Risk Management Handbook, Volume 2** as an established external
methodology.

> *[Reviewer, M. Dubois, 2025-03: CMS IRM is a US federal publication. We
> should adopt ISO 22301 exercise guidance or an Australian equivalent (HB 292)
> before the next review — flagged for the BCDR working group.]*

Exercises include, but are not limited to:

* A simulated specific crisis, to validate coordinated and timely response.

#### Simulation and Technical Testing

The objective of the technical test is to confirm that data storage and
recovery processes can function at the standby region to deliver system
capabilities within the RTO/RPO targets. Technical testing includes, but is not
limited to:

* Restore from the cross-region backup;
* Fail compute and storage to the standby region per SOP-BCDR-001;
* Validate application functionality against the recovery test suite.

### Work Site Recovery

If a Tessera facility is unavailable due to a disaster, staff work from home or
relocate to a secondary site with Internet access until the affected facility
is restored. Physical recovery is performed by the facilities management firm
under contract with Tessera, coordinated by the Facilities Manager and/or the
site lead.

Tessera's engineering and operations teams can work from any location with
Internet access and do not depend on an office connection.

### Application Service Event Recovery

Tessera publishes a status page giving tenants real-time updates on the state
of each service, updated as an event unfolds. A root-cause analysis (RCA) is
made available to affected tenants on request after the event.

Event severity bands:

#### Short (hours)

* A short delay in service.
* Tessera monitors the event and determines the course of action; escalation as
  required.

#### Moderate (days)

* A modest delay; in-flight processes may need to be restarted.
* Tessera monitors and escalates as required.
* Tessera notifies tenants of the delay and posts updates to the status page.

#### Long (a week or more)

* A prolonged delay; in-flight processes may need to be restarted.
* Tessera monitors and escalates as required; executive and tenant comms
  cadence increases.
* Tessera notifies tenants and posts updates to the status page.

### Production Environments and Data Recovery

Production data is synchronised across multiple S3 buckets in the primary AWS
region (ap-southeast-2), replicated to the cross-region standby, and backed up
to AWS Glacier for long-term retention. Where data must be recovered, it is
restored from the cross-region replica or, in the worst case, from Glacier held
in a separate AWS account and geography.

Worst-case assumption: one production environment suffers complete data loss.
The account is rebuilt from code (infrastructure-as-code and application
artefacts) and data is restored from the cross-region backup or Glacier.

Recovery of production environments and data follows the procedures above and
the backup and recovery section of [Data Management](data_mgmt.md#cp-data-backup).
