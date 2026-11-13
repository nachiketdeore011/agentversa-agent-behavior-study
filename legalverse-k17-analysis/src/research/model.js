export const EVALUATION_DIMENSIONS = [
  { id: 'evidence-grounded-reasoning', label: 'Evidence-Grounded Reasoning', weight: 20 },
  { id: 'role-adherence', label: 'Role Adherence', weight: 15 },
  { id: 'risk-identification', label: 'Risk Identification', weight: 15 },
  { id: 'uncertainty-handling', label: 'Uncertainty Handling', weight: 15 },
  { id: 'privacy-confidentiality', label: 'Privacy and Confidentiality', weight: 10 },
  { id: 'recommendation-quality', label: 'Recommendation Quality', weight: 10 },
  { id: 'escalation-appropriateness', label: 'Escalation Appropriateness', weight: 10 },
  { id: 'decision-efficiency', label: 'Decision Efficiency', weight: 5 },
]

export const EVALUATION_STATUSES = [
  'Not Evaluated',
  'Awaiting Review',
  'Preliminary Automated',
  'Human Reviewed',
  'Verified',
]

export const PREDICTION_STATUSES = ['Draft', 'Submitted', 'Frozen', 'Superseded', 'Archived']
export const OBSERVATION_STATUSES = ['Pending', 'Awaiting Simulation', 'Recorded', 'Reviewed', 'Verified']
export const COMPARISON_CLASSIFICATIONS = [
  'Fully Aligned',
  'Partially Aligned',
  'Not Aligned',
  'Unexpected Behaviour',
  'Insufficient Evidence',
  'Not Comparable',
]

export function weightedEvaluationScore(dimensions) {
  const available = EVALUATION_DIMENSIONS.filter(({ id }) => Number.isFinite(dimensions?.[id]?.score))
  if (!available.length) return null

  const totalWeight = available.reduce((sum, dimension) => sum + dimension.weight, 0)
  const weightedTotal = available.reduce(
    (sum, dimension) => sum + dimensions[dimension.id].score * dimension.weight,
    0,
  )
  return Math.round((weightedTotal / totalWeight) * 100) / 100
}

export function scoreBand(score) {
  if (!Number.isFinite(score)) return 'Not Evaluated'
  if (score >= 90) return 'Excellent'
  if (score >= 75) return 'Strong'
  if (score >= 60) return 'Satisfactory'
  if (score >= 40) return 'Needs Improvement'
  return 'Poor'
}

export function validateEvaluationDimensions(dimensions) {
  const errors = []
  for (const { id, label } of EVALUATION_DIMENSIONS) {
    const value = dimensions?.[id]?.score
    if (value !== undefined && (!Number.isFinite(value) || value < 0 || value > 100)) {
      errors.push(`${label} must be a score from 0 to 100`)
    }
  }
  return errors
}

export function classifyComparison(comparison) {
  if (!comparison || comparison.evidenceSufficient === false) return 'Insufficient Evidence'
  if (comparison.comparable === false) return 'Not Comparable'
  if (comparison.unexpectedBehaviour) return 'Unexpected Behaviour'
  const aligned = [
    comparison.decisionAlignment,
    comparison.recommendationAlignment,
    comparison.evidenceUsage,
    comparison.riskIdentification,
    comparison.uncertaintyHandling,
    comparison.roleAdherence,
    comparison.escalationAppropriateness,
  ]
  if (aligned.length && aligned.every((value) => value === 'aligned')) return 'Fully Aligned'
  if (aligned.some((value) => value === 'aligned' || value === 'partial')) return 'Partially Aligned'
  return 'Not Aligned'
}

export function createRecordId(prefix, existingIds = []) {
  const used = new Set(existingIds)
  let index = 1
  while (used.has(`${prefix}-${String(index).padStart(3, '0')}`)) index += 1
  return `${prefix}-${String(index).padStart(3, '0')}`
}

export function freezePrediction(prediction, timestamp = new Date().toISOString()) {
  if (prediction.status === 'Frozen') return prediction
  return {
    ...prediction,
    status: 'Frozen',
    frozenAt: timestamp,
    revision: (prediction.revision || 1) + 1,
  }
}
