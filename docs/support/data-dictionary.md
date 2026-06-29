---
categories:
- Financial
- data
description: An overview of the Tessera teaching datasets. Each dataset captures a different aspect of the business and is designed to surface meaningful patterns when analysed.
title: Tessera Datasets Overview
---

This document describes the Tessera teaching datasets. Each captures a
different aspect of the business — sales performance, customer satisfaction,
support activity and infrastructure cost — and is designed to reveal meaningful
patterns when analysed. The data is fictional and anonymised; it reflects
educational objectives, not real customers or transactions.

## Dataset 1: Tessera Sales Performance Data
**File:** `tessera-sales-data.csv`
**Records:** 138 rows
**Time period:** 2023–2024 (8 quarters)
**Purpose:** Trend analysis and regional performance comparison
**Download:** [tessera-sales-data.csv](../../data/tessera-sales-data.csv)

### Business context
Tessera has seen mixed performance across its product portfolio and regions.
Management needs to understand which products and regions are driving growth
versus decline, to make sound decisions about where to focus.

### Field definitions

| Field name | Data type | Description | Business significance | Example values |
|------------|-----------|-------------|----------------------|----------------|
| Region | Text | Sales territory (North, South, East, West, Central, Metro) | Geographic performance analysis | North, Metro |
| Product | Text | Tessera service offering | Product portfolio analysis | CloudSync, DataVault |
| Quarter | Text | Business quarter (Q1–Q4) | Seasonal trend identification | Q1, Q2, Q3, Q4 |
| Year | Integer | Calendar year | Year-over-year comparison | 2023, 2024 |
| Revenue_AUD | Currency | Quarterly revenue in Australian dollars | Financial performance metric | 89500, 156000 |
| Units_Sold | Integer | Number of service subscriptions sold | Volume performance metric | 450, 780 |
| Sales_Rep | Text | Regional sales representative | Performance by salesperson | Sarah Chen, Marcus Wong |
| Customer_Segment | Text | Target market category | Market segment analysis | Enterprise, SME |

### Product portfolio
- **DataVault:** Premium data storage and analytics service (highest revenue)
- **CloudSync:** Core cloud synchronisation platform (mid-tier)
- **SecureLink:** Security-focused connectivity solution (SME-focused)
- **Analytics Pro:** Advanced analytics tools (underperforming)

### Key patterns for analysis
- **Regional trends:** North/East declining, South/West growing
- **Product performance:** DataVault strong across all regions; Analytics Pro underperforming
- **Seasonal patterns:** Q4 typically strongest, Q1 typically weakest
- **Market segments:** Enterprise customers generate higher revenue per unit

---

## Dataset 2: Tessera Customer Satisfaction Data
**File:** `tessera-customer-data.csv`
**Records:** 200 rows
**Purpose:** Customer segmentation and satisfaction analysis
**Download:** [tessera-customer-data.csv](../../data/tessera-customer-data.csv)

### Business context
Tessera's customer satisfaction scores vary across segments. The company needs
to understand which characteristics correlate with satisfaction, to improve
service delivery and reduce churn risk.

### Field definitions

| Field name | Data type | Description | Business significance | Example values |
|------------|-----------|-------------|----------------------|----------------|
| Customer_ID | Text | Unique customer identifier | Individual customer tracking | CC001, CC002 |
| Age | Integer | Customer age in years | Demographic segmentation | 34, 42, 29 |
| Gender | Text | Customer gender identity | Demographic analysis | Female, Male |
| Industry | Text | Customer's business sector | Industry-based patterns | Healthcare, Finance |
| Company_Size | Text | Customer organisation size | Business size segmentation | Large, Medium, Small |
| Tenure_Months | Integer | Months as Tessera customer | Loyalty/experience correlation | 18, 36, 8 |
| Primary_Product | Text | Main Tessera service used | Product adoption patterns | DataVault, CloudSync |
| Monthly_Usage_Hours | Integer | Average monthly service usage | Engagement level indicator | 145, 89, 67 |
| Support_Tickets_6M | Integer | Support tickets in last 6 months | Service quality indicator | 2, 1, 4 |
| Satisfaction_Score | Decimal | Customer satisfaction (1–10 scale) | Key outcome measure | 8.2, 7.8, 6.1 |
| Renewal_Likelihood | Text | Probability of contract renewal | Business risk assessment | High, Medium, Low |
| Region | Text | Customer geographic location | Regional service patterns | Metro, North, South |
| Contract_Value_AUD | Currency | Annual contract value | Customer economic value | 2400, 1800, 850 |

### Industry segments
- **Finance:** Typically high satisfaction, stable usage
- **Healthcare:** Medium satisfaction, moderate support needs
- **Manufacturing:** High satisfaction, consistent usage
- **Technology:** Variable satisfaction, high usage
- **Education:** Lower satisfaction, budget constraints
- **Retail:** Medium satisfaction, seasonal usage patterns

### Key patterns for analysis
- **Satisfaction clusters:** Finance/Manufacturing (high 8–9), Healthcare/Technology (medium 6–7), Education (low 3–5)
- **Usage correlation:** Heavy DataVault users generally more satisfied
- **Support impact:** Higher ticket volumes correlate with lower satisfaction
- **Tenure effects:** Longer tenure generally correlates with higher satisfaction
- **Size patterns:** Large organisations generally more satisfied than small

---

## Dataset 3: Tessera Support Ticket Data
**File:** `tessera-support-data.csv`
**Records:** 100 rows
**Time period:** July–October 2024
**Purpose:** Pattern identification and service quality analysis
**Download:** [tessera-support-data.csv](../../data/tessera-support-data.csv)

