---
categories:
- IT Management
- Security Architecture
- Operational Security
description: Describes the security architecture and operating model that underpin
  the Tessera platform and internal environment.
title: Security Architecture and Operating Model
---

|              |                                     |
|--------------|-------------------------------------|
| **Title**    | Security Architecture and Operating Model |
| **Doc#**     | POL-ITMA-026                        |
| **Version**  | 1.0                                 |
| **Date**     | 07-06-2023                          |
| **Owner**    | CISO (I. Ferreira)                  |
| **Approved By** | CTO (S. Qureshi)                |
| **ISO/IEC 27001:2022** | A.8 — Reference controls (architecture) |

This document describes the security architecture and operating model that
underpin the Tessera platform and our internal environment. It is written for
engineers, operations and auditors: a working description of how the platform is
built and run, not a marketing statement. The detailed multi-tenant VPC, KMS and
IAM design — including tenant isolation and the management-plane / data-plane
separation — is shown in the cloud architecture diagram
(docs/support/architecture_diagram.qmd).

## Policy Statements

Tessera requires that:

(a) The security program and platform are designed and operated against the
following objectives:

- data-centric, cloud-first;
- assume compromise — never trust, always verify;
- least privilege and defence in depth;
- no single point of compromise;
- automate wherever it removes human error, and prefer the simpler design;
- make secure behaviour the easy behaviour.

(b) Security is treated as a first-class requirement in platform design and
product development, not a downstream gate.

## Controls and Procedures

### Security principles

#### (1) Data-centric model and zero-trust architecture

Tessera's design is data-centric. Rather than relying on a network perimeter, we
put narrow controls around specific data and assets so that access decisions are
granular and explicit. The guiding rule is "never trust, always verify": no
entity — user, device, application or packet — is trusted by default, regardless
of where it sits relative to the corporate network. Authorised entities are
expected to do only what they are authorised to do, and that expectation is
enforced rather than assumed.

In practice this means: (almost) no internal network and (almost) 100% cloud;
segregation enforced by policy; and individually secured devices with no
production access by default.

#### (2) Minimal infrastructure and short-lived processes

We extend zero trust with a minimal-infrastructure approach, using managed cloud
services wherever they reduce our own attack surface. Cloud services expose rich
APIs that let us integrate and automate security operations, and turning off
services we are not using removes always-on attack surface. Short-lived,
purpose-bound processes reduce the window in which a compromised credential is
useful.

In practice: no standing administrative or broad network connectivity into
production; processes are short-lived and torn down after use; minimal
persistent attack surface.

#### (3) Least-privilege temporary access

We design on the assumption that a compromise can happen at any time, to any
device, with little warning. Access to production and to sensitive data is
closed by default and granted on demand, for a defined purpose and a short
window, protected by strong multi-factor authentication. No single credential
should be "the keys to the kingdom" — compromise of one user, device or key must
not cascade into broad compromise. This is why, for example, an administrator
credential cannot, by itself, reach all systems and data in the environment.

Secrets — access keys, service credentials, SSH keys — are stored in a managed
secrets store, rotated, and scoped to the narrowest role that does the job. The
February 2025 incident (TSR-INC-2025-031), in which a long-lived AWS access key
leaked through a misconfigured public repository and reached tenant data, is the
reference case for why long-lived keys must never be committed to source
control.

#### (4) Immutable builds and deploys

The Tessera platform is built as a set of small services that can be built and
deployed independently. A build is validated in lower, isolated environments
before it reaches production, and once validated it is deployed immutably — the
artefact that was tested is the artefact that runs. Infrastructure — database
schemas, buckets, load balancers, DNS — is described as code and deployed through
the same pipeline. Infrastructure-as-code is a prerequisite for repeatable,
low-touch deployments and for the audit trail from commit to production.

#### (5) End-to-end data protection

Tenant data is encrypted in transit and at rest, with keys held in AWS KMS under
tight IAM policy. Internal staff do not have standing access to tenant data in
production; where access is genuinely required for support, it is requested,
approved, logged and time-boxed. Tenant data is used only to deliver the
tenant's service and is never used to train shared models or sold onward.

