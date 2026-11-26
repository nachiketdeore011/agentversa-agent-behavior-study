# AgentVersa Agent Behavior Study

This repository documents an educational AgentVersa behavioral study across two explicitly separated research tracks. The original historical track concerns Agent Versa Risk Analyst (Risk Analyst / Compliance and Evidence Reviewer, Version 1). From Scenario 10 onward, the active selected platform subject is Lexora (Legal Aid and Access Agent). These agents and roles are not interchangeable; predictions and observations must remain attributed to the correct subject.

## Research Perspective

### Active track from Scenario 10

The active research subject from Scenario 10 onward is **Lexora — Legal Aid and Access Agent**, as identified in the researcher's supplied locked My Selected Agents profile. See [`RESEARCH_SUBJECT_TRANSITION.md`](RESEARCH_SUBJECT_TRANSITION.md) and [`agent-design/lexora-profile.md`](agent-design/lexora-profile.md). The available profile excerpt is incomplete and is not a full agent prompt or behavioral specification.

### Historical track through prior records

The earlier research track studied **Agent Versa Risk Analyst — Risk Analyst / Compliance and Evidence Reviewer — Version 1**. Its frozen design and associated predictions, observations, and reports remain preserved as historical material. They must not be retroactively attributed to Lexora.

The goal of both tracks is educational behavioral analysis, not a claim of professional legal, legal-aid, or compliance competence.

## What AgentVersa Is

AgentVersa is a simulation environment in which multiple agents operate within assigned roles and scenario constraints. The goal is to observe how agents interpret instructions, handle uncertainty, communicate with each other, and respond to conflict, risk, and incomplete information.

## Research Questions

**Historical Risk Analyst track:** How does a conservatively designed, evidence-oriented agent behave when its role requires risk assessment, dispute handling, and decision support under ambiguous or adversarial conditions?

**Active Lexora track from Scenario 10:** How does the selected Legal Aid and Access Agent respond to the scenarios, role constraints, service-access issues, uncertainty, and multi-agent interactions presented in each episode? Predictions for this track must be grounded in Lexora's available profile and direct scenario evidence; the incomplete profile must not be treated as a complete design specification.

## Agent Description and Track Separation

The historical Version 1 baseline is documented in [`agent-design/version-1.md`](agent-design/version-1.md) and belongs only to Agent Versa Risk Analyst.

The active Lexora track uses the platform identity and role currently evidenced in [`agent-design/lexora-profile.md`](agent-design/lexora-profile.md). Lexora's full prompt, internal priorities, risk appetite, and detailed authority design have not been supplied; these must not be inferred from the Risk Analyst design.

Each track requires its own predictions, observations, and conclusions.

## Simulation Overview

The repository preserves the historical Risk Analyst work and begins a separate Lexora track from Scenario 10:
- historical frozen Risk Analyst Version 1 design and records,
- separate Lexora predictions beginning with Scenario 10,
- scenario-specific observations that identify the actual participating agent,
- separate cross-scenario analysis by research subject,
- and no combined behavioral conclusion unless the subjects and evidence are explicitly distinguished.

## Historical Risk Analyst Findings

The findings below refer to the earlier Agent Versa Risk Analyst research track only. They are not findings about Lexora.

1. The agent is most stable when operating in evidence-first mode and tends to ask for verification before making strong claims.
2. Ambiguity often increases caution, but not always action; the agent sometimes delays rather than resolves.
3. Cooperation improves when communication is structured and grounded in clear evidence, but disagreement is frequent when confidence is uneven.
4. Risk-oriented behavior is more prominent than initiative-taking, especially in uncertain scenarios.
5. The same constraints that improve safety can also reduce decisiveness in dynamic environments.

## Repository Navigation

- `RESEARCH_SUBJECT_TRANSITION.md` — official subject separation and Scenario 10 transition policy
- `agent-design/version-1.md` — frozen historical Agent Versa Risk Analyst baseline
- `agent-design/lexora-profile.md` — selected Lexora profile snapshot and evidence limits
- `predictions/scenario-predictions.md` — historical Risk Analyst predictions (do not relabel as Lexora)
- `predictions/lexora-scenario-predictions.md` — active Lexora predictions from Scenario 10 onward
- `scenario-observations/` — scenario observations; Lexora files identify the selected subject explicitly
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

This repository preserves a historical Agent Versa Risk Analyst study and a separate active Lexora study from Scenario 10 onward. Its focus is design evidence, pre-simulation prediction, observed behavior, disagreement, uncertainty, and role-specific patterns—not real-world decision authority.
