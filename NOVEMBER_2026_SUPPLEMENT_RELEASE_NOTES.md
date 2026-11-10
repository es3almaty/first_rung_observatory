# First Rung Observatory: selective November 2026 supplementary review

## Decision and result

Reviewed 11 uploaded PDF files against the released 55-record evidence ledger. Four distinct sources are admitted as contextual/mechanism observations, with the McKinsey main report and technical appendix counted as one source. New total **59 observations**. The earlier 55 records and all August trend/recovery files are preserved without modification. This is an analysis of the underlying source documents, not a newly validated causal study.

## Included

1. Eurofound (2026), *Algorithmic management in European workplaces*: employee-level, cross-sectional observations (2024 data) show **79% versus 65%** training and learning opportunities among those reporting automated task allocation versus those not reporting it, alongside higher reported demands; mechanism and counter-signal. This is not necessarily generative AI. 
2. OECD (2025), *Algorithmic management in the workplace*: manager survey across six countries, including self-reported decision-quality improvements and governance concerns; provides a different perspective, not a directly comparable measure.
3. McKinsey Global Institute (2025), *Agents, robots, and us*, **with technical appendix**: modeled automation potential (57% of paid US work hours); model assumptions and use of GPT-4o for approximately 3.4 million skill-to-activity mappings disclosed. Not observed displacement.
4. Imas, Koh and Legg (2026), *Organizing Intelligence*: economic theory of AI competence, coordination, endogenous organizational composition, and potentially nonlinear employment/wage effects; not an observed market signal.

## Discarded / not added to First Rung ledger

- McKinsey technical appendix: retained as methodology for the same parent report, not another independent publication entry.
- GMAC *Application Trends Survey 2026*: **already present** in the ledger as `gmac-2026`; primarily graduate management education applications rather than early-career labor outcomes.
- Ada Lovelace Institute, *Beyond the bubble*: useful for macroeconomic scenario planning, too indirect for a first-rung labor signal.
- Ada Lovelace Institute, *Research unlocked*: valuable methodological argument on access to platform data for online safety research, no direct labor-market finding; not included.
- OECD *Survey on Drivers of Trust in Public Institutions* (2026): broad institutional trust research, outside First Rung empirical remit.
- Edelman *2026 Trust Barometer Global Report*: broad attitudes and organizational legitimacy, no attributable early-career labor finding.
- Edelman *2024 Special Report: Trust at Work*: valuable workplace attitudes, but dated and indirect on the Observatory's employment/skills causal question.

## Caveats preserved

- Algorithmic management measures include conventional software and are not measures of frontier-model or agentic AI use.
- Eurofound is EU employees (EWCS 2024); OECD is managers across six countries, with distinct questionnaires and periods.
- Training-resource associations could arise from workplace selection; they are not treatment effects or measures of durable learning among young employees.
- McKinsey's technical model and DeepMind's economic model are not real-world employment forecasts or independent validations of each other.
- 59 observations are **not** 59 independent studies. Publication duplication within the upload and previous source ledger was explicitly screened.

## Files changed

- `data/evidence.json` append four records; `data/evidence.csv` regenerated faithfully.
- `index.html` adds a distinct supplementary interpretation section, without changing historical October/November content.
- `styles.css` adds minimal supplementary section styling.
- `README.md` adds release reference; source manifest and reconciliation included.
- `data/trends.json`, `data/trends.csv`, `data/recovery.json`, `app.js` and prior source/decision artifacts **unchanged**.

## Verification and deployment

Checks cover record uniqueness, preservation of the original 55 entries and unchanged August data, HTTPS source-link formats, JSON–CSV equivalence, evidence stream filters and detail views, and desktop/mobile rendering in an isolated Chromium browser with local data injection. An attempted normal localhost server browser navigation was blocked by the execution environment, so actual HTTP hosting and the live Netlify deployment were not tested. No independent replication of empirical claims is claimed. Publish by uploading the extracted site contents to the current GitHub branch; retain the previously released ZIP for rollback.
