---
title: "Transcript of interview with DBA"
categories: ["Data Security", "IT Management", "Risk Assessment"]
---

Auditor: I'd like to understand how database security is handled here. Could you
give me an overview of the data tier?

DBA: The production data store is Aurora PostgreSQL, multi-tenant, serving all
tenants from a single cluster. Tenant isolation is enforced at the data layer
using row-level security policies keyed to the tenant context, so even a query
run with shared credentials can't return another tenant's rows. There's a
declared cross-region standby, though I'll come back to that.

Auditor: How is the cluster secured technically?

DBA: It sits in private subnets with no internet path. In-flight connections are
TLS 1.2 or better, and data at rest is encrypted under AWS KMS-managed keys.
Access is role-scoped; the application tier connects under a tenant-aware role,
and administrative access is through short-lived assumed credentials rather
than standing database users.

Auditor: Good. I'm aiming for a collaborative discussion — if I see a gap I'll
work through it with you rather than noting it cold. Shall we go on?

DBA: Appreciated — I'd rather hear it directly. Happy to keep going.

Auditor: How do you control and rotate database credentials?

DBA: The application's database credentials are generated and rotated through
Secrets Manager and fetched at runtime by the task role, so there are no static
passwords in configuration. Direct administrative shells are brokered through
the privileged-access tool with session recording.

Auditor: What controls do you have for monitoring database activity?

DBA: Query logging and RDS performance insights are on, and the logs are
shipped to the SIEM. We have a baseline of expected read and write patterns and
alert on anomalous volumes. I'd be honest that the anomaly thresholds are still
fairly rough — they catch a wholesale exfiltration but would miss a slow,
steady read.

Auditor: Could you explain your backup and recovery strategy?

DBA: Aurora's continuous backups and automated snapshots are the backbone, with
point-in-time restore tested quarterly. The cross-region story is the part I
flagged earlier: the standby region has a cluster, but the cross-region replica
that would make failover lossless is still being commissioned, so I wouldn't
claim a validated RPO today.

Auditor: What's your approach to patching and vulnerability management for the
data tier?

DBA: Engine upgrades are evaluated in the staging account first and applied in a
maintenance window. We track CVEs against the PostgreSQL engine and the
extensions we use, and we treat anything high or critical as a same-fortnight
item once a fix is available.

Auditor: How do you evaluate new data technologies before adoption?

DBA: Anything new goes through the architecture review board — capability,
security posture, supportability — and is configured to the hardening standard
before it touches production.

Auditor: Is there database-specific training for the team?

DBA: Yes, mostly vendor-led on hardening, encryption and logging, and the DBAs
hold the relevant certifications. Security is treated as part of the craft
rather than a separate concern.

Auditor: Any friction between database management and security controls?

DBA: The usual tension between availability and tighter controls. We work it
out case by case — selective encryption, tiered access — and where we can't
agree it goes to a risk decision rather than sitting unresolved.

Auditor: Is database activity monitoring effective for incident alerting?

DBA: For the loud signals, yes. As I mentioned, the thresholds are tuned for
high-volume events, which is exactly what served us in February. The quieter
patterns are a known gap we're tightening.
