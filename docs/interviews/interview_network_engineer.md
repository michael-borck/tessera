---
title: "Transcript of interview with Network Engineer"
categories: ["Network Management", "Security Architecture", "Operational Security"]
---

Auditor: I'd like to understand the network controls around the platform. Could
you give me an overview of the architecture?

Network Engineer: The platform runs inside a VPC in `ap-southeast-2`, split into
public subnets for the Application Load Balancer and private subnets for the
application and data tiers. There's no direct internet path to the application
or database hosts — traffic terminates at the ALB and is forwarded over TLS.
We mirror that in `ap-southeast-1` as the standby region.

Auditor: How is east-west traffic controlled?

Network Engineer: Security groups and network ACLs do the heavy lifting. The
application tier can talk to the Aurora cluster on the database port and
nothing else of consequence; the database tier has no outbound path to the
internet. Inter-subnet rules are scoped to the ports the services actually use.

Auditor: That's a clean baseline. How do you monitor for malicious activity on
the network?

Network Engineer: VPC Flow Logs are published to CloudWatch and the SIEM, and
GuardDuty covers the behavioural side — unusual `AssumeRole`, instance
credential exfiltration, that kind of finding. AWS Shield and the WAF sit in
front of the ALB and absorb or rate-limit volumetric and Layer 7 attacks.

Auditor: Good. I'm running this as an open discussion; if something looks like a
gap I'll raise it with you directly. Walk me through remote access.

Network Engineer: Workforce access is through the identity provider with MFA and
a zero-trust network access layer rather than a flat VPN into the VPC.
Administrators assume scoped roles via SSO; there's no standing route into the
data subnets. Site-to-site connectivity to our offices is encrypted and
mutually authenticated.

Auditor: How do you handle DDoS or flooding?

Network Engineer: Shield Standard is on everywhere and Shield Advanced sits in
front of the public endpoints. The WAF applies rate-based rules, and we've
tuned a few custom rules for the application's known abuse patterns.

Auditor: Vulnerability scanning and penetration testing?

Network Engineer: We run network-layer scans each quarter from outside and
inside, and there's an annual third-party assessment scoped with the security
team. Findings go into the risk register and are tracked to closure.

Network Engineer: One thing I'd want to be precise about: the boundary between
the management plane and the tenant data tier. The intended design is that
management roles can't reach tenant data directly — tenant reads go through the
application tier under a tenant-scoped role. In practice that segregation
wasn't fully enforced, and that's the gap the February incident exposed. The
fix is in flight but I wouldn't claim it's closed yet.

Auditor: That's exactly the kind of thing I need to hear. Redundancy — what's
built in?

Network Engineer: Multi-AZ within the region for the ALB and Aurora, redundant
transit and NAT paths, and the standby region for the bigger events. Capacity
changes are scheduled to avoid customer impact.

Auditor: How do access issues between network and security get resolved?

Network Engineer: Anything that touches a security group or routing table goes
through a change ticket that the security team reviews. We meet fortnightly to
walk the rule base and prune anything stale.

Auditor: Do security concerns ever push back on a network change?

Network Engineer: Yes — the usual outcome is a compensating control, like an
additional guardrail or monitoring, rather than opening a path. It's a good
working relationship; the priorities don't always line up but we resolve it
together.
