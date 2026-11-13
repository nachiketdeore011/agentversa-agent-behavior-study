# AgentVersa Technical Audit

## Scope

The repository is a research record with two independent Vue/Vite case-review applications. The original implementation contains Markdown research records, a frozen Version 1 design, a Version 2 proposal, predictions, observations, and case-specific presentation views. It did not contain a shared research data model, evaluation engine, experiment registry, evidence registry, or central analytics dashboard.

## Implemented before this change

- Research documentation and scenario records under the repository root.
- `legalverse-k17-analysis`, a Vue 3/Vite case-review application with existing tests.
- `legalverse-episode-3-disclosure`, a separate Vue 3/Vite case-review application with existing tests.
- Existing records remain source documents; no scores or experimental outcomes were inferred from them.

## Implemented in this change

The K17 application now includes a Research Dashboard toggle and a local-storage-backed research model. The model supports evaluation dimensions and validation, weighted scoring with missing-dimension transparency, prediction freezing, comparison classification, evidence/claim collections, audit records, progress states, and JSON export. Existing case-review rendering is preserved.

The initial store is deliberately conservative: it registers only scenario, prediction, and observation documents that exist in the repository. Evaluations, experiments, evidence records, claims, mappings, and comparisons begin empty because the source repository does not supply structured records for them.

## Recommended architecture

The current dashboard is a compatible client-side foundation:

`source documents -> structured local store -> evaluation/comparison services -> dashboard -> JSON export`

The next production step should be a repository-backed import workflow or a reviewed backend. Browser local storage is suitable for a prototype and single researcher, but it is not a multi-user audit store, access-control boundary, or durable backup.

## Research limitations

The scoring weights and bands are proposed instruments. Existing records do not establish matched V1/V2 trials, evaluator scores, statistical significance, or complete claim-to-evidence mappings. These omissions remain visible in the dashboard and are not represented as zero performance.
