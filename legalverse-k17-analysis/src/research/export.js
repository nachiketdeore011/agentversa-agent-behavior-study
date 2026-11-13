export function serializeResearchStore(store, generatedAt = new Date().toISOString()) {
  return JSON.stringify({
    generatedAt,
    methodology: 'Stored records only; no missing scores are imputed.',
    data: store,
  }, null, 2)
}

export function downloadResearchJson(store, documentRef = globalThis.document, urlRef = globalThis.URL) {
  if (!documentRef?.createElement || !urlRef?.createObjectURL || !urlRef?.revokeObjectURL) {
    throw new Error('JSON export is unavailable in this environment.')
  }
  const link = documentRef.createElement('a')
  const objectUrl = urlRef.createObjectURL(new Blob([serializeResearchStore(store)], { type: 'application/json' }))
  link.href = objectUrl
  link.download = 'agentversa-research-export.json'
  link.click()
  urlRef.revokeObjectURL(objectUrl)
}