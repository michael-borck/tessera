---
categories:
- Incident Response
- Privacy
- Compliance
description: |
    Notification to individuals whose personal information was exposed in incident TSR-INC-2025-031. In late February 2025 Tessera detected anomalous egress from its multi-tenant platform caused by a long-lived AWS access key exposed through a misconfigured public repository and an unsegmented path to tenant data.
title: "Notification to affected individuals — TSR-INC-2025-031"
---

**Subject:** Important security notice — your personal information

---

**Dear [Name],**

We are writing to let you know about a security incident at Tessera that may
have involved your personal information, and to explain the steps we have taken.
We are sorry for the concern this will cause, and we want to be straightforward
with you about what happened.

**What happened**

In late February 2025 we identified unauthorised access to data held on our
multi-tenant platform. Our investigation found that a long-lived access key used
by our management systems had been exposed through a source-code repository that
was incorrectly configured as public. Because the path between our management
systems and the data we hold for tenants was not fully segregated, that key was
used to read tenant records. We became aware of the activity through monitoring
that flagged unusual data leaving our environment.

**What information was involved**

The records that may have been read include personal and contact information held
on your behalf — your name, email address, telephone number, and account and
subscription details. We do not hold your payment-card details; card processing
is handled by a separate provider and was not affected. The information remained
encrypted while stored; the exposure arose from authorised reads by the
compromised key, not from our encryption failing.

**What we have done**

- We deactivated and rotated the exposed key and ended every session it had
  opened.
- We secured the repository, removed the credential from its history, and scanned
  all of our repositories for any other committed secrets.
- We put a network change in place to restrict that path to your data.
- We assessed the incident as an eligible data breach under the Notifiable Data
  Breaches scheme and notified the Office of the Australian Information
  Commissioner (OAIC) within our 72-hour target.

**What you can do**

- Watch for any unexpected contact or account activity that uses the details
  above, and be cautious of messages that refer to your Tessera account.
- If you reuse your Tessera password elsewhere, we suggest changing it and using
  a unique password for each service.
- You can contact your bank or telco if you notice anything unusual, and you are
  entitled to seek advice from a community legal service or the OAIC if you have
  concerns about how your information has been handled.

**For more information**

We have set up a dedicated line for people affected by this incident. You can
reach the response team at `1800 000 000` (business hours) or
`incident@tessera.locoensayo.org`, and our incident page at `tessera.locoensayo.org/incident`
will be kept up to date.

We take our responsibility for your information seriously, and we are making the
changes described above to prevent this happening again. Thank you for your
patience while we worked through it.

Sincerely,
Isabella Ferreira
Chief Information Security Officer
Tessera

---
