# LegalVerse Episode 3 — Rivergate disclosure review

A standalone Vue 3/Vite dashboard for the fictional educational scenario **“Evaluating Disclosure Protocols in Rivergate — Justice Under Pressure.”** It is separate from the Episode 2 K17 application.

The workspace presents an evidence-led, non-binding staged disclosure proposal. It distinguishes packet inventory from unseen contents, facts from unverified statements, agent proposals from human decisions, and page-review capacity from the separate contact-sheet redaction task.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

## Verify

```sh
npm test
npm run build
```

## Features

- Five-item R3 evidence register with disclosure concerns, uncertainty, and proposed handling.
- Proposed disclosure matrix, conditional timeline, stakeholder impact, alternatives, human-decision list, and risk register.
- Local capacity-planning control that enforces the mutually exclusive choice between reviewing R3-A and redacting R3-C today.
- Semantic sections, skip navigation, visible focus states, responsive navigation, and print styling.

## Important limitations

- This is a fictional educational simulation, not legal advice.
- The underlying private contents of R3-A through R3-E are not available in the packet and are never invented here.
- The J44 manifest does not establish actor identity, authorization, misconduct, or an external transfer.
- R3-D’s label is a confidentiality claim, not a determination; R3-E’s concern is documented but unverified.
- No dashboard interaction implements a disclosure, redaction, postponement, contact, access request, or human decision.
