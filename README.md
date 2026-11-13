# AgentVersa Agent Behavior Study

This repository documents an educational AgentVersa simulation focused on how a single AI agent behaves when assigned a defined role, exposed to uncertainty, and required to cooperate with other agents in structured scenarios.

## Research Perspective

This study is written from the perspective of a Risk Analyst / Evidence-Focused decision agent. The goal is not to claim professional legal or compliance competence, but to study how role design, information access, and interaction patterns influence agent decision-making under real-world-like pressure.

## What AgentVersa Is

AgentVersa is a simulation environment in which multiple agents operate within assigned roles and scenario constraints. The goal is to observe how agents interpret instructions, handle uncertainty, communicate with each other, and respond to conflict, risk, and incomplete information.

## Research Question

How does a conservatively designed, evidence-oriented agent behave when its role requires risk assessment, dispute handling, and decision support under ambiguous or adversarial conditions?

## Agent Description

The baseline agent in this study is designed to prioritize:
- evidence quality over speculation,
- stakeholder protection over speed,
- verification before confident conclusions,
- clear escalation when risk or uncertainty becomes material.

This creates a stable, testable behavioral profile for analyzing repeated patterns across multiple episodes.

## Simulation Overview

The repository tracks the agent through:
- a frozen Version 1 design,
- pre-scenario predictions,
- observations of actual scenario behavior,
- cross-scenario pattern analysis,
- and a proposed Version 2 redesign based on evidence rather than speculation.

## Major Findings

1. The agent is most stable when operating in evidence-first mode and tends to ask for verification before making strong claims.
2. Ambiguity often increases caution, but not always action; the agent sometimes delays rather than resolves.
3. Cooperation improves when communication is structured and grounded in clear evidence, but disagreement is frequent when confidence is uneven.
4. Risk-oriented behavior is more prominent than initiative-taking, especially in uncertain scenarios.
5. The same constraints that improve safety can also reduce decisiveness in dynamic environments.

## Repository Navigation

- `agent-design/` — Version 1 agent design and Version 2 proposal
- `predictions/` — scenario predictions made before observation
- `scenario-observations/` — structured notes for each scenario
- `AGENTVERSA_TECHNICAL_AUDIT.md` — implementation audit and architecture boundaries
- `AGENTVERSA_EVALUATION_ENGINE.md` — proposed scoring dimensions, validation, and weighting
- `AGENTVERSA_PREDICTION_OBSERVATION_SYSTEM.md` — prediction freezing and comparison rules
- `AGENTVERSA_V1_V2_EXPERIMENTAL_FRAMEWORK.md` — paired experiment requirements
- `AGENTVERSA_EVIDENCE_TRACEABILITY_SYSTEM.md` — evidence, claims, mappings, and audit rules
- `AGENTVERSA_RESEARCH_ANALYTICS_DASHBOARD.md` — dashboard implementation and limitations
- `cross-scenario-findings.md` — pattern analysis across episodes
- `final-report.md` — primary academic-style report
- `ethics-and-limitations.md` — methodological and ethical boundaries
- `LICENSE-or-usage-note.md` — usage and attribution notes

## Research platform

The K17 Vue application includes an **Open research dashboard** action. It preserves the existing case-review view and adds:

- stored-data overview metrics and scenario status,
- eight-dimension evaluation summaries with transparent missing data,
- prediction/observation comparison classifications,
- V1/V2 experiment and evidence/claim registry foundations,
- progress tracking and JSON export.

The browser store is seeded only from repository documents that already exist. Evaluations, experiments, evidence records, claims, mappings, and comparisons are empty until a researcher records them. This is intentional: the dashboard does not fabricate scores, agent responses, evidence, or experimental results.

### Run the applications

```powershell
Set-Location legalverse-k17-analysis
npm install
npm run dev
```

The second case-review application is run independently:

```powershell
Set-Location legalverse-episode-3-disclosure
npm install
npm run dev
```

### Test and build

Run `npm test` and `npm run build` in each application. The new research model tests cover weighted scoring, missing dimensions, validation, comparison classification, and frozen prediction preservation.

### Known limitations

The dashboard is a local-storage prototype for a single researcher. It does not provide authentication, shared multi-user editing, server-side audit durability, statistical tests, or automated claim verification. Version 2 remains a proposal and no V1/V2 superiority claim is made.

## Important Disclaimer

This project is an educational simulation and research exercise. It does not constitute legal advice, professional compliance guidance, or a production safety evaluation. LLM behavior can vary across prompts, model versions, and scenario wording, and the results should be understood as exploratory rather than definitive.

## Summary

This repository captures a structured attempt to study how a specific role-driven AI agent behaves across repeated scenarios. It focuses on design, prediction, evidence, disagreement, escalation, and long-term behavioral patterns rather than on claiming real-world decision authority.
