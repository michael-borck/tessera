---
title: "AWS CloudTrail Export"
categories: ["Logs", "CloudTrail", "Data Breach"]
---

AWS CloudTrail events exported for the period **20-02-2025 to 27-02-2025**
(breach window for `TSR-INC-2025-031`). Principals and account identifiers have
been redacted. Events are shown in UTC; Perth local time is UTC+8.

> **SAMPLING NOTE:** This is an analyst-curated extract. The full CloudTrail lake
> contains ~2.4M events for this window; only events relevant to the
> access-revocation and egress analysis are shown.

```
2025-02-20T03:12:47Z  AssumeRole            arn:aws:iam::REDACTED:role/TesseraPlatformReadOnly   userId=AROA****7Q3F  srcIP=54.x.x.x         "Key AKIA****7Q3F (access-key-id) used"
2025-02-20T03:12:48Z  GetCallerIdentity     userId=AROA****7Q3F                                     srcIP=54.x.x.x         userIdentity.type=AssumedRole
2025-02-20T03:14:02Z  ListBuckets           userId=AROA****7Q3F                                     srcIP=54.x.x.x
2025-02-21T07:41:19Z  ConsoleLogin          userId=AROA****7Q3F                                     srcIP=185.x.x.x        response=Success  MFA=NOT_USED
2025-02-21T07:42:33Z  GetBucketAcl          bucket=tessera-tenant-uploads-REDACTED                  userId=AROA****7Q3F   srcIP=185.x.x.x
2025-02-21T07:43:10Z  GetObject             bucket=tessera-tenant-uploads-REDACTED  key=tenants/northbridge/exports/2024Q4.csv   userId=AROA****7Q3F   bytes=4823119
2025-02-22T01:05:55Z  GetObject             bucket=tessera-tenant-uploads-REDACTED  key=tenants/acmeco/contacts.json             userId=AROA****7Q3F   bytes=2210988
2025-02-22T01:06:02Z  GetObject             bucket=tessera-tenant-uploads-REDACTED  key=tenants/acmeco/contacts-2.json           userId=AROA****7Q3F   bytes=1988445
2025-02-23T19:27:41Z  GetObject             bucket=tessera-tenant-uploads-REDACTED  key=tenants/meridian/profiles.csv            userId=AROA****7Q3F   bytes=9120557
2025-02-23T19:28:03Z  ListObjectsV2         bucket=tessera-tenant-uploads-REDACTED                  userId=AROA****7Q3F   srcIP=185.x.x.x
2025-02-24T22:10:14Z  GetObject             bucket=tessera-tenant-uploads-REDACTED  key=tenants/vividleaf/members.parquet        userId=AROA****7Q3F   bytes=15423001
2025-02-24T22:41:57Z  GetObject             bucket=tessera-tenant-uploads-REDACTED  key=tenants/vividleaf/members-2.parquet      userId=AROA****7Q3F   bytes=14988220
2025-02-24T23:02:31Z  DETECTION-ANOMALY     GuardDuty finding:Tessera:Exfiltration/S3               severity=High         resource=tessera-tenant-uploads-REDACTED
2025-02-25T00:48:12Z  DisableKey            access-key-id=AKIA****7Q3F                              actor=SecurityOps/I.Ferreira   "Containment - credential revoked"
2025-02-25T10:02:55Z  AssumeRole            userId=AROA****7Q3F  ERROR=InvalidClientTokenId  srcIP=185.x.x.x   "Subsequent attempts fail - key disabled"
2025-02-27T09:30:00Z  DeleteAccessKey       access-key-id=AKIA****7Q3F                              actor=SecurityOps      "Final cleanup post-incident"
```

> **EVIDENCE NOTE (leaver-revocation test):** The access key `AKIA****7Q3F` is
> attributable to a contractor whose engagement ended **2025-01-09**. The key was
> first used in this extract on **2025-02-20** — approximately **42 days after
> termination** — and was not disabled until **2025-02-25**, ~47 days after
> termination. Cross-reference the IAM revocation log
> (`iam_revocation_log.md`) and the HR leavers dataset (`tessera-hr-leavers.csv`,
> row C-2041).

> **STALE REFERENCE:** The `srcIP=54.x.x.x` for the first AssumeRole resolves to
> an AWS NAT range, consistent with the key being exercised from another cloud
> workload rather than an end-user device — an indicator the key had been
> harvested and automated.
