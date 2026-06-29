---
title: "Transcript of interview with CISO"
categories: ["Security Management", "Access Control", "Vulnerability Management"]
---

Auditor: Thanks for taking the time. As part of the ISO/IEC 27001:2022
certification-readiness audit I'd like to talk through how Tessera manages
access controls. Could you walk me through the key controls?

CISO: Access is role-based and federated through the identity provider, with
least privilege scoped at the AWS IAM layer. The application tier runs under
narrow roles and connects to the data tier under a tenant-aware identity, so
there are no broad standing privileges in the hot path. We revoke on
termination through the joiner/mover/leaver workflow within 24 hours.

Auditor: Are there established procedures for provisioning and deprovisioning?

CISO: Yes. Onboarding follows an approved role profile in the service-management
tool, and offboarding is triggered by the Head of People and actioned against a
checklist. Access requests outside a profile need a named approver, so there's
an artefact behind every grant.

Auditor: How often do you review accounts and permissions for unauthorised or
dormant access?

CISO: We run automated stale-account and key-last-used reports monthly, and the
high-risk systems go through a quarterly recertification. I'd be straight with
you: the recertifications run on schedule, but the quality of the attestations
depends on how closely the reviewers actually look. That's on my list to
tighten.

Auditor: Let's move to secure configuration for the platform. What's the
baseline?

CISO: CIS-hardened base images, rebuilt on a schedule and enforced through SSM
State Manager, with Config rules flagging drift. The infrastructure is
Terraform, peer-reviewed and applied through CI, so configuration is a reviewed
artefact rather than a console action.

Auditor: Vulnerability management — how do you scan and prioritise patching?

CISO: We scan the fleet weekly. Critical and high findings are targeted within a
fortnight once a fix is validated, and the container tier inherits patching
through base-image rebuilds and redeployment. Container and dependency scanning
run in the pipeline as a gate.

Auditor: How do you protect data at rest and in transit?

CISO: KMS-managed keys for data at rest across Aurora, the object stores and the
secrets tier; TLS 1.2 or better on every hop, including the calls to our
third-party model vendor. Non-production datasets are de-identified.

Auditor: Physical security for your sites?

CISO: Badge access, CCTV and alarm monitoring at Perth, Sydney and Malaga, with
visitor escort and sign-in enforced. We don't operate a data centre — the
platform is on AWS — so the physical perimeter that matters to us is the cloud
provider's, which we rely on under the shared-responsibility model.

Auditor: Backup and recovery for critical systems?

CISO: Aurora continuous backups and automated snapshots, with restore tested
quarterly. The cross-region failover is the honest caveat: the standby region
exists, but the cross-region replica that would make failover lossless is still
being commissioned, so I'm not claiming a validated RTO today.

Auditor: How do you evaluate risk when adopting cloud services or vendors?

CISO: Third-party risk assessment against data sensitivity, access needs and the
vendor's own attestations — a SOC 2 report, typically. Security terms are in the
contract, and cloud deployments follow the secure-architecture guidelines and
the shared-responsibility mapping.

Auditor: How do the security, IT, HR, legal and facilities functions
coordinate?

CISO: We have cross-functional security liaisons and a standing meeting cadence.
I meet each executive one-on-one regularly, and policy and control decisions go
through the Executive Risk Committee so there's a single accountable forum.

Auditor: What mechanisms exist for security teams to escalate?

CISO: Anyone can come to my office directly, and there's a tracked queue for
escalations and risks that keeps a record when something can't be resolved in
conversation. Material items go to the Executive Risk Committee for visibility.

Auditor: How are conflicts between business objectives and security priorities
resolved?

CISO: We try to enable the business securely rather than block it. Where there's
a genuine tension we do the risk assessment jointly, put the trade-offs in
business terms, and either add a compensating control or take a documented risk
decision at the right level. The February incident sharpened this — we're now
quicker to insist on the structural fix rather than a workaround, and the
ISO/IEC 27001:2022 programme is the accountability structure for seeing those
through.
