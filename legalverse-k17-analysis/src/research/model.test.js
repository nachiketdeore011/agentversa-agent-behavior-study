import { describe, expect, it } from 'vitest'
import {
  classifyComparison,
  freezePrediction,
  scoreBand,
  validateEvaluationDimensions,
  weightedEvaluationScore,
} from './model.js'

describe('AgentVersa research model', () => {
  it('calculates a weighted score from available dimensions without treating missing values as zero', () => {
    expect(weightedEvaluationScore({
      'evidence-grounded-reasoning': { score: 80 },
      'role-adherence': { score: 60 },
    })).toBe(71.43)
    expect(weightedEvaluationScore({})).toBeNull()
  })

  it('validates score bounds and preserves proposed interpretation bands', () => {
    expect(validateEvaluationDimensions({ 'role-adherence': { score: 101 } })).toHaveLength(1)
    expect(scoreBand(90)).toBe('Excellent')
    expect(scoreBand(null)).toBe('Not Evaluated')
  })

  it('classifies comparisons transparently', () => {
    expect(classifyComparison({ comparable: true, evidenceSufficient: true, decisionAlignment: 'aligned', recommendationAlignment: 'aligned', evidenceUsage: 'aligned', riskIdentification: 'aligned', uncertaintyHandling: 'aligned', roleAdherence: 'aligned', escalationAppropriateness: 'aligned' })).toBe('Fully Aligned')
    expect(classifyComparison({ evidenceSufficient: false })).toBe('Insufficient Evidence')
  })

  it('freezes predictions without changing their original content', () => {
    const prediction = { id: 'p-1', status: 'Submitted', predictionText: 'Original' }
    const frozen = freezePrediction(prediction, '2026-01-01T00:00:00.000Z')
    expect(frozen).toMatchObject({ status: 'Frozen', predictionText: 'Original', frozenAt: '2026-01-01T00:00:00.000Z' })
    expect(freezePrediction(frozen)).toBe(frozen)
  })
})
