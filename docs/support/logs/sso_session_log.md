---
title: "SSO / IdP Session Log"
categories: ["Logs", "Identity", "Access Control"]
---

Identity provider (Auth0) authentication and session events for selected
identities, extracted for the access-revocation test (ISO/IEC 27001:2022 A.6.5)
and the breach window of `TSR-INC-2025-031`. User identifiers have been redacted.
Timestamps are UTC.

> **SAMPLING NOTE:** The tenant and workforce populations exceed 600 active
> identities. Only identities relevant to the leaver-revocation analysis and the
> breach window are shown.

```
2025-02-19T22:04:11Z  success    ss                    user=mwebb@tessera.locoensayo.org            conn=Username-Password-Authentication  ip=54.x.x.x     amr=["pwd"]                   device=unknown
2025-02-19T22:04:12Z  success    fe                   user=mwebb@tessera.locoensayo.org            client=Tessera AWS Console CLI         ip=54.x.x.x     scope=openid profile email   "Token issued for AWS federated role"
2025-02-19T22:04:14Z  success    refresh_token        user=mwebb@tessera.locoensayo.org            ip=54.x.x.x                                                           "Silent refresh - no MFA challenge"
2025-02-20T03:12:46Z  success    fe                   user=mwebb@tessera.locoensayo.org            client=Tessera AWS Console CLI         ip=54.x.x.x     "Federation exchange -> AssumeRole (see CloudTrail AKIA****7Q3F)"
2025-02-21T07:41:18Z  success    ss                    user=mwebb@tessera.locoensayo.org            ip=185.x.x.x                          amr=["pwd"]     device=unknown               "MFA NOT presented - MFA-bypass grant on legacy app"
2025-02-23T19:27:30Z  success    refresh_token        user=mwebb@tessera.locoensayo.org            ip=185.x.x.x                                                          "Silent refresh"
2025-02-24T22:09:55Z  success    refresh_token        user=mwebb@tessera.locoensayo.org            ip=185.x.x.x                                                          "Silent refresh"
2025-02-25T00:47:50Z  revocation user_session_blocked  user=mwebb@tessera.locoensayo.org            actor=SecurityOps/I.Ferreira          "Session revoked post-incident"
2025-02-25T00:48:00Z  revoke_grants               user=mwebb@tessera.locoensayo.org            "All refresh tokens revoked"

2024-08-02T09:10:00Z  leaver_event               user=hpierce                          source=HR-ISMS-PR-014                 "Termination 2024-08-02"
2024-08-03T08:22:14Z  success    ss                    user=hpierce                          ip=203.x.x.x                          "Login AFTER termination date"
2024-08-05T14:02:00Z  revocation user_session_blocked  user=hpierce                          actor=ITSupport                       "Suspended 3d post-termination"

2024-11-20T17:30:00Z  leaver_event               user=dokafor                          source=HR-ISMS-PR-014                 "Termination 2024-11-20"
2024-11-21T11:45:09Z  success    refresh_token        user=dokafor                          ip=120.x.x.x                          "Silent refresh after termination"
2024-11-22T07:18:42Z  revocation user_session_blocked  user=dokafor                          actor=ITSupport                       "Suspended ~50h post-termination"
```

## Findings

> **CONTROL FAILURE — C-2041 (contractor):** The contractor identity
> `mwebb@tessera.locoensayo.org` authenticated and refreshed sessions repeatedly between
> **2025-02-19 and 2025-02-24**, ~42–47 days after the **2025-01-09**
> termination, and was not blocked until the incident response on **2025-02-25**.
> A legacy application grant allowed these sessions without an MFA challenge
> (`MFA NOT presented`). `within_24h = FALSE`.

> **CONTROL FAILURE — FIN-0088 & ENG-0331:** Two further leavers successfully
> refreshed or authenticated after their termination dates (3 days and ~50 hours
> respectively) before sessions were suspended. `within_24h = FALSE`.

> **IMPLEMENTATION GAP:** Termination events from HR (`leaver_event`) are not
> automatically propagated to the IdP. Session suspension depends on a manual
> offboarding ticket, and an MFA-bypass grant on a legacy application allowed the
> contractor's continued access. Both are tracked as corrective actions under
> ISMS-PR-014.

> **STALE REFERENCE:** The legacy application client `Tessera AWS Console CLI`
> still carries an MFA-bypass grant left over from a 2023 migration. This grant
> should have been removed when the replacement client was rolled out.
