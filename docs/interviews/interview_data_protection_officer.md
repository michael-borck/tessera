---
title: "Transcript of interview with DPO"
categories: ["Privacy", "Data Protection", "Compliance"]
---

Auditor: Thanks for sitting down. I'd like to understand Tessera's data
protection strategy. Could you give me an overview of the privacy framework you
operate under?

DPO: The governing regime is the *Privacy Act 1988* (Cth) and the Australian
Privacy Principles. As an Australian entity holding personal information of
Australian individuals, that's our primary frame; the Notifiable Data Breaches
scheme is the part that gets exercised most often. We layer contractual
obligations on top for tenants, and we apply the GDPR only where we have EU
clients whose data is in scope.

Auditor: How do you perform data discovery and classification?

DPO: Information owners classify assets against the four-tier scheme in the data
classification policy. We maintain a data map of what personal information we
collect and where it flows, and personal information is tagged so it's visible
downstream.

Auditor: How is access to personal information controlled?

DPO: Role-based access through the identity provider, scoped to the tenant
context the application carries. Data at rest is encrypted under KMS and in
transit under TLS, and analytics datasets are de-identified and minimised
before use.

Auditor: That covers the main points. I'm running this as a collaborative
discussion — if I find something that looks like non-conformance I'll raise it
with you to clarify before I finalise anything. Does that suit?

DPO: It does, thank you. I'd rather we worked through things openly.

Auditor: How do you manage retention and secure disposal?

DPO: Retention is driven by the schedule — legal and operational hold periods
per data type. Digital disposal is cryptographic erasure on the KMS-backed
assets and secure wipe on endpoints; physical material is shredded under the
facilities process.

Auditor: How do you run privacy impact assessments for new initiatives?

DPO: A privacy impact assessment is a required gate in the project process. It
identifies the personal information involved, the APPs in play, the risks, and
the controls, and it has to be signed off before launch. The aim is to catch
issues at design time, not after go-live.

Auditor: And security risk assessments with a data-protection lens?

DPO: The security team and I run these together, at minimum annually for the
high-risk processing and whenever a material change lands. We work the findings
into the risk register and the treatment plan.

Auditor: How do you ensure third parties and processors meet your standard?

DPO: Contracts carry the privacy and security terms, and higher-risk vendors
complete an assessment and provide evidence — a SOC 2 report, typically — which
we validate rather than take at face value.

Auditor: Could you explain the breach response plan and how it's tested?

DPO: The NDB playbook governs privacy-affected incidents end to end — triage,
the 72-hour assessment target, the serious-harm test, and notification to the
OAIC. We tested the process in February on a real incident, and it held up
well on the notification side. The preventive side is a separate conversation.

Auditor: What privacy training exists for staff?

DPO: New starters complete privacy and data handling on induction, and everyone
retakes it annually. We push targeted refreshers off the back of incidents and
near-misses so the training stays tied to things that have actually happened.

Auditor: How do you handle it when other teams push back on data-protection
requirements?

DPO: I go to the responsible executive and frame it in terms of regulatory
exposure and the harm to individuals, which usually lands. It rarely needs to
go further than that, but escalation through the Executive Risk Committee is
available if it does.

Auditor: How are data-protection responsibilities communicated across the
business?

DPO: The policy sets out the per-role obligations, and I run sessions with line
managers and data owners so they can carry it into their teams. The
accountability sits with the owners; my role is to make the expectations clear
and to check they're being met.

Auditor: How does the privacy function work with Legal and Compliance?

DPO: We share oversight of data protection. Legal advises on privilege and
contractual exposure, Compliance owns the register and the regulator-facing
record, and I hold the privacy judgement. On an incident we work as one team
rather than three handoffs.
