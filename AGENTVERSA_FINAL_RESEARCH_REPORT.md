# AgentVersa Agent Behavior Study — Final Research Report

## Abstract

AgentVersa studies how a role-constrained Risk Analyst / Evidence Reviewer behaves under uncertainty, disagreement, incomplete information, and competing priorities. The repository preserves a frozen Version 1 design, a proposed Version 2 redesign, scenario predictions, observations, and research notes. This implementation adds a transparent research dashboard and data foundation without fabricating scores or outcomes.

## Research problem and objectives

The central question is how evidence-first role design affects risk identification, uncertainty handling, escalation, cooperation, and decision efficiency. The platform is intended to preserve the distinction between what was predicted, what was observed, what was evaluated, and what remains unknown.

## Agent designs

Version 1 is the original baseline in `agent-design/version-1.md` and remains unchanged. Version 2 is a proposal in `agent-design/version-2-proposal.md`, including bounded thresholds, structured summaries, escalation criteria, and confidence calibration. No implemented or experimentally superior Version 2 is claimed.

## System and methodology

The K17 Vue application provides the existing case review plus a research dashboard. The research model separates scenarios, predictions, observations, evaluations, experiments, evidence, claims, mappings, comparisons, and audit entries. The eight evaluation dimensions and proposed weights are documented in `AGENTVERSA_EVALUATION_ENGINE.md`.

The intended workflow is scenario → prediction → freeze → observation → comparison → evaluation → evidence/claim review → experiment comparison → analytics/export. The current store registers source documents already present in the repository; it does not infer structured scores or hidden agent responses from narrative text.

## Results and discussion

The repository contains qualitative findings about evidence-first behavior, caution, cooperation, disagreement, and the trade-off between safety and decisiveness. Quantitative evaluation results, matched V1/V2 trials, confidence intervals, and significance tests are pending because the necessary structured data is not present. Therefore this implementation reports research readiness and data quality, not new performance conclusions.

## Ethics and limitations

This is an educational simulation and decision-support prototype. Local storage is not appropriate for confidential production data. Human reviewers retain authority. Model variability, researcher subjectivity, incomplete evidence, limited scenarios, and lack of matched trials constrain generalization.

## Conclusion

AgentVersa now has a tested, transparent client-side foundation for extending the existing study. Future researchers should enter reviewed observations and evaluations, preserve provenance, run matched experiments, and report uncertainty before drawing comparative conclusions.

## Source records

Primary sources include `agent-design/version-1.md`, `agent-design/version-2-proposal.md`, `predictions/`, `scenario-observations/`, `cross-scenario-findings.md`, `final-report.md`, `scenario-6-research-notes.md`, `scenario-7-research-notes.md`, and `ethics-and-limitations.md`.

## Formal report sections

### 1. Project Title

AgentVersa — Agent Behavior Study.

### 2. Abstract

This study examines a Risk Analyst / Evidence Reviewer agent and provides a transparent client-side platform for preserving predictions, observations, evaluations, evidence relationships, and research limitations.

### 3. Introduction

The project treats agent behavior as observable, context-dependent research data rather than as evidence of general professional competence.

### 4. Background and Motivation

The motivation is to study evidence-first reasoning, uncertainty, cooperation, escalation, and the safety/speed trade-off under structured scenarios.

### 5. Research Problem

The problem is how to evaluate role-constrained behavior without confusing predictions, observations, interpretations, or unsupported conclusions.

### 6. Research Objectives

Preserve research provenance, support repeatable evaluation, compare proposed versions fairly, and expose missing or contradictory evidence.

### 7. Research Questions

The central question concerns evidence-oriented behavior under uncertainty; the Version 2 question is whether bounded decisions improve usefulness without reducing evidence quality, privacy, role adherence, or responsible uncertainty.

### 8. Scope of Research

The scope is the repository's educational scenarios and visible agent behavior. It excludes production deployment and claims about hidden reasoning.

### 9. Agent Versa Risk Analyst Overview

The agent is designed as a Risk Analyst / Compliance and Evidence Reviewer with evidence quality, stakeholder protection, verification, and escalation priorities.

