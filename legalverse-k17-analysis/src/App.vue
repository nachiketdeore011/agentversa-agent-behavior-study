<script setup>
import EvidenceCard from './components/EvidenceCard.vue'
import SectionNav from './components/SectionNav.vue'
import { caseData, navigation } from './data/case.js'
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to case analysis</a>
  <div class="app-shell">
    <header class="topbar">
      <a class="wordmark" href="#overview" aria-label="LegalVerse K17 case overview">
        <span class="wordmark__mark" aria-hidden="true">LV</span>
        <span>LegalVerse <span class="wordmark__muted">/ Evidence review</span></span>
      </a>
      <span class="topbar__case">{{ caseData.caseId }}</span>
    </header>

    <div class="workspace">
      <aside class="sidebar">
        <div class="sidebar__label">Review sections</div>
        <SectionNav :items="navigation" />
        <div class="authority-note">
          <span class="authority-note__icon" aria-hidden="true">i</span>
          <p>Analysis is advisory. Binding decisions remain with the human panel.</p>
        </div>
      </aside>

      <main id="main-content" class="main-content">
        <section id="overview" class="case-hero" aria-labelledby="case-title">
          <div class="case-hero__eyebrow">
            <span class="status-dot" aria-hidden="true"></span>
            {{ caseData.status }}
            <span class="eyebrow-divider" aria-hidden="true">/</span>
            Episode 2
          </div>
          <h1 id="case-title">{{ caseData.title }}<span>:</span><br />{{ caseData.subtitle }}</h1>
          <p class="case-hero__summary">{{ caseData.overview.summary }}</p>
          <div class="hero-meta">
            <div>
              <span class="meta-label">Case reference</span>
              <strong>{{ caseData.caseId }}</strong>
            </div>
            <div>
              <span class="meta-label">Decision authority</span>
              <strong>Human panel</strong>
            </div>
            <div>
              <span class="meta-label">Current posture</span>
              <strong>No adverse finding</strong>
            </div>
          </div>
        </section>

        <section class="content-section" aria-labelledby="overview-heading">
          <div class="section-heading">
            <span class="section-index">01</span>
            <div>
              <p class="section-kicker">Context</p>
              <h2 id="overview-heading">Case overview</h2>
            </div>
          </div>
          <div class="overview-grid">
            <div class="overview-panel">
              <h3>Constraints on this review</h3>
              <ul class="constraint-list">
                <li v-for="item in caseData.overview.constraints" :key="item">{{ item }}</li>
              </ul>
            </div>
            <aside class="authority-panel">
              <span class="panel-kicker">Decision-making authority</span>
              <p>{{ caseData.overview.authority }}</p>
            </aside>
          </div>
        </section>

        <section id="evidence" class="content-section" aria-labelledby="evidence-heading">
          <div class="section-heading">
            <span class="section-index">02</span>
            <div>
              <p class="section-kicker">Available record</p>
              <h2 id="evidence-heading">Evidence register</h2>
            </div>
            <span class="section-count">5 items · R2-A—R2-E</span>
          </div>
          <div class="notice notice--neutral">
            <strong>Item-level details not supplied</strong>
            <p>
              The scenario materials provided for this review name R2-A through R2-E but do not
              describe the individual exhibits. Their contents are not inferred here. Known
              scenario-wide observations are recorded separately below.
            </p>
          </div>
          <div class="evidence-grid">
            <EvidenceCard v-for="item in caseData.evidence" :key="item.id" :item="item" />
          </div>
          <div class="known-observations">
            <div class="subsection-heading">
              <p class="section-kicker">Scenario facts and limits</p>
              <h3>Observations available in the brief</h3>
            </div>
            <div class="observation-grid">
              <article
                v-for="observation in caseData.knownObservations"
                :key="observation.label"
                class="observation-card"
              >
                <span class="observation-card__label">{{ observation.label }}</span>
                <p><strong>Fact</strong>{{ observation.fact }}</p>
                <p><strong>Interpretation</strong>{{ observation.interpretation }}</p>
                <p><strong>Limit</strong>{{ observation.caution }}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="clock-analysis" class="content-section" aria-labelledby="clock-heading">
          <div class="section-heading">
            <span class="section-index">03</span>
            <div>
              <p class="section-kicker">Time integrity</p>
              <h2 id="clock-heading">Clock discrepancy analysis</h2>
            </div>
          </div>
          <div class="clock-panel">
            <div class="clock-panel__measured">
              <span class="panel-kicker">Measured at noon</span>
              <strong>−06:00</strong>
              <span>Server clock was six minutes slow</span>
            </div>
            <div class="clock-panel__body">
              <span class="hypothetical-label">Illustrative only · not verified event times</span>
              <div class="hypothetical-times">
                <div v-for="time in caseData.clockAnalysis.hypothetical" :key="time.value">
                  <span>{{ time.label }}</span>
                  <strong>{{ time.value }}</strong>
                </div>
              </div>
              <p>{{ caseData.clockAnalysis.explanation }}</p>
            </div>
          </div>
        </section>

        <section id="comparison" class="content-section" aria-labelledby="options-heading">
          <div class="section-heading">
            <span class="section-index">04</span>
            <div>
              <p class="section-kicker">Possible next steps</p>
              <h2 id="options-heading">Evidence comparison</h2>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <caption>
                Comparison of three available evidence-gathering options. None is represented as
                completed.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  <th scope="col">Potential value</th>
                  <th scope="col">Limitation</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="option in caseData.options" :key="option.name">
                  <th scope="row">
                    <span class="option-name">{{ option.name }}</span>
                    <span class="option-purpose">{{ option.purpose }}</span>
                  </th>
                  <td>{{ option.value }}</td>
                  <td>{{ option.limitation }}</td>
                  <td><span class="status-tag">{{ option.status }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="timeline" class="content-section" aria-labelledby="timeline-heading">
          <div class="section-heading">
            <span class="section-index">05</span>
            <div>
              <p class="section-kicker">Chronology</p>
              <h2 id="timeline-heading">Timeline</h2>
            </div>
          </div>
          <p class="section-intro">
            The timeline distinguishes the clock observation from event timestamps and marks where
            chronology cannot currently be confirmed.
          </p>
          <ol class="timeline">
            <li
              v-for="item in caseData.timeline"
              :key="item.title"
              class="timeline__item"
              :class="`timeline__item--${item.kind}`"
            >
              <span class="timeline__marker" aria-hidden="true"></span>
              <div>
                <span class="timeline__category">{{ item.category }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.detail }}</p>
              </div>
            </li>
          </ol>
        </section>

        <section id="themis-analysis" class="content-section" aria-labelledby="themis-heading">
          <div class="section-heading">
            <span class="section-index">06</span>
            <div>
              <p class="section-kicker">Attribution & integrity</p>
              <h2 id="themis-heading">Themis-JDS analysis</h2>
            </div>
          </div>
          <div class="analysis-list">
            <article v-for="item in caseData.themis" :key="item.label" class="analysis-row">
              <h3>{{ item.label }}</h3>
              <p>{{ item.detail }}</p>
            </article>
          </div>
        </section>

        <section
          id="recommendation"
          class="content-section recommendation-section"
          aria-labelledby="recommendation-heading"
        >
          <div class="section-heading">
            <span class="section-index">07</span>
            <div>
              <p class="section-kicker">Advisory only</p>
              <h2 id="recommendation-heading">Recommendation</h2>
            </div>
          </div>
          <div class="recommendation-card">
            <div class="recommendation-card__badge">Recommended next step</div>
            <h3>{{ caseData.recommendation.choice }}</h3>
            <p>{{ caseData.recommendation.rationale }}</p>
            <div class="recommendation-card__alternative">
              <span class="panel-kicker">Priority-dependent alternative</span>
              <p>{{ caseData.recommendation.alternative }}</p>
            </div>
            <p class="recommendation-card__authority">{{ caseData.recommendation.authority }}</p>
          </div>
        </section>

        <section id="safeguards" class="content-section" aria-labelledby="safeguards-heading">
          <div class="section-heading">
            <span class="section-index">08</span>
            <div>
              <p class="section-kicker">Responsible handling</p>
              <h2 id="safeguards-heading">Limitations and safeguards</h2>
            </div>
          </div>
          <ul class="safeguard-list">
            <li v-for="item in caseData.safeguards" :key="item">{{ item }}</li>
          </ul>
          <footer class="page-footer">
            <span>LegalVerse · K17 evidence review</span>
            <span>Scenario analysis, not legal advice or a finding of fact</span>
          </footer>
        </section>
      </main>
    </div>
  </div>
</template>
