# Research Subject Transition — Effective Scenario 10

**Decision recorded:** 2026-11-26  
**Effective from:** Scenario 10  
**Status:** Active research-scope decision

## 1. Official active research subject

From Scenario 10 onward, the official subject for new AgentVersa scenario predictions and observations is:

- **Agent:** Lexora
- **Assigned platform role:** Legal Aid and Access Agent
- **Platform season:** Justice Under Pressure
- **Selection status:** Locked for research, as shown in the user's supplied My Selected Agents profile
- **Platform progress shown in the supplied profile:** 10 of 10 scenarios completed

The profile excerpt supplied by the researcher describes Lexora as helping people understand their legal rights, access legal aid, and navigate difficult situations. The visible description is truncated after “unfair treatment, fin...”; no additional capabilities or design rules are inferred from that incomplete excerpt.

See [`agent-design/lexora-profile.md`](agent-design/lexora-profile.md) for the limited profile snapshot and source boundaries.

## 2. Historical research track — preserved

The repository's original research subject remains a separate historical track:

- **Agent:** Agent Versa Risk Analyst
- **Role:** Risk Analyst / Compliance and Evidence Reviewer
- **Design:** Version 1 — Baseline Design
- **Frozen design file:** [`agent-design/version-1.md`](agent-design/version-1.md)

All historical predictions, observations, analysis, and reports that were created for Agent Versa Risk Analyst remain attributed to that agent and role. They must not be relabelled as Lexora's behavior.

The original Version 1 design remains frozen and unchanged. Its historical records are retained for traceability and are not deleted, rewritten, or retroactively reassigned.

## 3. Scenario 9 identity boundary

Scenario 9 contains a documented identity mismatch:

- The repository's Scenario 9 pre-simulation prediction was written for Agent Versa Risk Analyst.
- The user's selected platform agent is Lexora.
- Lexora participated in Episode 9 and recommended a temporary 30-minute export-endpoint restriction.
- The episode's ten-agent roster did not include an agent named Agent Versa Risk Analyst.

Therefore, Scenario 9 group findings and Lexora's observed response are preserved as contextual/selected-agent evidence. They must not be scored as a direct prediction-versus-observation match for the Risk Analyst prediction. The Scenario 9 observation record documents this boundary.

## 4. Rules for Scenario 10 onward

1. Write new pre-simulation predictions for **Lexora — Legal Aid and Access Agent**, unless the researcher explicitly changes the selected subject again.
2. Keep new Lexora predictions separate from the historical Risk Analyst prediction file. Use [`predictions/lexora-scenario-predictions.md`](predictions/lexora-scenario-predictions.md) as the prediction record for Scenario 10 onward.
3. Use scenario-specific observation files with the subject clearly identified in the heading and metadata. Recommended naming: `scenario-observations/lexora-scenario-10.md`, `scenario-observations/lexora-scenario-11.md`, and so on.
4. Freeze each Lexora prediction before the simulation results are reviewed. After results arrive, do not rewrite that prediction; add observations separately.
5. Attribute only the responses that the platform actually identifies as Lexora. Do not infer Lexora's position from other agents' recommendations or from an aggregate episode split.
6. Distinguish the role label and profile description from a full agent prompt or internal design. Do not invent Lexora's hidden instructions, values, risk appetite, authority, or behavioral traits.
7. If a future episode does not list Lexora as a participant, record the missing individual-agent evidence and do not manufacture an observation.
8. Preserve source excerpts, uncertainty, missing materials, and discrepancies. Do not treat platform summaries or displayed private reflections as hidden reasoning.
9. Keep the original Risk Analyst files and findings intact. Any future comparative analysis must identify which subject and which scenario range it covers.

## 5. New prediction file

The new file [`predictions/lexora-scenario-predictions.md`](predictions/lexora-scenario-predictions.md) is a separate record for Lexora. It begins with Scenario 10; it does not backfill Scenarios 1–9 or claim that earlier Risk Analyst predictions belonged to Lexora.

## 6. Reporting boundary

Until enough Lexora-specific scenarios have been observed, do not merge Lexora findings into the historical Risk Analyst cross-scenario findings or final report. Any combined project report must present the two tracks separately, explain the subject transition, and avoid claiming continuity of one agent across the two roles.
