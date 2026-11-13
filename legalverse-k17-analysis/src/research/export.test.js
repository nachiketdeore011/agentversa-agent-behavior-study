import { describe, expect, it } from 'vitest'
import { downloadResearchJson, serializeResearchStore } from './export.js'

describe('research export', () => {
  it('serializes methodology and source data', () => {
    const output = serializeResearchStore({ claims: [] }, '2026-01-01T00:00:00.000Z')
    expect(output).toContain('"generatedAt": "2026-01-01T00:00:00.000Z"')
    expect(output).toContain('no missing scores are imputed')
  })

  it('rejects export when browser APIs are unavailable', () => {
    expect(() => downloadResearchJson({}, null, null)).toThrow('unavailable')
  })
})