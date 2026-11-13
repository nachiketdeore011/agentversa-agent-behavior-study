import { createRecordId } from './model.js'

export const STORAGE_KEY = 'agentversa-research-platform-v1'

const documentedScenarios = [
  { id: 'scenario-01', title: 'Scenario 1', source: 'scenario-observations/scenario-01.md', observationStatus: 'Recorded' },
  { id: 'scenario-03', title: 'Scenario 3', source: 'scenario-observations/scenario-03.md', observationStatus: 'Recorded' },
  { id: 'scenario-04', title: 'Scenario 4', source: 'scenario-observations/scenario-04.md', observationStatus: 'Recorded' },
  { id: 'scenario-06', title: 'Scenario 6', source: 'scenario-6-research-notes.md', observationStatus: 'Awaiting Simulation' },
  { id: 'scenario-07', title: 'Scenario 7', source: 'scenario-observations/scenario-07.md', observationStatus: 'Recorded' },
]

export const emptyResearchStore = () => ({
  scenarios: documentedScenarios,
  predictions: [
    { id: 'prediction-scenario-07', scenarioId: 'scenario-07', status: 'Frozen', source: 'predictions/scenario-07-public-statement.md' },
    { id: 'prediction-scenarios', scenarioId: 'multiple', status: 'Frozen', source: 'predictions/scenario-predictions.md' },
  ],
  observations: documentedScenarios
    .filter((scenario) => scenario.observationStatus === 'Recorded')
    .map((scenario) => ({
      id: `observation-${scenario.id}`,
      scenarioId: scenario.id,
      status: scenario.observationStatus,
      source: scenario.source,
      actualResponse: null,
    })),
  evaluations: [],
  comparisons: [],
  experiments: [],
  evidence: [],
  claims: [],
  claimEvidence: [],
  auditTrail: [],
  progress: {
    'agent-design': 'Completed',
    predictions: 'Completed',
    observations: 'Awaiting Review',
    evaluations: 'Not Started',
    experiments: 'Not Started',
    'evidence-mapping': 'Not Started',
    analysis: 'In Progress',
    documentation: 'In Progress',
  },
})

const collectionKeys = [
  'scenarios',
  'predictions',
  'observations',
  'evaluations',
  'comparisons',
  'experiments',
  'evidence',
  'claims',
  'claimEvidence',
  'auditTrail',
]

export function normalizeResearchStore(input) {
  const defaults = emptyResearchStore()
  const candidate = input && typeof input === 'object' ? input : {}
  const normalized = { ...defaults, ...candidate, progress: { ...defaults.progress, ...(candidate.progress || {}) } }
  for (const key of collectionKeys) {
    normalized[key] = Array.isArray(candidate[key]) ? candidate[key] : defaults[key]
  }
  return normalized
}

export function loadResearchStore(storage = globalThis.localStorage) {
  if (!storage) return emptyResearchStore()
  try {
    const saved = storage.getItem(STORAGE_KEY)
    return saved ? normalizeResearchStore(JSON.parse(saved)) : emptyResearchStore()
  } catch (error) {
    console.warn('AgentVersa research data could not be loaded; using an empty compatible store.', error)
    return emptyResearchStore()
  }
}

export function saveResearchStore(store, storage = globalThis.localStorage) {
  if (!storage) return
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(normalizeResearchStore(store)))
  } catch (error) {
    throw new Error('AgentVersa research data could not be saved.', { cause: error })
  }
}

export function createEvidence(store, input, timestamp = new Date().toISOString()) {
  const id = createRecordId('evidence', store.evidence.map((record) => record.id))
  const record = { ...input, id, createdAt: timestamp, updatedAt: timestamp, verificationStatus: input.verificationStatus || 'Unverified' }
  return { ...store, evidence: [...store.evidence, record], auditTrail: [...store.auditTrail, { type: 'evidence.created', recordId: id, timestamp }] }
}
