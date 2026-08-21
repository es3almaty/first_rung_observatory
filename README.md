# First Rung Observatory

Temporary static research prototype for the youth labour-market / AI evidence base developed in August 2026.

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
