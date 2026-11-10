> **Current release:** 10 November 2026 closing audit, 76 source observations. The 34-record October baseline, 59-record November supplement, and August trend data are retained. See `NOVEMBER_2026_CLOSING_AUDIT_NOTES.md` for source screening and limitations.

# First Rung Observatory

Complete static Observatory website, including the August 2026 baseline, October 2026 evidence update (34 records), and 10 November 2026 review (55 observations).

## Deploy

This is a zero-build static site. Upload the whole folder to a GitHub repository and connect the repository to Netlify, or drag the folder into Netlify Drop.

- Build command: leave blank
- Publish directory: `.`

## Data model

`data/evidence.json` is the source of truth for the interactive ledger.
`data/evidence.csv` is the downloadable public ledger.

Each observation keeps:
- stream
- geography
- source/date
- signal type
- AI specificity
- evidence tier
- metric/headline
- detail/comparator
- caveat
- why it matters
- direct source URL

## Editorial rule

No composite score. The site separates general labour-market strain, AI-specific signals, mixed evidence, recovery/counter-signals and conceptual mechanisms.


## Phase 2 · v20 evidence update

Phase 2 · v20 evidence update adds a live signal layer without introducing a composite index:
- interactive UK vacancy time series (level / indexed view; 13-period / 6-period range)
- current Stanford young-worker AI-exposure gap signal
- current New York Fed recent-graduate unemployment / underemployment indicators
- UK relative-recovery monitor separating the wider market from first-rung indicators
- explicit falsification conditions
- improved mobile evidence-ledger cards

`data/trends.json` is the source of truth for charted indicators.
`data/recovery.json` drives the relative-recovery monitor.
`data/trends.csv` is the public download for plotted time-series values.

The editorial rule remains unchanged: do not combine unlike indicators into a synthetic score.


## v20 evidence update (24 August 2026)

The beta now incorporates the paper's expanded remote-work and work-organization evidence. Three studies were added to the auditable ledger: Emanuel, Harrington & Pallais (proximity and feedback), Wang, Zhang & Liao (remote hiring requirements), and Lambert & Schindler (four-country joint WFH/GenAI exposure test). The interface now includes a dedicated Attribution Check so remote work is treated as both a developmental mechanism and a competing explanation rather than folded into an AI score.

## Signal hierarchy update

The live monitor now leads with direct first-rung outcomes (New York Fed recent-graduate unemployment and underemployment) and the Stanford young-worker AI-exposure differential. UK vacancies are retained only as a compact wider-market context benchmark for the relative-recovery test.

## October 2026 evidence update (proposed)

This evidence-only update includes sixteen reviewed records (the ten-record earlier October release plus Anthropic, ADP/Stanford, ISE graduate recruitment and assessment, ONS UK vacancies, and Stanford HAI): Tucker (early-career hiring), Orr/Tucker/Warren (graduate destinations), two Dallas Fed papers represented by three entries (postings, graduate outcomes, enrollment), Dey et al. (occupational exposure versus firm adoption), Bonney et al. (firm integration and counter-signals), TaskNet (task inventory completeness), and two records from the JRC AI and Skills report (EU counter-evidence and training provision).

The home page now introduces the new findings before the August trend monitor. It explicitly distinguishes AI-exposure associations from causal estimates, job advertisements from realized hiring, and formal adoption from firm-level work redesign. It also flags that the two Dallas Fed articles have related measures, that computing-sector weakness is a rival explanation, and that only 2% of firms reported AI-related employment reductions in the Bonney et al. survey.

**Data-vintage rule:** `data/trends.json`, `data/trends.csv`, and `data/recovery.json` are intentionally unchanged. The New York Fed, Stanford and UK vacancy panels still contain August-2026-vintage observations; the October date applies only to the evidence ledger. This patch is not a new statistical release of those panels.

Original August entries are preserved, and `data/evidence.csv` is regenerated from `data/evidence.json` with identical field names. No composite AI risk score has been introduced. The new studies do not prove AI caused the observed labor-market outcomes.

## 28 October 2026: TaskNet and JRC additions

