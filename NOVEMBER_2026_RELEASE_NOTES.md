# First Rung Observatory – November 2026 release notes

## Decision and scope

The Observatory exists to expose uncertainty, diverging signals and plausible mechanisms affecting early-career work. It does **not** attribute an identifiable percentage of youth-employment change to AI, predict an aggregate employment collapse or publish a composite risk index. The new editorial section puts this message first.

## Evidence reconciliation

- Incoming GitHub ZIP: 34 existing evidence observations, each preserved without changes to its data fields or identifiers.
- New archive: 10 PDFs plus the 9 November Ada Lovelace Institute commentary, matched to 11 new observations. Six NFER entries share the same research family and are explicitly not independent replications.
- New labor/skills scan: 10 new observations drawn from BLS (2), ONS NEET (1), Lightcast (2), Indeed (2), LinkedIn (2), Burning Glass Institute (1).
- Already present: October ONS 691k vacancy observation (ID `ons-uk-vacancies-oct2026`), so no duplicate added.
- Final ledger: 55 observations, 37 publisher/program groups. **These counts do not equal independent studies.**
- NFER 2023 WP3 uploaded original: quantitative interpretation superseded by 2024 WP3b/revised tables following ONS occupational-coding correction; NFER page links to both.
- Milburn Review: principal report updated June 2026 and annex table corrected August 2026. Use the government corrections for specific statistics.
- OECD/EU AI literacy framework: 18 June 2026 publication date verified against OECD, rather than its earlier approval date.
- The UK ONS 691k October figures were already in the ledger, while the newer 981k NEET observation is added.

## Site adjustments

- New November 2026 synthesis placed above the historical October research update.
- Hero statement and action-threshold commentary rewritten to acknowledge competing explanations and uncertainty.
- Developmental quality of entry-level work added to the narrative without assuming that routine work is inherently educational or AI necessarily removes it.
- The source list now contains a link to **each unique publication** under a publisher, not just the first.
- New source manifest identifies each appended record and its direct URL.
- HTML, CSS, JS, data files, README and sitemap updated.

## Preservation and verification

- `data/trends.json`, `data/trends.csv`, `data/recovery.json` **unchanged**. Their interactive panels are clearly labelled August 2026 vintage.
- Existing 34 `data/evidence.json` objects **unchanged**. CSV regenerated from JSON in original field order.
- Unique IDs and canonicalized URLs checked; no duplicate new URL matching the 34 originals.
- Local Chromium rendering tested with controlled offline data injection at 1365px and 390px viewport widths: source grouping, 55 observations, filters, modal open/close, no JavaScript errors, no horizontal overflow.
- Normal local-file navigation, web hosting, GitHub connection, Netlify build and public HTTPS links were **not independently tested**. This is a ready-to-deploy static package, not a claim of live publication.

## Remaining caveats

LinkedIn and Lightcast data represent platform populations; underlying studies can overlap. NFER final and working papers share projections and evidence. Advertised hiring and pay are not actual employment or earnings. AI exposure is not organizational adoption. Causation is not identified. We recommend continuing quarterly chart revisions only after assembling comparable primary time-series vintages.

## Deployment

Extract the ZIP. At the existing GitHub repository root, upload/replace the contents of `first_rung_observatory-main/`, preserving the `data/` and `assets/` directory structure. Commit to the existing deployment branch. Netlify should deploy through its existing GitHub configuration; verify the public domain afterward, particularly the evidence register/filter and source links. Keep the original uploaded ZIP as a rollback point.
