# AgentVersa Developer Guide

## Setup

Install Node.js, then run `npm install` and `npm run dev` in either Vue application directory. Use `npm test` for Vitest and `npm run build` for a production build.

## Structure

The K17 application keeps UI in `src/components/`, source-backed case data in `src/data/`, and reusable research logic in `src/research/`. Business rules belong in `model.js`, persistence in `store.js`, aggregation in `metrics.js`, and export boundaries in `export.js`.

## Conventions

Use explicit record identifiers and statuses. Keep predictions, observations, evidence, claims, and evaluations separate. Do not use missing values as zeros. Preserve source references and explain corrections through revisions or audit entries. Render user data as text bindings rather than unsafe HTML.

## Extending the system

Add a new scenario to the source register only when a repository source exists. Add a new evaluation dimension in `model.js`, update its focused tests, and document whether existing scores remain comparable. Add analytics in `metrics.js` rather than duplicating calculations in components. Add export fields through `export.js`.

## Debugging and contributions

Use the browser console for explicit storage warnings, inspect local storage under the versioned key, and run both applications' tests before submitting changes. Do not rewrite frozen Version 1 or historical research records. Keep documentation aligned with verified behavior.
