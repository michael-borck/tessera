---
categories:
- Education
- Communication
- Compliance
description: Key definitions used across the Tessera information security and privacy documentation, framed to the Privacy Act 1988 (Cth), the Australian Privacy Principles, and ISO/IEC 27001:2022.
title: Key Definitions
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Key Definitions                            |
| **Doc#**     | DOC-SEC-004                                |
| **Version**  | 2.0                                        |
| **Date**     | 05-03-2025                                 |

These definitions apply across the Tessera policy and support documentation.
The primary frame is the *Privacy Act 1988* (Cth), the Australian Privacy
Principles (APPs) and ISO/IEC 27001:2022. Sector-specific terms (for example,
health information under a sector scheme, or personal data under the GDPR) are
noted where relevant but are not Tessera's primary frame.

## Privacy and data protection

- *Personal information*: Information or an opinion about an identified
  individual, or an individual who is reasonably identifiable, whether true or
  not and whether recorded in material form or not — as defined in s 6 of the
  *Privacy Act 1988* (Cth).

- *Sensitive information*: A subset of personal information given heightened
  protection under APP 3, including health information, racial or ethnic origin,
  political opinions, religious beliefs, biometric and genetic information, and
  certain criminal information.

- *De-identification*: The process of removing or altering information that
  identifies a person, or reasonably allows them to be identified, so that the
  information is no longer personal information.

- *Australian Privacy Principles (APPs)*: The 13 principles in Schedule 1 of
  the *Privacy Act* that govern the collection, use, disclosure, storage and
  security of personal information.

- *Eligible data breach*: Unauthorised access to, unauthorised disclosure of,
  or loss of, personal information that is likely to result in serious harm to
  one or more individuals, where the risk cannot be prevented by remedial
  action. An eligible data breach is notifiable under the NDB scheme.

- *Notifiable Data Breaches (NDB) scheme*: Established by Part IIIC of the
  *Privacy Act* and administered by the Office of the Australian Information
  Commissioner (OAIC). Requires entities to notify the OAIC and affected
  individuals of eligible data breaches as soon as practicable.

- *Office of the Australian Information Commissioner (OAIC)*: The independent
  regulator for privacy and freedom of information at the Australian Government
  level.

- *Serious harm*: The multi-factor test used to assess notifiability under the
  NDB scheme, considering the kind and sensitivity of the information, whether
  it is protected, the circumstances of the breach, and the nature of the harm.

## Information security

- *Confidentiality, Integrity, Availability (CIA)*: The three security
  properties the ISMS is designed to preserve for information assets.

- *Information asset*: Anything that stores, processes or transmits Tessera or
  tenant information — data, systems, accounts, configurations, secrets and the
  services themselves.

- *Tenant*: A customer organisation whose data is held and processed on the
  shared Tessera platform, isolated from other tenants.

- *Threat*: A potential cause of an unwanted incident that may result in harm
  to an asset. Threats may be environmental (fire, flood, power), human
  (external attacker, insider, error), natural, or technological (system or
  software failure).

- *Vulnerability*: A weakness in an asset or control that a threat could
  exploit — for example, a static access key, an unsegmented network path, or
  unpatched software.

- *Risk*: The combination of the likelihood that a threat exploits a
  vulnerability and the impact on confidentiality, integrity or availability if
  it does.

- *Risk treatment*: Selecting and implementing controls to modify risk —
  mitigate, transfer, avoid, or accept — against Tessera's risk appetite.

- *Security incident*: An occurrence that actually or potentially compromises
  the confidentiality, integrity or availability of an information asset, or
  that constitutes a breach of policy. Examples include unauthorised access,
  unauthorised disclosure, malware, denial of service, and lost or stolen
  devices.

- *Breach (data breach)*: An unauthorised access to, disclosure of, or loss of
  personal or sensitive information. A breach that meets the eligible data
  breach criteria is notifiable under the NDB scheme.

- *Management plane*: The administrative layer used to operate, deploy and
  configure the platform — identities, roles, secrets, deployment tooling.

- *Control plane / data plane isolation*: The segmentation that keeps
  management-plane credentials and paths from reaching tenant data directly.

## Management system

- *ISMS*: The Information Security Management System operated to ISO/IEC
  27001:2022 — the policies, processes, controls and review cycles that govern
  how Tessera manages information security.

- *Statement of Applicability (SoA)*: The mandatory record of the Annex A
  controls selected for the ISMS, their implementation status, and the
  justification for inclusions and exclusions.

- *Annex A*: The catalogue of information security controls in ISO/IEC
  27001:2022, organised under the organisational, people, physical and
  technological themes.

- *ASD Essential Eight*: The Australian Signals Directorate's baseline of eight
  mitigation strategies, against which Tessera aligns its hardening.

- *Control*: A measure — preventive, detective or corrective — that modifies
  risk. Controls may be administrative, technical or physical.

- *Least privilege*: Granting an identity only the access required for its
  function, and no more.

## Roles

- *Workforce*: All Tessera employees and contractors whose conduct in the
  performance of work is under Tessera's direction, whether or not they are
  paid by Tessera.

- *Workforce member*: An individual within the workforce.

- *Restricted area*: A location where sensitive information or assets are
  stored, used or accessible, subject to physical access controls.

- *Vendor*: An external organisation providing products or services to, or
  processing data for, Tessera.

> **DRAFT NOTE:** This glossary was rewritten from a legacy HIPAA-oriented set
> of definitions. References to "PHI", "ePHI", "covered entity" and "business
> associate" have been removed; any surviving occurrences elsewhere in the
> policy suite should be treated as legacy and reported for correction.
