import { EVALUATION_DIMENSIONS, weightedEvaluationScore } from './model.js'

export function dashboardMetrics(store) {
  const evaluated = store.evaluations.filter((evaluation) => weightedEvaluationScore(evaluation.dimensions) !== null)
  const comparisons = store.comparisons
  const mappedClaimIds = new Set(store.claimEvidence.map((mapping) => mapping.claimId))
  return {
    scenarios: store.scenarios.length,
    predictions: store.predictions.length,
    observations: store.observations.filter((item) => item.status === 'Recorded' || item.status === 'Reviewed' || item.status === 'Verified').length,
    evaluations: evaluated.length,
    pendingEvaluations: store.evaluations.filter((item) => item.status !== 'Verified' && item.status !== 'Human Reviewed').length,
    experiments: store.experiments.filter((item) => item.status === 'Completed').length,
    pairedExperiments: store.experiments.filter((item) => item.pairId).length,
    evidence: store.evidence.length,
    claims: store.claims.length,
    supportedClaims: store.claimEvidence.filter((item) => item.relationshipType === 'Supports').map((item) => item.claimId).filter((id, index, ids) => ids.indexOf(id) === index).length,
    contradictoryClaims: store.claimEvidence.filter((item) => item.relationshipType === 'Contradicts').map((item) => item.claimId).filter((id, index, ids) => ids.indexOf(id) === index).length,
    claimsWithoutEvidence: store.claims.filter((claim) => !mappedClaimIds.has(claim.id)).length,
    pendingReview: store.evidence.filter((item) => ['Unverified', 'Under Review'].includes(item.verificationStatus)).length,
    pendingObservations: store.predictions.filter((prediction) => !store.observations.some((observation) => observation.scenarioId === prediction.scenarioId)).length,
    comparisonBreakdown: Object.fromEntries(['Fully Aligned', 'Partially Aligned', 'Not Aligned', 'Unexpected Behaviour', 'Insufficient Evidence', 'Not Comparable'].map((label) => [label, comparisons.filter((item) => item.classification === label).length])),
    dimensions: EVALUATION_DIMENSIONS.map((dimension) => {
      const scores = evaluated.map((item) => item.dimensions?.[dimension.id]?.score).filter(Number.isFinite)
      return { ...dimension, sampleCount: scores.length, average: scores.length ? Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 10) / 10 : null }
    }),
  }
}
