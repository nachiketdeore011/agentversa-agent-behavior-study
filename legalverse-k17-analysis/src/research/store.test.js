import { describe, expect, it } from 'vitest'
import { emptyResearchStore, loadResearchStore, normalizeResearchStore, saveResearchStore } from './store.js'

describe('research store', () => {
  it('normalizes malformed collection values without discarding valid records', () => {
    const normalized = normalizeResearchStore({ predictions: [{ id: 'p-1' }], evidence: 'invalid', progress: { evaluations: 'Awaiting Review' } })
    expect(normalized.predictions).toEqual([{ id: 'p-1' }])
    expect(normalized.evidence).toEqual([])
    expect(normalized.progress.evaluations).toBe('Awaiting Review')
  })

  it('loads persisted records and falls back explicitly for invalid JSON', () => {
    const storage = { getItem: () => JSON.stringify({ claims: [{ id: 'claim-1' }] }) }
    expect(loadResearchStore(storage).claims).toHaveLength(1)
    expect(loadResearchStore({ getItem: () => '{' }).claims).toEqual(emptyResearchStore().claims)
  })

  it('surfaces storage write failures instead of reporting success', () => {
    expect(() => saveResearchStore(emptyResearchStore(), { setItem: () => { throw new Error('quota') } })).toThrow('could not be saved')
  })
})