### Business context
Tessera's support team handles a range of customer issues with varying
resolution times and outcomes. Understanding the patterns helps identify
systemic problems and improve service delivery.

### Field definitions

| Field name | Data type | Description | Business significance | Example values |
|------------|-----------|-------------|----------------------|----------------|
| Ticket_ID | Text | Unique support ticket identifier | Individual case tracking | TK001, TK002 |
| Customer_ID | Text | Customer raising the ticket | Links to customer data | CC009, CC034 |
| Date_Created | Date | Ticket creation date | Timeline analysis | 2024-07-15 |
| Category | Text | Primary issue category | Issue type patterns | Technical, Billing |
| Subcategory | Text | Specific issue type | Detailed problem analysis | Login Issues, Invoice Discrepancy |
| Priority | Text | Urgency level assigned | Resource allocation patterns | High, Medium, Low |
| Resolution_Hours | Decimal | Time to resolve in hours | Efficiency metric | 2.5, 24.0, 8.5 |
| Customer_Segment | Text | Customer business size | Segment-based service patterns | Small, Medium, Large |
| Product | Text | Tessera service affected | Product-specific issues | Analytics Pro, CloudSync |
| Industry | Text | Customer industry sector | Industry-specific patterns | Education, Manufacturing |
| Outcome | Text | Final ticket resolution | Success rate tracking | Resolved, Escalated |
| Satisfaction_Rating | Integer | Customer rating of support (1–5) | Service quality measure | 3, 4, 5 |
| Follow_Up_Required | Text | Whether additional action needed | Service completion indicator | Yes, No |

### Issue categories
- **Technical (60%):** System functionality, performance, integration issues
- **Billing (20%):** Invoice, payment, contract-related queries
- **Training (15%):** User education, feature explanation requests
- **Account (5%):** Access, permissions, administrative changes

### Key patterns for analysis
- **Resolution time:** Simple account issues resolve fastest; complex technical issues take longest
- **Product-specific issues:** Analytics Pro generates most escalations
- **Industry patterns:** Education sector experiences most issues; Finance least
- **Priority correlation:** High-priority tickets don't always resolve fastest
- **Satisfaction drivers:** Resolution time and outcome strongly correlate with satisfaction ratings

---

## Dataset 4: Tessera Cost Analysis Data
**File:** `cost_analysis_2024.csv`
**Records:** 6 rows
**Purpose:** Infrastructure cost analysis and depreciation planning
**Download:** [cost_analysis_2024.csv](../../data/cost_analysis_2024.csv)

### Business context
Tessera's infrastructure investment requires careful cost management and
depreciation planning. This dataset itemises the major infrastructure
components to support financial planning and budgeting.

### Field definitions

| Field name | Data type | Description | Business significance | Example values |
|------------|-----------|-------------|----------------------|----------------|
| Item | Text | Infrastructure component name | Asset identification | Server, Workstation |
| Unit Cost | Currency | Cost per individual item (AUD) | Per-unit investment | 4000, 1500 |
| Quantity | Integer | Number of units purchased | Scale of investment | 2, 10 |
| Total Cost | Currency | Total expenditure for item type | Budget impact | 8000, 15000 |
| Depreciation (Years) | Integer | Expected useful life for accounting | Asset lifecycle planning | 5, 3, 10 |

### Key patterns for analysis
- **High-value items:** Software Suite ($12,000) has the longest depreciation period (10 years)
- **Volume purchases:** Workstations represent the highest total investment ($15,000 for 10 units)
- **Lifecycle planning:** Hardware items depreciate faster (3–5 years) than software (10 years)
- **Cost distribution:** Total infrastructure investment of $44,500 across 5 categories

---

## Learning activities connection

### Activity 1: Sales trend analysis
Identify regional performance trends over time, product strengths and
weaknesses, seasonal patterns, and sales-representative effectiveness.
**Key questions:** Which regions need attention? Which products should Tessera
prioritise?

### Activity 2: Customer segmentation
Use clustering to discover natural customer segments based on satisfaction and
usage, the characteristics of high-value satisfied customers, churn risk
factors, and industry-specific service patterns.
**Key questions:** What makes customers satisfied? How can Tessera reduce churn
risk?

### Activity 3: Support pattern analysis
Identify patterns in issue types by segment and product, resolution-time
factors, escalation triggers, and service-quality indicators.
**Key questions:** Where are Tessera's service gaps? How can support efficiency
improve?

---

## Data quality and limitations

### Strengths
- Realistic business relationships and patterns
- Sufficient volume for meaningful analysis
- Clear correlations for the learning objectives
- Diverse variables for multiple analysis approaches

### Intentional limitations
- Simplified compared with real-world complexity
- Limited time range (designed for a short workshop)
- Clean data (minimal missing values or errors)
- Clear patterns (designed for learning, not research)

### Ethical considerations
- All data is fictional and anonymised
- No real customer information is included
- Patterns reflect educational objectives, not actual bias
- Safe for classroom discussion and analysis

---

## File formats and compatibility

- **CSV structure:** UTF-8 encoding, comma-separated values with a header row,
  consistent YYYY-MM-DD dates.
- **Tools:** imports cleanly into spreadsheet software and most database
  systems; structured for visualisation and clustering tools.

---

*Last updated: 21 August 2025*
*Created for: ISYS6014 Week 6 — Data Analysis Fundamentals*
*Contact: Course teaching team for questions or clarifications*