Three distinct records were added to the same ledger: one TaskNet methodological study and two records from the single JRC *AI and Skills* report. They are **two sources, not three independent studies**. TaskNet does not measure employment, junior assignments or learning-by-doing. The JRC's EU vacancy/employment results mainly concern 2019–24 and are genuine counter-evidence to simple exposure-to-displacement claims, not an adjudication of 2025–26 early-career effects. Its skills-provision percentages describe catalogued, English-taught programs rather than graduate capability or all EU training.

Original August trend JSON/CSV remain unchanged. No additional score, forecast or causal claim is introduced. This update can also be applied safely over the earlier October patch, with duplicate detection.

## Consolidated custom-domain release, 28 October 2026

The October evidence ledger now includes sixteen proposed research records. Six were added after the initial ten-record release: Anthropic's internal junior-hiring case, ADP/Stanford's September year-on-year young-worker comparison, ISE's UK graduate-recruitment counter-signal and assessment changes, the October ONS UK vacancies snapshot, and Stanford HAI's organizational adoption case. Multiple records from one dataset are not independent confirmations.

The intended canonical hostname is https://firstrung.ewansimpson.org/. This code change sets a canonical URL and links back to ewansimpson.org but **does not create DNS records, configure Netlify, or prove that the domain is live**. Retain the existing GitHub -> Netlify pipeline and avoid changing the Four Walls site. August chart data remain historical and are clearly labeled; only the evidence ledger has been updated to October.

## October 2026 release

This release is a complete, directly deployable static site, not an installation patch. No local programming is required. On GitHub, upload the extracted contents to the root of the existing repository (preserve the assets/ and data/ directories). If deploying manually to Netlify, extract the ZIP and drag the complete site folder to the Netlify deploy area. The intended canonical hostname is https://firstrung.ewansimpson.org/; setting the DNS and Netlify custom domain is a separate step.

## November 10, 2026 evidence and interpretation update

The live repository snapshot arrived with **34 evidence observations** and three separate August-vintage trend/recovery files. This release **preserves all 34 existing records verbatim** and appends **21 new observations**, reaching **55 total**. These are observations, not 55 statistically independent studies. The new records cover:

- **10 PDFs from the skills archive plus the Ada Lovelace Institute commentary** (11 entries). Six items belong to the same NFER Skills Imperative research family, so they must not be counted as six independent confirmations. The uploaded original NFER Working Paper 3 is version-sensitive: use NFER's corrected Working Paper 3b/tables for projections. The Milburn Review's June amendments/August annex correction are noted.
- **10 additional primary-site research and labor-market observations** from BLS (2), ONS NEET (1), Lightcast (2), Indeed (2), LinkedIn (2) and Burning Glass Institute (1). The October ONS vacancies snapshot was already record `ons-uk-vacancies-oct2026` and was not duplicated. Underlying platform datasets may overlap with other papers already in the ledger.

The homepage now leads with a concise November synthesis while retaining the detailed October research update and the August 2026 original reading. Its editorial emphasis is mixed signals, partial identification, rival explanations, and developmental access. It continues to allow proportionate responses under uncertainty without presenting an AI causal share or composite risk score.

**Not updated:** `data/trends.json`, `data/trends.csv`, `data/recovery.json`. Chart vintages remain August 2026, with this caveat visible in the UI. The public `data/evidence.csv` has been regenerated exactly from `data/evidence.json`. Existing IDs are unchanged, and source links now enumerate each publication within shared publisher groups.

**Checks:** exact-ID and canonical-URL de-duplication against repository records; JSON/CSV row-level parity; existing-record immutability; static data-file preservation; JavaScript syntax; basic HTML references. New source assessment is curated rather than exhaustive and does not constitute independent methodological replication. See `NOVEMBER_2026_SOURCE_MANIFEST.json` for new entries.

## Selective November 2026 supplementary intake (59 observations)

Four distinct sources were added after reviewing eleven uploaded PDF files; see `NOVEMBER_2026_SUPPLEMENT_RELEASE_NOTES.md` and `NOVEMBER_2026_SUPPLEMENT_RECONCILIATION.csv`. The McKinsey appendix is part of the parent study. The original 55 evidence observations and August chart datasets are preserved, and the supplemental interpretation is separately labeled. The site reports observed associations, manager perceptions, modeled technical potential and economic theory as different evidentiary categories.