#### (6) Strong but usable access

Authentication uses standards-based protocols — OAuth 2.0, OpenID Connect and
SAML — with multi-factor authentication and fine-grained, attribute- or
role-based authorisation. **Auth0** is the identity provider for the platform
and for workforce single sign-on.

#### (7) Watch everything, including the watchers

Visibility is the precondition for detection. We inventory assets, log events,
run vulnerability and penetration testing, and monitor production continuously.
Logging is redundant and tamper-resistant so that the systems doing the watching
are themselves watched. The goal is to move manual detection effort into
automated correlation as the platform grows.

Tessera consumes threat intelligence from **AusCERT** and the **Australian Cyber
Security Centre (ACSC)**, and participates in sector information sharing, to
stay current on attacker tooling and methodology.

#### (8) Centralised, automated operations

Where it is sound to do so, we express policy and compliance requirements as
code so they are enforced rather than asserted — for example, endpoint baselines
as configuration management, and production access policy as AWS IAM in
Terraform. Centralising event aggregation and control orchestration is what lets
a small team run detection and response across a cloud-native estate.

#### (9) Usable security

A control that is not used provides no protection. We favour simple, practical
controls, publish standards openly so the whole organisation can adopt them, and
treat security as part of the engineering culture rather than a separate
function. Security awareness is run regularly and kept short and relevant; the
test of a control is whether people actually use it.

#### (10) Assessed and certified

Compliance and security are not the same thing, but Tessera pursues both: we
maintain alignment to ISO/IEC 27001:2022, work to the ASD Essential Eight, and
subject the platform to independent assessment and periodic penetration testing.

### Security architecture

Tessera's security architecture sits on three environments: the **AWS cloud**
(the platform), **DevOps** (build and deploy), and **workforce / end-user
computing**.

The detailed network, VPC, KMS and IAM design — including tenant isolation and
the management-plane / data-plane separation — is documented in the cloud
architecture diagram (docs/support/architecture_diagram.qmd), maintained by Cloud
Infrastructure.

#### Cloud architecture

- Designed for the cloud, using a true multi-tenant architecture.
- Deployed into private subnets of a Virtual Private Cloud (VPC) in **AWS Sydney
  (ap-southeast-2)**, with cross-region standby.
- Tenant isolation and key management enforced through VPC design, KMS and IAM
  policy.
- AWS's own certifications and testing provide assurance about the underlying
  service.

#### Compute model

Tessera uses the full range of AWS compute building blocks, choosing the
smallest sufficient unit for each workload:

- **Virtual machines** (EC2), launched from an Amazon Machine Image (AMI).
- **Containers** — a packaged application and its libraries without the host OS,
  simpler to scale, typically run as a Docker image.
- **Functions** (Lambda) — just the application code in a prebuilt runtime,
  scaled automatically by AWS and short-lived by design. Where a workload suits
  it, we prefer functions: they deploy quickly, scale on demand, and minimise
  attack surface because they are not long-running.

*(I. Ferreira, note to self: the container paragraph above predates the Fargate
migration — refresh it next cycle so it reflects what actually runs.)*

### Metrics, measurement and continuous monitoring

A set of metrics tracks the adoption and effectiveness of the security program.
A security scorecard is produced each month and reviewed by the Security
Committee. Scorecards and the underlying asset and event data are available in
the security operations tooling.

### Quality of service

Service quality is a function of the architecture above — confidentiality,
integrity and availability treated together. Availability is maintained through
a scalable cloud design, real-time monitoring, and the recovery procedures in
the BCDR policy. Development follows the DevOps practices set out in the Software
Development Process. Customer-facing status is published on the status page.

> *[C. Hayes, margin note: the "monthly" scorecard cadence above disagrees with
> the SOC metric pack, which still produces it quarterly. Pick one before the
> Stage 1 audit — I. Ferreira to confirm.]*

### Architecture diagrams

Detailed architecture diagrams of the in-scope networks, endpoints and
applications, and of security operations, are developed and maintained alongside
the cloud architecture diagram (docs/support/architecture_diagram.qmd).
