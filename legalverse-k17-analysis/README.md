# LegalVerse K17 Analysis

A local, evidence-led review dashboard for the Episode 2 scenario, “The K17 Dilemma: Clock Discrepancies and Accountability.” This application is a separate project and does not modify or form part of the AgentVersa research repository.

The interface distinguishes supplied facts, interpretations, limitations, and advisory recommendations. It does not make legal findings or represent any evidence retrieval as completed.

## Prerequisites

- Node.js 22.12 or newer (required by the test runner)
- npm (included with Node.js)

## Setup and run

From this directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Checks

```sh
npm test
npm run build
```

To serve the production build locally after building:

```sh
npm run preview
```

## Project structure

```text
index.html
src/
  App.vue                 Page structure and analysis sections
  App.test.js             UI, evidence, content, navigation, and recommendation tests
  main.js                 Vue application entry point
  style.css               Responsive and accessible dashboard styling
  components/
    EvidenceCard.vue      Reusable evidence register item
    SectionNav.vue        Section navigation links
  data/
    case.js               Structured scenario facts, limits, options, and analysis
vite.config.js             Vite, Vue, and Vitest configuration
```

## Known limitations

- The supplied materials name R2-A through R2-E but do not provide each item's contents. The register makes that absence explicit and does not guess an item-to-fact mapping.
- The independent authentication source, native job manifest, and staging-folder access history have not been retrieved or documented by this application.
- The clock values 09:14:10 and 09:16:20 are shown as hypothetical corrected timestamps only. The drift start and consistency are unknown.
- This static, local application is not legal advice, a backend evidence system, or a finding of fact. The human panel retains binding decision-making authority.
