---
categories:
- Risk Management
- Security
- Compliance
description: Tessera's risk assessment method, based on ISO/IEC 27005 and NIST SP 800-30, with the matrix and templates used to identify, analyse, evaluate and treat information security risks.
title: Risk Assessment Frameworks
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Risk Assessment Frameworks                 |
| **Doc#**     | DOC-RISK-002                               |
| **Version**  | 1.1                                        |
| **Date**     | 05-03-2025                                 |

This document sets out how Tessera assesses information security risk. The
method draws on ISO/IEC 27005 (information security risk management) and NIST
SP 800-30 (risk assessment), and is the engine behind the risk register
(DOC-SEC-001), the risk treatment plan and the Statement of Applicability
(DOC-SEC-003). It supports Clause 6.1 of ISO/IEC 27001:2022.

## Method

1. **Establish context.** Define the assessment scope and the assets within it;
   agree the risk criteria, including Tessera's risk appetite and tolerance.
2. **Identify risk.** For each asset, identify the threats that could act on it
   and the vulnerabilities they could exploit, alongside the controls already
   in place.
3. **Analyse risk.** Combine likelihood and impact to produce an inherent
   rating, then re-rate against the controls in place to give a residual
   rating.
4. **Evaluate risk.** Compare residual ratings against the risk criteria;
   prioritise what exceeds appetite.
5. **Treat risk.** Select a treatment — mitigate, transfer, accept or avoid —
   and assign an owner and a date.
6. **Monitor and review.** Reassess on a schedule and after material change or
   incident.

## Rating matrix

Likelihood and impact are each rated on a four-point scale. The rating bands
drive prioritisation and reporting to the Executive Risk Committee.

| Likelihood ↓ / Impact → | Low | Medium | High | Critical |
|---|---|---|---|---|
| Rare | Low | Low | Medium | Medium |
| Unlikely | Low | Medium | Medium | High |
| Possible | Medium | Medium | High | High |
| Likely | Medium | High | High | Critical |

## Working template

| Risk ID | Asset | Threat | Vulnerability | Controls in place | Likelihood | Impact | Residual | Treatment | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| RR-01 | Tenant data (Aurora) | Unauthorised access via leaked static credential | Long-lived access keys; absent control-plane/data-plane segmentation | Short-lived credentials (in progress); secret scanning (in progress) | Medium | High | Medium | Mitigate — eliminate static keys; complete segmentation | CISO | In progress |
| RR-02 | Tenant data | Cross-tenant exposure | Shared cluster failure of RLS | Row-level security; tenant-scoped roles | Low | Critical | Low | Mitigate (sustained) | Head of Engineering | Ongoing |
| RR-03 | Tenant data | Data loss or corruption | Backup failure | Aurora continuous backups; restore tests | Low | High | Low | Mitigate (sustained) | Cloud Service Ops | Ongoing |
| RR-05 | Platform egress | Delayed detection of exfiltration | Untuned alert routing | CloudTrail, GuardDuty, VPC Flow Logs, SIEM | Medium | High | Medium | Mitigate — retune management-plane alerts; egress baseline | CISO | In progress |

## Using the framework

The register is the live artefact; this document is the method behind it. New
risks are logged as they are identified — through threat modelling, vendor
assessments, audit findings or incidents — and walked through the analyse →
evaluate → treat → monitor cycle. TSR-INC-2025-031 is the clearest recent
example: a control gap surfaced by an incident became tracked risks (RR-01,
RR-05) with owners and treatment dates, rather than a one-off fix.

> **REVIEWER NOTE:** Several "residual" ratings in the register still reflect
> controls that are in progress rather than closed. A residual rating is only
> credible once the treating control has been substantiated; treat in-progress
> mitigations as not yet effective when reading the register.
