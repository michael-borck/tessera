---
categories:
- IT Management
- Security
- Compliance
description: |
  A plain-language summary of Tessera's security posture following the TSR-INC-2025-031 breach — where the platform is strong, where it was weak, and what the remediation programme is closing.
title: Security Posture Summary
---

|              |                                            |
|--------------|--------------------------------------------|
| **Title**    | Security Posture Summary                   |
| **Doc#**     | DOC-SEC-006                                |
| **Version**  | 1.1                                        |
| **Date**     | 06-03-2025                                 |

### Overview

Tessera operates a multi-tenant SaaS platform on AWS, serving more than 600
clients from offices in Perth, Sydney and Malaga. Security is treated as a
load-bearing part of how the platform is run, not a separate function. The
February 2025 breach (TSR-INC-2025-031) exposed a specific set of weaknesses
and has driven a focused remediation programme and the board's ISO/IEC
27001:2022 certification-readiness mandate. This summary sets out, honestly,
where the platform is strong and where it is still being fixed.

### Strengths

1. **Cloud-native by design.**
   - The platform runs in a VPC with public and private subnets; the
     application and data tiers have no direct internet path, and traffic
     terminates at the Application Load Balancer over TLS.
   - A multi-AZ deployment in the primary region and a declared standby region
     provide in-region redundancy and a regional recovery option.

2. **Tenant isolation at the data layer.**
   - Tenant separation is enforced in Aurora PostgreSQL through row-level
     security keyed to the tenant context, so a shared cluster serves all
     tenants without cross-tenant exposure under normal operation.

3. **Encryption everywhere.**
   - Data at rest is encrypted under AWS KMS-managed keys; data in transit uses
     TLS 1.2 or better on every hop, including calls to the third-party model
     vendor.

4. **Identity and least privilege.**
   - Workforce and tenant identities are federated through the identity provider
     with phishing-resistant MFA. Services run under narrow IAM roles, and
     privileged access is just-in-time through SSO.

5. **Cloud-native monitoring.**
   - CloudTrail, VPC Flow Logs and application logs are centralised, with
     GuardDuty covering identity and credential-exfiltration findings and a
     24×7 on-call rotation.

6. **Certified, and recertifying.**
   - Tessera holds ISO/IEC 27001 certification and SOC 2 Type II, and is working
     to ISO/IEC 27001:2022 certification-readiness, with the controls aligned to
     the ASD Essential Eight where applicable.

### Weaknesses exposed by TSR-INC-2025-031

1. **A long-lived static access key.**
   - A management-plane role carried a non-rotating access key with broad
     permissions, committed to a repository misconfigured as public. Static keys
     are being eliminated in favour of short-lived credentials obtained via SSO.

2. **Absent management-plane / tenant-data segmentation.**
   - The key's role could reach tenant data without traversing an enforced
     boundary. Control-plane / data-plane isolation is the priority remediation,
     tracked against A.8.22 in the SoA.

3. **No enforced pre-commit secret scanning.**
   - The committed credential was not caught at push time. Secret scanning is
     being enforced across all repositories, with private configuration as the
     default.

4. **Detection latency.**
   - The activity ran for an estimated five days before the GuardDuty finding
     was actioned. Alert routing for management-plane roles is being retuned, and
     an egress-baseline alert added to the application subnet.

5. **Unvalidated continuity targets.**
   - The cross-region failover assumed by the BIA and runbook is not yet
     provisioned; the RTO/RPO figures are benchmarks, not tested outcomes.

### Where the programme is focused

The remediation is tracked against the Statement of Applicability (DOC-SEC-003)
and the risk register (DOC-SEC-001): eliminate static keys, complete the
control-plane / data-plane segmentation, enforce secret scanning, retune
detection, and validate continuity. The certification-readiness work is the
accountability structure for seeing these through, and an honest posture summary
is part of that — the preventive controls failed in February, and the strength
of the notification response does not change that.
