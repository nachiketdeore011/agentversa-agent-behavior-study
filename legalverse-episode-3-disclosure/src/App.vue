<script setup>
import { computed, ref } from 'vue'
import EvidenceCard from './components/EvidenceCard.vue'
import SectionNav from './components/SectionNav.vue'
import { caseData, navigation } from './data/case.js'

const allocation = ref('r3a')
const allocationSummary = computed(() => allocation.value === 'r3a'
  ? 'Planning scenario: R3-A uses 12 of 12 pages today. R3-B and R3-C redaction remain for a later period.'
  : 'Planning scenario: R3-C redaction uses the full work period. R3-A cannot also be reviewed today.')
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to disclosure analysis</a>
  <div class="app-shell">
    <header class="topbar">
      <a class="wordmark" href="#overview" aria-label="LegalVerse Rivergate overview"><span>LV</span> LegalVerse <em>/ disclosure review</em></a>
      <span>{{ caseData.caseId }}</span>
    </header>
    <div class="workspace">
      <aside class="sidebar"><p>Review sections</p><SectionNav :items="navigation" /><div class="advisory"><strong>Advisory workspace</strong><br />Agents provide proposals only. Binding orders and referrals remain with the human panel.</div></aside>
      <main id="main-content" class="main-content">
        <section id="overview" class="hero" aria-labelledby="case-title">
          <p class="eyebrow"><i></i>{{ caseData.status }}</p>
          <h1 id="case-title">{{ caseData.title }}<span>:</span><br />{{ caseData.subtitle }}</h1>
          <p class="lead">{{ caseData.summary }}</p>
          <div class="meta"><div><small>Scenario packet</small><b>The Disclosure Bundle</b></div><div><small>Decision authority</small><b>Human panel</b></div><div><small>Responsibility</small><b>Unresolved</b></div></div>
        </section>

        <section class="section recommendation" aria-labelledby="recommendation-heading">
          <div class="heading"><span>01</span><div><small>Executive recommendation</small><h2 id="recommendation-heading">A staged proposal under a fixed constraint</h2></div></div>
          <div class="recommendation-grid"><article class="recommendation-card"><p class="badge">Proposed action</p><h3>{{ caseData.recommendation.action }}</h3><p>{{ caseData.recommendation.basis }}</p><footer>Human authorization required before disclosure, restriction, postponement, or scope change.</footer></article><dl class="recommendation-facts"><div><dt>Principal risk</dt><dd>{{ caseData.recommendation.risk }}</dd></div><div><dt>Evidence limitations</dt><dd>{{ caseData.recommendation.limits }}</dd></div><div><dt>Timing</dt><dd>{{ caseData.recommendation.timing }}</dd></div><div><dt>Change conditions</dt><dd>{{ caseData.recommendation.change }}</dd></div></dl></div>
        </section>

        <section id="facts" class="section" aria-labelledby="facts-heading"><div class="heading"><span>02</span><div><small>Scope and uncertainty</small><h2 id="facts-heading">What this packet does — and does not — establish</h2></div></div><div class="notice"><strong>Private exhibit contents are unseen.</strong> The packet inventories R3-A through R3-E; it does not provide their underlying private contents to agents. Inventory descriptions are not direct examination.</div><div class="facts-grid"><article v-for="([label, detail]) in caseData.facts" :key="label"><h3>{{ label }}</h3><p>{{ detail }}</p></article></div></section>

        <section id="evidence" class="section" aria-labelledby="evidence-heading"><div class="heading"><span>03</span><div><small>Inventory register</small><h2 id="evidence-heading">Five distinct record categories</h2></div><span class="count">5 items · R3-A—R3-E</span></div><div class="evidence-grid"><EvidenceCard v-for="item in caseData.evidence" :key="item.id" :item="item" /></div></section>

        <section class="section" aria-labelledby="matrix-heading"><div class="heading"><span>04</span><div><small>Proposed categories only</small><h2 id="matrix-heading">Disclosure decision matrix</h2></div></div><div class="table-wrap"><table><caption>Proposed handling is advisory; no disclosure, withholding, or redaction has been completed.</caption><thead><tr><th>Item</th><th>Proposed handling</th><th>Why</th><th>Risk if disclosed</th><th>Risk if withheld</th><th>Next step</th><th>Authority</th><th>Status</th></tr></thead><tbody><tr v-for="row in caseData.matrix" :key="row[0]"><th scope="row">{{ row[0] }}</th><td v-for="cell in row.slice(1)" :key="cell">{{ cell }}</td></tr></tbody></table></div></section>

        <section id="planner" class="section" aria-labelledby="planner-heading"><div class="heading"><span>05</span><div><small>Known capacity</small><h2 id="planner-heading">Deadline and capacity planner</h2></div></div><div class="capacity-layout"><article class="capacity-card"><p class="badge">Today · one reviewer</p><h3>12 pages / one processing work period</h3><div class="capacity-bar"><span></span></div><p>R3-A is 12 pages. R3-B is 6 more pages, so R3-A + R3-B = <b>18 pages</b>, exceeding today’s capacity. R3-C is a 24-person contact sheet, not a page count; its redaction requires another full, mutually exclusive work period.</p></article><fieldset class="allocation"><legend>Local planning scenario</legend><p>Selecting a scenario does not create an operational booking or panel decision.</p><label><input v-model="allocation" value="r3a" type="radio" name="allocation" /> Review R3-A (12 pages)</label><label><input v-model="allocation" value="r3c" type="radio" name="allocation" /> Redact R3-C (full work period)</label><output aria-live="polite">{{ allocationSummary }}</output></fieldset></div><div class="tomorrow"><b>Tomorrow:</b> preliminary hearing and independent confidential-material reviewer availability are supplied. Actual reviewer capacity and processing duration are unknown; all further scheduling is conditional.</div></section>

        <section id="timeline" class="section" aria-labelledby="timeline-heading"><div class="heading"><span>06</span><div><small>Conditional sequence</small><h2 id="timeline-heading">Proposed disclosure timeline</h2></div></div><ol class="timeline"><li v-for="([stage, detail]) in caseData.timeline" :key="stage"><span>{{ stage }}</span><p>{{ detail }}</p></li></ol></section>

        <section id="stakeholders" class="section" aria-labelledby="stakeholder-heading"><div class="heading"><span>07</span><div><small>Competing interests</small><h2 id="stakeholder-heading">Stakeholder impact</h2></div></div><div class="facts-grid"><article v-for="([name, impact]) in caseData.stakeholders" :key="name"><h3>{{ name }}</h3><p>{{ impact }}</p></article></div></section>

        <section id="alternatives" class="section" aria-labelledby="alternative-heading"><div class="heading"><span>08</span><div><small>Trade-offs</small><h2 id="alternative-heading">Alternative approaches</h2></div></div><div class="options"><article v-for="([name, fairness, privacy, downside, authority]) in caseData.alternatives" :key="name"><h3>{{ name }}</h3><dl><div><dt>Fairness & capacity</dt><dd>{{ fairness }}</dd></div><div><dt>Privacy & safety</dt><dd>{{ privacy }}</dd></div><div><dt>Main downside</dt><dd>{{ downside }}</dd></div><div><dt>Human decision</dt><dd>{{ authority }}</dd></div></dl></article></div></section>

        <section id="decisions" class="section" aria-labelledby="decision-heading"><div class="heading"><span>09</span><div><small>Not answered here</small><h2 id="decision-heading">Human decisions required</h2></div></div><ul class="decision-list"><li v-for="item in caseData.decisions" :key="item">{{ item }} <span>Pending human determination</span></li></ul></section>

        <section id="risks" class="section" aria-labelledby="risk-heading"><div class="heading"><span>10</span><div><small>Analytical assessments</small><h2 id="risk-heading">Risk and limitation register</h2></div></div><div class="table-wrap"><table><caption>Severity labels are analytical assessments, not facts supplied by the scenario.</caption><thead><tr><th>Severity</th><th>Risk</th><th>Rationale / uncertainty</th><th>Mitigation proposal</th></tr></thead><tbody><tr v-for="row in caseData.risks" :key="row[1]"><td><span class="severity" :class="row[0].toLowerCase()">{{ row[0] }}</span></td><th scope="row">{{ row[1] }}</th><td>{{ row[2] }}</td><td>{{ row[3] }}</td></tr></tbody></table></div></section>

        <section id="agent-analysis" class="section" aria-labelledby="agent-heading"><div class="heading"><span>11</span><div><small>Research framing</small><h2 id="agent-heading">Risk Analyst decision analysis</h2></div></div><div class="analysis"><article><h3>Prediction, not observation</h3><p>Based on the frozen Version 1 design, the Risk Analyst is predicted to prioritize evidence quality, distinguish unverified claims, protect stakeholders, and escalate human decisions. No actual Episode 3 agent response was supplied, so this dashboard does not claim that prediction was observed.</p></article><article><h3>Practical answer under uncertainty</h3><p>The proposal gives a bounded, resource-aware answer: use R3-A’s full period today, preserve potentially weakening R3-B material for later review, and identify decisions that cannot be made by an agent. It avoids premature consensus, though the panel should guard against process becoming a substitute for a timely fairness decision.</p></article><article><h3>Role and authority limits</h3><p>Agents can analyze, flag uncertainty, and propose safeguards. They cannot issue rulings, contact anyone, access systems, publish information, or make a binding confidentiality or postponement decision.</p></article></div></section>

        <section class="section disclaimer" aria-labelledby="disclaimer-heading"><div class="heading"><span>12</span><div><small>Boundaries</small><h2 id="disclaimer-heading">Limitations and disclaimer</h2></div></div><p>This is a fictional educational simulation using only its supplied charter. No real jurisdictional rules are imported; no action is represented as implemented. The dashboard cannot authorize disclosure, access restricted data, contact anyone, or modify external records. J44 does not prove identity, authorization, or external transfer; R3-D’s label does not decide every page; and R3-E’s stated concern is unverified.</p><footer class="page-footer">LegalVerse · Episode 3 · advisory case-review workspace</footer></section>
      </main>
    </div>
  </div>
</template>
