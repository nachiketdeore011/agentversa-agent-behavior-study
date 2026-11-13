<script setup>
import { computed, ref } from 'vue'
import { downloadResearchJson } from '../research/export.js'
import { dashboardMetrics } from '../research/metrics.js'
import { scoreBand } from '../research/model.js'
import { saveResearchStore } from '../research/store.js'

const props = defineProps({ store: { type: Object, required: true } })
const emit = defineEmits(['update'])
const query = ref('')
const statusMessage = ref('')
const metrics = computed(() => dashboardMetrics(props.store))
const filteredScenarios = computed(() => props.store.scenarios.filter((scenario) => {
  const term = query.value.trim().toLowerCase()
  return !term || `${scenario.id} ${scenario.title}`.toLowerCase().includes(term)
}))

function exportJson() {
  try {
    downloadResearchJson(props.store)
    statusMessage.value = 'JSON export generated from stored records.'
  } catch (error) {
    statusMessage.value = error.message
  }
}

function markDocumentationReviewed() {
  const next = { ...props.store, progress: { ...props.store.progress, documentation: 'Completed' } }
  try {
    saveResearchStore(next)
    emit('update', next)
    statusMessage.value = 'Documentation progress marked complete; no research results were changed.'
  } catch (error) {
    statusMessage.value = error.message
  }
}
</script>

<template>
  <div class="research-dashboard">
    <header class="dashboard-hero">
      <div>
        <p class="dashboard-eyebrow">AGENTVERSA / RESEARCH WORKSPACE</p>
        <h1>AgentVersa Research Analytics Dashboard</h1>
        <p>Evidence-oriented tracking for predictions, observations, evaluations, experiments, and claims.</p>
      </div>
      <div class="dashboard-actions">
        <button type="button" @click="$emit('back')">Case review</button>
        <button type="button" class="button-primary" @click="exportJson">Export JSON</button>
      </div>
    </header>

    <p v-if="statusMessage" class="dashboard-status" role="status">{{ statusMessage }}</p>

    <section class="dashboard-section" aria-labelledby="overview-title">
      <div class="dashboard-heading"><div><p class="section-kicker">Stored data</p><h2 id="overview-title">Research overview</h2></div><span class="data-note">No missing values are converted to zero.</span></div>
      <div class="metric-grid">
        <article v-for="item in [
          ['Scenarios', metrics.scenarios], ['Predictions', metrics.predictions], ['Observations', metrics.observations],
          ['Evaluations', metrics.evaluations], ['Experiments', metrics.experiments], ['Evidence', metrics.evidence],
          ['Claims', metrics.claims], ['Pending review', metrics.pendingReview],
        ]" :key="item[0]" class="metric-card"><span>{{ item[0] }}</span><strong>{{ item[1] }}</strong></article>
      </div>
    </section>

    <section class="dashboard-section" aria-labelledby="behaviour-title">
      <div class="dashboard-heading"><div><p class="section-kicker">Eight dimensions / proposed weights</p><h2 id="behaviour-title">Behaviour performance analytics</h2></div><span class="data-note">Samples: {{ metrics.evaluations }}</span></div>
      <div class="dimension-list">
        <div v-for="dimension in metrics.dimensions" :key="dimension.id" class="dimension-row">
          <div><strong>{{ dimension.label }}</strong><span>{{ dimension.weight }}% weight · {{ dimension.sampleCount }} samples</span></div>
          <div class="dimension-score">{{ dimension.average === null ? 'Not evaluated' : `${dimension.average}/100 · ${scoreBand(dimension.average)}` }}</div>
        </div>
      </div>
      <p class="methodology-note">Weights and interpretation bands are proposed research instruments, not validated benchmarks. Automated scores, if added, remain preliminary until human review.</p>
    </section>

    <section class="dashboard-section dashboard-two-column" aria-labelledby="prediction-title">
      <div>
        <div class="dashboard-heading"><div><p class="section-kicker">Prediction lifecycle</p><h2 id="prediction-title">Prediction vs observation</h2></div></div>
        <div class="comparison-grid">
          <div><strong>{{ metrics.pendingObservations }}</strong><span>Observation pending</span></div>
          <div v-for="(count, label) in metrics.comparisonBreakdown" :key="label"><strong>{{ count }}</strong><span>{{ label }}</span></div>
        </div>
        <p class="methodology-note">A mismatch is not automatically poor performance. Comparisons require documented actual outcomes and sufficient evidence.</p>
      </div>
      <div>
        <div class="dashboard-heading"><div><p class="section-kicker">Traceability</p><h2>Evidence and claims</h2></div></div>
        <div class="traceability-summary">
          <p><strong>{{ metrics.supportedClaims }}</strong> claims with supporting mappings</p>
          <p><strong>{{ metrics.contradictoryClaims }}</strong> claims with contradictory mappings</p>
          <p><strong>{{ metrics.claimsWithoutEvidence }}</strong> claims without evidence mappings</p>
        </div>
      </div>
    </section>

    <section class="dashboard-section" aria-labelledby="scenario-title">
      <div class="dashboard-heading"><div><p class="section-kicker">Connected records</p><h2 id="scenario-title">Scenario analysis</h2></div><label class="search-label">Filter scenarios <input v-model="query" type="search" placeholder="Scenario ID or title" /></label></div>
      <div class="table-wrap">
        <table><caption>Scenario register sourced from existing repository research files. Empty fields indicate data not supplied.</caption><thead><tr><th>Scenario</th><th>Source</th><th>Prediction</th><th>Observation</th><th>Evaluation</th><th>Experiment</th></tr></thead>
          <tbody><tr v-for="scenario in filteredScenarios" :key="scenario.id"><th scope="row">{{ scenario.title }}<small>{{ scenario.id }}</small></th><td>{{ scenario.source }}</td><td>{{ props.store.predictions.some((item) => item.scenarioId === scenario.id) ? 'Recorded' : 'Not recorded' }}</td><td>{{ scenario.observationStatus }}</td><td>Not evaluated</td><td>Not started</td></tr></tbody>
        </table>
      </div>
    </section>

    <section class="dashboard-section" aria-labelledby="progress-title">
      <div class="dashboard-heading"><div><p class="section-kicker">Research operations</p><h2 id="progress-title">Progress tracker</h2></div><button type="button" @click="markDocumentationReviewed">Mark documentation reviewed</button></div>
      <div class="progress-grid"><div v-for="(status, area) in props.store.progress" :key="area"><span>{{ area.replaceAll('-', ' ') }}</span><strong>{{ status }}</strong></div></div>
    </section>
  </div>
</template>
