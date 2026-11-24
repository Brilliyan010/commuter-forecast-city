# NOTES — Charm the Commuter: Forecast a City That Isn't

- Competition: `u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e`
- Title: Charm the Commuter: Forecast a City That Isn't
- Prize: $2 winner-takes-all (1st place), free entry
- Opened: 2026-11-24 16:29 WIB (09:29:27Z)
- Entries close: 2026-11-26 23:30 WIB (16:30:00Z)
- Quota: max_per_day 5, max_total null, max_entries_per_account 40.
  Blind rounds: one entry per judging round is always allowed.
  Next round cutoff: 2026-11-25 10:49 WIB (03:49:38Z).
- Anchor: drand round 34236885 (root commit
  58d35e2847b2dad537230a7e3b86126ab989978c), emitted after the competition opened.
- Entrypoint: `main.ts` (Node 22.18+; grader runs Node 22.23.4), writes
  `/output/entry.txt`. No dependencies, no network, no randomness.

## Entry (127 chars, 1 line)

> Good morning, Nimbleville: 14°C, light drizzle, and the 8:04 bus is somehow on time — pack an umbrella and a small victory lap.

## Why this line

Judge brief, in order: (1) reads as a one-line forecast for a city that does
not exist — "Good morning, Nimbleville:" opens in broadcast-weather register
and names the invented city, weather is the whole point; (2) makes a bored
commuter smile — the small joke is the bus being *somehow on time*, the one
miracle a commuter never expects, closed with the turn of phrase "a small
victory lap"; (3) keeps the forecast register — temperature, drizzle, bus time,
packing advice; (4) one concrete detail of the city's life — the 8:04 bus;
(5) every word earns its place at 127/140 chars.

Alternatives considered and rejected: a Puddleton line with "drizzle
tap-dancing on umbrellas" (lovely image, weaker commuter hook, no bus);
a Drizzlewick line at 144 chars (over the cap); a "miracle of miracles"
variant (weaker ending than "small victory lap").

## Validation

- `node main.ts` run twice: outputs byte-identical.
  sha256 `/output/entry.txt` =
  `c3d2f92d1cde78c93d5557f500dd6e2010a95cb7ef66f17db617f1ad6b4c9f1a`
- Gate check (local): UTF-8, 127 chars (1–140), 1 line, not only whitespace — PASS.
- grade-local: not available for this competition — scorer and reference data
  stay on the server (RULES.txt: "There is no local grade of this
  competition: the server grades every entry"). No house baseline/anchors in
  the kit (sealed; revealed with the final kit), so no local score vs baseline.
- Private/blind rounds: no live rank or score until results publish.