### 10. Agent Version 1 Design

Version 1 is the frozen baseline in `agent-design/version-1.md`; it was not modified by this implementation.

### 11. Agent Version 2 Proposed Improvements

Version 2 is a proposal for bounded thresholds, structured risk summaries, escalation criteria, and confidence calibration. It is not claimed to be implemented or superior.

### 12. Existing System Analysis

The repository originally contained Markdown research records and two independent Vue case-review applications. The K17 application now contains the research dashboard foundation.

### 13. Proposed System

The implemented direction is scenario → prediction → freeze → observation → comparison → evaluation → evidence/claim review → analytics/export.

### 14. System Architecture

See `AGENTVERSA_SYSTEM_ARCHITECTURE.md`. UI, business rules, persistence, metrics, and export are separated in the K17 application.

### 15. Technology Stack

Vue 3, Vite, Vitest, Vue Test Utils, jsdom, browser local storage, and browser JSON download APIs.

### 16. Research Methodology

Researchers should preserve source references, distinguish status from outcome, document reviewer explanations, and avoid treating missing data as zero.

### 17. Experimental Design

Matched V1/V2 runs require equivalent scenario packets, instructions, settings, prompt versions, and recorded differences. No matched dataset is currently available.

### 18. Behaviour Evaluation Framework

Eight proposed dimensions use weights of 20%, 15%, 15%, 15%, 10%, 10%, 10%, and 5%. Scores are validated from 0–100 and normalized over available dimensions.

### 19. Prediction Management

Predictions are separate records with lifecycle statuses. Freezing preserves original content and records a revision/timestamp.

### 20. Observation Management

Observations represent supplied actual outcomes only. Pending or absent simulations remain pending and are not performance results.

### 21. Prediction vs Observation Analysis

Comparisons support alignment, unexpected behavior, insufficient evidence, and non-comparability. A mismatch is not automatically a failure.

### 22. Version 1 vs Version 2 Comparison

The store has an experiment foundation, but score differences, repeated-trial summaries, and statistical tests remain pending structured data.

### 23. Evidence Traceability

Evidence and claim collections are separate from their many-to-many mappings; support and contradiction remain visible.

### 24. Claim Verification

Claim verification requires reviewer decisions and source references. The platform does not automatically convert an inference or assumption into a fact.

### 25. Research Analytics Dashboard

The K17 dashboard reports stored counts, dimension samples, comparison classifications, scenario statuses, progress, and JSON export.

### 26. Implementation Details

`src/research/model.js`, `store.js`, `metrics.js`, and `export.js` contain reusable rules and boundaries; `ResearchDashboard.vue` renders them.

### 27. Testing Methodology

Focused unit tests cover model, storage normalization, export safeguards, and dashboard integration; existing application tests provide regression coverage.

### 28. Results

Technical results are verified in `AGENTVERSA_TESTING_AND_VALIDATION_REPORT.md`. Quantitative research results are pending and are not fabricated here.

### 29. Discussion

Existing qualitative records describe evidence-first caution and a possible safety/speed trade-off. The platform makes it possible to test these claims without presenting them as new measurements.

### 30. Strengths and Weaknesses

Strengths are provenance-aware separation and explicit missing data. Weaknesses are local-only storage, incomplete CRUD workflows, and no matched experiments or inferential statistics.

### 31. Ethical Considerations

Human oversight, privacy, confidentiality, reviewer subjectivity, model variability, and risk of overinterpretation are addressed in `ethics-and-limitations.md`.

### 32. Research Limitations

The sample is limited, scenario evidence is incomplete, model outputs vary, and no production or professional reliability claim is justified.

### 33. Future Scope

Future work includes reviewed CRUD forms, authenticated append-only persistence, import validation, browser E2E tests, and statistically justified repeated trials.

### 34. Conclusion

AgentVersa now provides a tested foundation for transparent behavioral research while clearly identifying what remains unmeasured.

### 35. References and Source Records

References are the repository's Version 1 and Version 2 design files, prediction files, observation files, cross-scenario findings, research notes, final report, and ethics record listed above.
