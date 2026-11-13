# AgentVersa Evaluation Engine

The evaluation model is implemented in `legalverse-k17-analysis/src/research/model.js`.

## Dimensions

The eight proposed dimensions and weights are Evidence-Grounded Reasoning (20%), Role Adherence (15%), Risk Identification (15%), Uncertainty Handling (15%), Privacy and Confidentiality (10%), Recommendation Quality (10%), Escalation Appropriateness (10%), and Decision Efficiency (5%).

Scores are expected on a 0–100 scale. A weighted score is calculated only from dimensions that have a numeric score; it is normalized by the available weights, so missing dimensions are not silently converted to zero. A record with no available dimensions has no overall score.

Interpretation bands are proposed only: Excellent (90–100), Strong (75–89), Satisfactory (60–74), Needs Improvement (40–59), and Poor (0–39). Automated results must remain Preliminary Automated until a human reviewer verifies them.
