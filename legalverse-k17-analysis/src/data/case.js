export const caseData = {
  title: 'The K17 Dilemma',
  subtitle: 'Clock Discrepancies and Accountability',
  caseId: 'LV · EPISODE 2 · K17',
  status: 'Evidence review',
  overview: {
    summary:
      'A review of disputed timing and accountability surrounding a reported export of 240 records. The available information raises verification questions; it does not establish who performed remote access or whether the export succeeded.',
    constraints: [
      'A server clock was found six minutes slow at noon. When the drift began and whether it was consistent are unknown.',
      'A matching checksum at collection and receipt does not establish that source data was authentic before collection.',
      'Staging-folder access history is undocumented. That gap does not establish unauthorized access.',
      'The human panel retains binding decision-making authority. Agent recommendations are advisory only.',
    ],
    authority:
      'The human panel makes the binding decision. This review identifies evidentiary limits and advisory next steps; it makes no adverse finding.',
  },
  evidence: [
    {
      id: 'R2-A',
      observation:
        'The supplied scenario brief identifies this item by code only; it does not describe its contents.',
      limitation:
        'No item-level source, timestamp, or contents were supplied for this exhibit.',
      significance:
        'Its evidentiary weight cannot be assessed without the underlying record and provenance.',
    },
    {
      id: 'R2-B',
      observation:
        'The supplied scenario brief identifies this item by code only; it does not describe its contents.',
      limitation:
        'No item-level source, timestamp, or contents were supplied for this exhibit.',
      significance:
        'No inference about export activity or attribution can be tied to this code from the available brief.',
    },
    {
      id: 'R2-C',
      observation:
        'The supplied scenario brief identifies this item by code only; it does not describe its contents.',
      limitation:
        'No item-level source, timestamp, or contents were supplied for this exhibit.',
      significance:
        'Its relationship to the reported events remains unassessed pending item-level detail.',
    },
    {
      id: 'R2-D',
      observation:
        'The supplied scenario brief identifies this item by code only; it does not describe its contents.',
      limitation:
        'No item-level source, timestamp, or contents were supplied for this exhibit.',
      significance:
        'The code alone supports no finding about timing, access, or responsibility.',
    },
    {
      id: 'R2-E',
      observation:
        'The supplied scenario brief identifies this item by code only; it does not describe its contents.',
      limitation:
        'No item-level source, timestamp, or contents were supplied for this exhibit.',
      significance:
        'Its reliability and relevance cannot be independently evaluated from the code alone.',
    },
  ],
  knownObservations: [
    {
      label: 'Clock check',
      fact: 'At noon, the server clock was found six minutes slow.',
      interpretation:
        'This establishes an offset at the time of the check only; it does not establish the offset at earlier events.',
      caution:
        'The start time and consistency of the drift are unknown. The two corrected times below are hypothetical.',
    },
    {
      label: 'Checksum comparison',
      fact: 'The checksum matched at collection and receipt.',
      interpretation:
        'The compared copies matched across those points.',
      caution:
        'There is no pre-collection checksum in the supplied facts. The match does not prove pre-collection authenticity; the missing checksum is a provenance limitation, not proof of tampering.',
    },
    {
      label: 'Screenshot',
      fact: 'A cropped screenshot is referenced in the scenario.',
      interpretation:
        'It may show a displayed interface state.',
      caution:
        'The crop does not independently establish that an export completed or that 240 records were successfully exported.',
    },
    {
      label: 'Badge record',
      fact: 'A badge record is referenced in the scenario.',
      interpretation:
        'It can relate to a badge event only.',
      caution:
        'It does not establish who performed remote access.',
    },
    {
      label: 'Staging-folder history',
      fact: 'Access history for the staging folder is undocumented.',
      interpretation:
        'The available record does not document that access history.',
      caution:
        'The documentation gap alone is not evidence that access was unauthorized.',
    },
  ],
  clockAnalysis: {
    measuredOffset: 'Six minutes slow at the noon check',
    hypothetical: [
      { label: 'Hypothetical corrected time', value: '09:14:10' },
      { label: 'Hypothetical corrected time', value: '09:16:20' },
    ],
    explanation:
      'These examples add six minutes to the corresponding displayed times, assuming—only for illustration—that the noon offset also applied unchanged at those earlier moments. The drift start and consistency are unknown, so neither value is a verified event time.',
  },
  options: [
    {
      name: 'Acquire the native job manifest',
      purpose:
        'Inspect the native job record relevant to the reported export.',
      value:
        'Could be the most useful immediate step if the priority is verifying the claim that 240 records were exported.',
      limitation:
        'Its contents, availability, and ability to establish completion or actor identity are not specified.',
      status: 'Not acquired',
    },
    {
      name: 'Retrieve an independent authentication source',
      purpose:
        'Seek an independent source relevant to authentication and attribution.',
      value:
        'Provides a separate line of evidence to assess alongside the disputed chronology and access claims.',
      limitation:
        'The source is not identified in the supplied brief, and retrieval or corroboration is not guaranteed.',
      status: 'Not retrieved',
    },
    {
      name: 'Document staging-folder access history',
      purpose:
        'Establish what access history can be documented for the staging folder.',
      value:
        'Addresses a stated documentation gap and may help clarify access chronology.',
      limitation:
        'The history is currently undocumented; that fact does not establish unauthorized access.',
      status: 'Not documented',
    },
  ],
  timeline: [
    {
      category: 'Recorded-time caveat',
      title: 'Two event times are under review',
      detail:
        'The supplied scenario gives hypothetical corrected values of 09:14:10 and 09:16:20, but does not provide the underlying recorded values or associate either time with a particular event.',
      kind: 'uncertain',
    },
    {
      category: 'Independently observed',
      title: 'Noon clock check',
      detail:
        'The server clock was found six minutes slow at noon. The check does not establish when the drift began or whether it remained constant.',
      kind: 'independent',
    },
    {
      category: 'Independently sourced events',
      title: 'No independent event timestamps supplied',
      detail:
        'The scenario brief does not provide independently sourced event times with which to confirm the chronology.',
      kind: 'unknown',
    },
    {
      category: 'Chronology unresolved',
      title: 'Event ordering remains uncertain',
      detail:
        'Without item-level records and a validated clock-drift history, the relative timing of the relevant events cannot be established here.',
      kind: 'uncertain',
    },
  ],
  themis: [
    {
      label: 'Attribution',
      detail:
        'The badge record does not prove who performed remote access. The supplied facts do not establish the identity of the remote actor.',
    },
    {
      label: 'Chain of custody and provenance',
      detail:
        'A matching checksum at collection and receipt supports a match between those copies, not the authenticity of the source before collection. The absent pre-collection checksum is a provenance limitation, not proof of tampering.',
    },
    {
      label: 'Screenshot',
      detail:
        'The cropped screenshot does not independently prove successful completion of the reported export or the number of records exported.',
    },
    {
      label: 'Clock and chronology',
      detail:
        'A six-minute slow reading at noon cannot be assumed to describe earlier clock behavior. The proposed corrected times are hypothetical only.',
    },
  ],
  recommendation: {
    choice: 'Retrieve an independent authentication source',
    rationale:
      'This is the recommended next step because independent authentication evidence may help evaluate attribution without treating the badge record, screenshot, or uncertain clock correction as conclusive.',
    alternative:
      'If the panel’s immediate priority is specifically to verify whether 240 records were exported, acquiring the native job manifest could be more useful. The priority should guide the choice; no retrieval is represented as completed.',
    authority:
      'Advisory recommendation only. The human panel retains binding decision-making authority.',
  },
  safeguards: [
    'Separate reported allegations, direct observations, interpretations, and recommendations.',
    'Preserve uncertainty where source contents, clock drift, attribution, or chronology are not established.',
    'Do not infer unauthorized access, successful export, tampering, or individual responsibility from the current information.',
    'Maintain confidentiality and limit access to scenario materials to authorized reviewers.',
    'Keep a documented chain of custody for any future collection and record source, handling, and transfer details.',
    'Require human review before any binding decision or adverse finding.',
    'Treat agent analysis as advisory; no agent votes, confidence scores, legal rules, or retrieval outcomes are asserted.',
  ],
}

export const navigation = [
  { id: 'overview', label: 'Case overview' },
  { id: 'evidence', label: 'Evidence register' },
  { id: 'clock-analysis', label: 'Clock analysis' },
  { id: 'comparison', label: 'Evidence options' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'themis-analysis', label: 'Themis-JDS analysis' },
  { id: 'recommendation', label: 'Recommendation' },
  { id: 'safeguards', label: 'Limitations & safeguards' },
]
