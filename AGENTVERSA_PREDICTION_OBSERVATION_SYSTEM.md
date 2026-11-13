# Prediction and Observation System

Predictions and observations are separate collections in the research store. Predictions can be Draft, Submitted, Frozen, Superseded, or Archived. `freezePrediction` preserves the prediction text and records a freeze timestamp; corrections should be represented as a new revision.

Observations can be Pending, Awaiting Simulation, Recorded, Reviewed, or Verified. A pending observation is not an outcome and must not be used as evidence of agent performance. Comparisons support Fully Aligned, Partially Aligned, Not Aligned, Unexpected Behaviour, Insufficient Evidence, and Not Comparable. A mismatch alone is not a performance judgment.

The initial data registers existing repository documents only. It does not invent an actual response where the source record does not provide one.
