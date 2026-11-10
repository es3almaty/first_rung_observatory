# First Rung Observatory | Closing November 2026 evidence audit

**Date:** 10 November 2026. **Baseline:** 59 observations in the November Supplement release. **Result:** 76 ledger observations, 17 additions from 18 reviewed candidate sources.

## Central editorial conclusion
The evidence does not yet establish the direction or magnitude of any net AI effect on youth employment. Different observations concern hiring, job postings, age cohort stocks, unemployment, wages, AI adoption, and the developmental content of work. They cannot be pooled into a single employment estimate.

## Notable revisions and reconciliation
- Emanuel et al.: reference 2026 *Quarterly Journal of Economics* article rather than superseded NBER working paper, retaining DOI and 18.3% feedback finding.
- Yale: use the updated 14 October 2026 tracking release where appropriate, while recording that the user provided the May 2026 commentary. Count as a single study program, not two separate tests.
- Ide: refer to the 1 November 2026 arXiv revision, not only the 2025 abstract and numerical scenarios. Growth numbers are model illustrations, not forecasts.
- Northeastern: replace the university-news report with the original *AI in the Hiring Room* survey and flag weighted nonprobability sampling and 26% conditional denominator.
- DSIT/LinkedIn is kept as a UK-specific source despite partial data overlap with the five-market August LinkedIn analysis; two observations are not independent replications.
- Dallas Fed Atkinson/Yamco relies on CPS inflows and is distinct from the already-registered Dodini/Smith Texas postings and graduate studies.
- Anthropic Massenkoff/McCrory analyzes usage-linked exposure and CPS trends; it is distinct from the firm-level Anthropic hiring case already in the register, but still from one provider.
- UK Government January 2026 capabilities assessment was examined and excluded from the 17 additions as secondary synthesis overlapping already registered studies.

## Operational constraints
- The site is a zero-build Netlify/GitHub static repository. All HTML, CSS, JavaScript, images, trend/recovery series and previous research sections were preserved.
- August 2026 trend and recovery JSON and CSV files retain their exact prior byte hashes.
- This release has *not* been deployed to the live website. The ZIP must be extracted to the root of the existing repository; do not upload ZIPs as files or create a nested project folder.
- An isolated desktop/mobile browser smoke test using inlined application assets and mocked local JSON fetches loaded all 76 records, showed the closing section, had no JavaScript exceptions or horizontal overflow. The actual hosted environment was not tested; local HTTP preview was blocked by this environment.
- Public web pages, abstracts and, where accessible, primary reports were checked. This audit is not a full independent replication of every paper or downloadable proprietary dataset.
