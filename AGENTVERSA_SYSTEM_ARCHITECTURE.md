# AgentVersa System Architecture

## 1. Overview

AgentVersa is an educational research platform layered onto the existing Vue 3/Vite case-review application. The original case view remains the presentation layer for the K17 scenario. The research dashboard adds a deliberately small, client-side research foundation rather than replacing the historical records or introducing an unnecessary backend.

```text
Repository research records
          |
          v
Versioned local research store
          |
          +--> validation and lifecycle rules
          +--> evaluation and comparison metrics
          +--> analytics dashboard
          +--> JSON export
```

## 2. Modules

| Module | Responsibility |
| --- | --- |
| `src/data/` | Existing case-specific source-backed presentation data |
| `src/components/` | Vue UI, including the preserved case review and dashboard |
| `src/research/model.js` | Dimension definitions, score validation, bands, comparison classification, prediction freezing |
| `src/research/store.js` | Versioned browser storage, normalization, seeded source-document register, audit/evidence record creation |
| `src/research/metrics.js` | Centralized dashboard aggregation |
| `src/research/export.js` | JSON serialization and browser download boundary |

## 3. Data flow and relationships

Scenarios are referenced by predictions and observations. Evaluations reference dimensions and may reference a scenario in future records. Experiments, evidence, claims, and claim-evidence mappings are independent collections until valid identifiers are entered. Missing relationships remain missing; the dashboard does not infer them.

Predictions can be frozen, which records a timestamp and revision while preserving the original text. Observations are separate and may remain pending. A comparison is only meaningful when an actual observation and sufficient evidence exist.

## 4. Storage and state

The browser key `agentversa-research-platform-v1` stores JSON. `normalizeResearchStore` repairs malformed collection shapes and restores compatible defaults. Storage failures are not treated as successful writes. A production multi-user study should replace this prototype store with an authenticated, append-only research service.

## 5. Security and integrity

The UI renders text through Vue bindings, not unsafe HTML injection. Export is generated from the in-memory store and does not transmit data. Local storage is not confidential storage; researchers must not place sensitive personal or witness information in this prototype. Evidence verification and claim relationships remain explicit and auditable.

## 6. Performance and trade-offs

Dashboard metrics are computed once per store update through Vue computed state. Scenario filtering is a bounded in-memory filter appropriate for the current dataset. The trade-off is simplicity and portability versus multi-user durability, access control, and scalable querying.
