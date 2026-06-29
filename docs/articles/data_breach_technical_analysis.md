---
title: "The Tessera breach: when MFA and encryption aren't enough"
categories: ["Technical Analysis", "Data Breach"]
---

**Publication:** CloudNative Security Review
**Date:** 9 March 2025
**Author:** Dr Alex Reynolds, cloud security practitioner

---

**Introduction**

The Tessera incident (TSR-INC-2025-031) is an instructive case because the
controls most organisations point to first — multi-factor authentication and
encryption — did exactly what they were supposed to do, and the breach happened
anyway. Around 14,000 tenant records were exposed after a long-lived AWS access
key committed to a public repository was used to read data across an
unsegmented network path. This article walks through the technical anatomy and
the lessons that apply to any multi-tenant platform.

---

**1. A static key, not a stolen login**

The entry point was a long-lived AWS access key associated with a
management-plane role. Unlike a phished password, a static access key needs no
human to type it in and no second factor to satisfy — it is a bearer
credential. Once it was committed to a repository that had been configured as
public, it was simply a matter of time before it was found.

The key had not been rotated since it was issued, and its role carried broad
cross-service permissions. Both are classic drift: a credential created for a
specific task that outlives the task and accumulates scope.

**What would have helped:** short-lived credentials obtained via the instance or
task metadata service and assumed through SSO; pre-commit secret scanning that
rejects a push containing a key; and an automatic rotation or detection on any
key older than a defined threshold.

---

**2. The segmentation gap that did the damage**

The harder failure was architectural. The key's role sat in the management
plane, but it could reach the tenant data store without traversing an enforced
boundary. In a properly segmented design, a management-plane credential should
not be able to issue tenant-scoped reads at all — the control plane and the data
plane are isolated, and tenant access is mediated by the application tier under
a narrow, tenant-scoped role.

Here, the absence of that boundary turned a leaked key into a tenant-data
incident. The row-level security policies Tessera relies on for tenant
isolation are a property of authenticated application queries; they are not a
defence against a privileged role reading directly across the boundary.

**What would have helped:** explicit control-plane / data-plane isolation,
least-privilege role scoping so that management roles cannot read tenant data,
and network controls that deny the management plane a path to the data tier.

---

**3. Detection, and the egress signal**

The breach was detected when GuardDuty raised an `UnauthorizedAccess:IAMUser`
finding against the exposed key, corroborated by CloudTrail `AssumeRole` events
from an unknown IP and VPC Flow Logs showing egress from the application subnet.
Containment took a further 48 hours, during which the key was rotated, sessions
revoked, and the repository secured.

The detection lag — an estimated five days of reads before the alert was
actioned — is the part worth examining. The signals were present; the alert
routing for management-plane roles was not tuned to treat external `AssumeRole`
as high priority. Cloud-native detection lives or dies on which findings a
human actually sees.

---

**Conclusion**

The Tessera breach is a reminder that the headline controls are necessary but
not sufficient. Encryption held. MFA held. The incident was enabled by a static
key that should not have existed, a secret that should never have been
committed, and a segmentation boundary that was never drawn. For multi-tenant
operators, the takeaway is to design as if any single credential will
eventually leak — because the controls that matter then are the ones that limit
what the leaked credential can reach.
