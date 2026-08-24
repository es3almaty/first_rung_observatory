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
