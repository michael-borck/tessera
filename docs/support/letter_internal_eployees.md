---
categories:
- Incident Response
- Internal Communications
- Security
description: |
    Internal note to the Tessera workforce on incident TSR-INC-2025-031, the late-February 2025 breach involving a long-lived AWS access key exposed through a misconfigured public repository and an unsegmented path to tenant data.
title: "Internal communication to the workforce — TSR-INC-2025-031"
---

**Subject:** Security incident TSR-INC-2025-031 — what happened and what we need from you

---

**Team,**

I want to give you a clear account of the security incident we have been working
through, and to set out what we need from you.

In late February we detected unusual data leaving the platform. We established
that a long-lived access key used by our management systems had been exposed
through a source-code repository that was configured as public. The key was then
used to reach tenant data across a path that should have been segregated but was
not. Around 14,000 tenant records were exposed over a number of days before our
monitoring flagged the egress. Containment took a further 48 hours. The
incident is logged as **TSR-INC-2025-031**.

**What you need to know**

- The exposure was a leaked static access key and an unsegmented network path —
  not a compromise of an individual's login. Please don't speculate about or
  name colleagues.
- The key has been rotated, sessions revoked, the repository secured, and an
  interim network change applied.
- We have notified the OAIC under the Notifiable Data Breaches scheme within our
  72-hour target, and affected tenants are being contacted.

**What we need from you this week**

- **Secrets check.** Run `tessera secret-scan` against any repository you own,
  internal or public. If it flags anything, do not rotate quietly — raise a
  ticket so we can check for misuse. No static access keys belong in code,
  configuration, or chat.
- **Repository hygiene.** Confirm that any repository you administer is private
  unless there is a documented reason for it to be public. The default is
  private.
- **Credentials.** If you hold a long-lived AWS access key, raise a ticket to
  move to short-lived credentials via single sign-on. We are phasing static keys
  out.
- **Reporting.** If you see egress, unexpected `AssumeRole` activity, or a key in
  a place it should not be, report it to `security@tessera.locoensayo.org` immediately.
  Early reports are never penalised.

**What comes next**

The corrective actions are being tracked against the Statement of Applicability,
and the segmentation work is the priority. There will be further detail as the
post-incident review closes out, and the ISO/IEC 27001:2022 certification work
will draw directly on the lessons from this incident.

Protecting tenant data is the whole company's job, not the security team's alone.
Thank you for the way people have pulled together on this.

Isabella Ferreira
Chief Information Security Officer
Tessera
