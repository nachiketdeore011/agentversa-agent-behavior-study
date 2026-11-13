# AgentVersa Testing and Validation Report

## Environment

- Windows
- Node/npm
- Vue 3
- Vitest 5
- Vue Test Utils
- jsdom
- Vite production builds

## Tests executed

### K17 application

- Test files: 4
- Tests: 15 passed
- Production build: passed

The tests cover the existing K17 view, dashboard rendering, evaluation math, invalid scores, missing dimensions, comparison safeguards, frozen prediction preservation, malformed storage, persistence normalization, export metadata, and export environment failures.

### Episode 3 application

- Existing test files: 1
- Tests: 8 passed
- Production build: passed

## Research validation

- Predictions and observations are separate collections.
- Frozen prediction content is preserved by the freeze helper.
- Pending observations are not counted as actual observations.
- Missing evaluation dimensions are excluded from the weighted denominator rather than treated as zero.
- V2 remains documented as a proposal; no superiority claim is made.
- Evidence and claim collections start empty when no structured records exist.
- Contradictory mappings are counted and not automatically resolved.
- Malformed local-storage collections are normalized without inventing records.
- Export metadata is deterministic under test and browser API failures are surfaced.

## Known gaps

There are no automated end-to-end browser tests, statistical tests, or backend persistence tests because those capabilities are not implemented. These are remaining work, not passing test claims.
