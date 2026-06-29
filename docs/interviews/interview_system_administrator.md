---
title: "Transcript of interview with System Administrator"
categories: ["IT Management", "Security Architecture", "Access Control"]
---

Auditor: Thanks for making time. As part of the ISO/IEC 27001:2022 audit I'd
like to talk through how you harden and run the platform's systems. Could you
walk me through your configuration baseline?

SysAdmin: We build from CIS-hardened base images — the Amazon Linux and
PostgreSQL golden AMIs are rebuilt monthly and picked up by the ECS task
definitions and the few EC2 hosts we still run. Terraform and SSM State Manager
enforce the baseline, so drift gets flagged rather than just left.

Auditor: How do you keep that consistent, and how do you know when something
has drifted?

SysAdmin: SSM reports compliance against the baseline continuously, and we have
Config rules that mark non-compliant instances. The catch is that we treat the
output as information, not enforcement — a non-compliant host is flagged, but a
change ticket can override it. That's a judgement call we'd be happy to be
challenged on.

Auditor: That's a useful answer. I'm here for an open discussion; if I see a
gap I'll raise it with you rather than springing it. Let's move to patching.

SysAdmin: Sounds fair. Critical and high patches are bundled into a fortnightly
window after they've run through the staging account. We lean on SSM Patch
Manager for the EC2 fleet, and the container base images are rebuilt on a
schedule so the application tier inherits patching through redeployment rather
than in-place updates.

Auditor: What about secrets and keys — how are they handled day to day?

SysAdmin: Application secrets live in Secrets Manager and Parameter Store and
are fetched at runtime through the task role. We've been moving away from
static IAM access keys for some time; where they still exist they're meant to
be short-lived and rotated. I'd be overstating it if I said there were none
left — that's something we're actively closing off.

Auditor: I appreciate you flagging that. How do you control privileged access?

SysAdmin: Administrators go through the identity provider with MFA and then
assume a scoped role through SSO, with just-in-time elevation for anything
sensitive. Break-glass accounts live in the vault and every use pages the
on-call engineer.

Auditor: And monitoring and logging?

SysAdmin: CloudTrail is on for all accounts, VPC Flow Logs are published, and
the application logs land in CloudWatch and our SIEM. GuardDuty covers the
identity and credential-exfiltration findings. Whether the alerting on the
management-plane roles is tuned correctly is something the February incident
made us revisit.

Auditor: How do you track and authorise system-level change?

SysAdmin: Everything goes through the change-management board for the
production account. Infrastructure changes are pull requests against the
Terraform repos, peer-reviewed and applied through the pipeline, so there's a
reviewed artefact behind every change.

Auditor: Lastly, disaster recovery — what does that look like for you?

SysAdmin: Aurora snapshots run on the automated schedule, and we've a declared
standby region. I should be honest, though: the cross-region failover is still
being commissioned, so I wouldn't want to claim a tested four-hour RTO today.

Auditor: Are there places where operations and security pull in different
directions?

SysAdmin: Occasionally, mostly around legacy pieces where a control would cost
availability. We tend to work it out jointly with the security team and accept
the residual risk through the change board rather than working around it.

Auditor: Any gaps in how the sysadmin and security teams share knowledge?

SysAdmin: A lot of it is still informal — tickets and Slack. More structured
cross-training would help, and we've started pairing on the segmentation work,
which is a good forcing function.
