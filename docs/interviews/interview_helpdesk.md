---
title: "Transcript of interview with Help Desk"
categories: ["Operational Security", "Incident Response", "Training"]
---

Auditor: I'd like to understand the help desk's part in information security.
How are user security incidents and requests handled?

Help desk: We work off a tiered set of runbooks in the service-management tool.
Standard requests — access, software, password resets — follow defined flows.
Anything that looks like a security event is triaged to the security team
through a dedicated queue rather than staying in the general pool.

Auditor: How are access requests and provisioning changes managed?

Help desk: Joiners, movers and leavers come through the workflow the Head of
People raises. We provision against an approved role profile, so a new starter
gets the bundle attached to their role and nothing ad hoc. Anything outside a
profile needs a named approver on the ticket.

Auditor: What verification do you do for password resets or account unlocks?

Help desk: Resets go through the identity provider's self-service flow first.
Where someone has to call us, we verify identity against the records the Head
of People maintains before we touch the account. Privileged accounts aren't
reset at the desk at all — those go to the infrastructure team and are
witnessed.

Auditor: Good. How does the team stay current on policy?

Help desk: We sit in on the security team's monthly briefing and the runbooks
are versioned in the knowledge base, so when something changes the article is
updated and flagged. New starters shadow for their first fortnight before
taking live tickets.

Auditor: What role do you play in user awareness?

Help desk: A fair bit of it is in the moment — when someone reports a suspicious
email we use it as a coaching opportunity rather than just closing the ticket.
We also feed the patterns we see back to the security team so the awareness
campaigns stay relevant.

Auditor: How are the help-desk tools themselves secured?

Help desk: Least privilege on the service-management tool, MFA on every help-desk
account, and session recording on anything that touches administrative
functions. The endpoints are managed and encrypted like the rest of the fleet.

Auditor: What about confidential reporting or whistleblowing?

Help desk: There's a separate channel that bypasses the queue entirely and goes
to compliance and legal. People can use it anonymously, and we point users to
it rather than handling sensitive disclosures through a normal ticket.

Auditor: Where could the help desk align better with the security programme?

Help desk: More structured cross-training would help — we see the sharp end of
policy in a way the security team doesn't, and a regular working session would
close that loop. The joiner/leaver timing is also worth a look: we revoke on
the date People give us, which is sound, but only if that date is accurate and
on time.

Auditor: Do you take part in security exercises?

Help desk: We're included in the annual incident simulation, mainly around
phishing and account-takeover scenarios. It's useful, though it tends to test
the technical response more than the front-desk judgement calls.
