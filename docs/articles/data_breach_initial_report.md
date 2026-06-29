---
title: "Cloud key leak exposes 14,000 records at Perth SaaS firm Tessera"
categories: ["Initial Report", "Data Breach"]
---

**Publication:** AUSCERT Threat Wire
**Date:** 3 March 2025
**Author:** Megan Thompson

**Tessera, the Perth-based multi-tenant software platform, has disclosed a data
breach affecting roughly 14,000 tenant records after a long-lived cloud access
key was found exposed in a public source-code repository.**

The company said the activity was picked up in late February when monitoring
flagged unusual data leaving its environment. In a statement, Tessera said the
exposed key had been used to read records held on behalf of its tenants across a
network path that should have been segregated from its management systems.

"An access key used by our management systems was exposed through a repository
that was incorrectly set to public, and it was then used to reach tenant data,"
said Isabella Ferreira, Tessera's Chief Information Security Officer. "We
rotated the key, secured the repository, and notified the Office of the
Australian Information Commissioner within our internal 72-hour target."

The records involved are understood to be personal and contact information —
names, email addresses, telephone numbers and account metadata. Tessera said it
does not store payment-card details, which are handled by a separate provider,
and that data at rest remained encrypted throughout.

What sets the incident apart from the credential-theft breaches that dominate
the headlines is the absence of phishing or a stolen login as the starting
point. According to people familiar with the investigation, the entry was a
static cloud credential committed to code, and the damage was amplified by the
lack of a hard boundary between the management plane and tenant data.

"That combination — a non-rotating key plus a missing segmentation boundary — is
exactly the failure mode that cloud-native operators are meant to design
against," said John Harper, a cloud security analyst at SecureNet Consulting.
"The identity layer and the encryption both held. The weak point was a leftover
static key and an over-trusting network path."

Tessera has begun notifying affected tenants and, through them, affected
individuals, and has stood up a dedicated contact line. The company said the
incident has accelerated its programme to remove static access keys entirely and
to complete control-plane isolation.

The Office of the Australian Information Commissioner has been notified under
the Notifiable Data Breaches scheme. Tessera said it does not yet have a full
figure for the financial impact but expects a "material" effect on the current
financial year.
