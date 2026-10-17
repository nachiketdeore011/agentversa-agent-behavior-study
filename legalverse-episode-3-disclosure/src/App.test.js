import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'
import { caseData, navigation } from './data/case.js'

describe('LegalVerse Episode 3 disclosure review', () => {
  const wrapper = mount(App)

  it('identifies the Rivergate Episode 3 scenario and advisory status', () => {
    expect(wrapper.text()).toContain('Evaluating Disclosure Protocols in Rivergate')
    expect(wrapper.text()).toContain('Justice Under Pressure')
    expect(wrapper.text()).toContain('LV · EPISODE 3 · RIVERGATE')
    expect(wrapper.text()).toContain('Binding orders and referrals remain with the human panel')
  })

  it('renders all five R3 evidence categories with inventory and unseen-content limits', () => {
    expect(wrapper.findAll('.evidence-card')).toHaveLength(5)
    for (const item of caseData.evidence) expect(wrapper.text()).toContain(item.id)
    expect(wrapper.text()).toContain('underlying private contents to agents')
    expect(wrapper.text()).toContain('Inventory descriptions are not direct examination')
  })

  it('keeps the page calculation and contact-sheet distinction correct', () => {
    expect(wrapper.text()).toContain('12 pages / one processing work period')
    expect(wrapper.text()).toContain('R3-A + R3-B = 18 pages')
    expect(wrapper.text()).toContain('24-person contact sheet, not a page count')
    expect(wrapper.text()).toContain('mutually exclusive work period')
  })

  it('enforces the exclusive planning choices for today', async () => {
    const choices = wrapper.findAll('input[type="radio"]')
    expect(choices).toHaveLength(2)
    expect(wrapper.text()).toContain('R3-A uses 12 of 12 pages today')
    await choices[1].setValue()
    expect(wrapper.text()).toContain('R3-C redaction uses the full work period')
    expect(wrapper.text()).toContain('R3-A cannot also be reviewed today')
  })

  it('does not treat R3-D or R3-E claims as verified findings', () => {
    expect(wrapper.text()).toContain('does not determine the status of every page')
    expect(wrapper.text()).toContain('Temporary restricted handling pending independent review and human determination')
    expect(wrapper.text()).toContain('no threat is independently verified')
  })

  it('preserves meaningful response and potentially weakening material in the proposal', () => {
    expect(wrapper.text()).toContain('meaningful time to understand and respond')
    expect(wrapper.text()).toContain('potentially weaken the allegation')
    expect(wrapper.text()).toContain('Postpone or narrow the preliminary hearing')
  })

  it('provides working accessible navigation links', () => {
    const links = wrapper.findAll('.section-nav a')
    expect(links).toHaveLength(navigation.length)
    for (const item of navigation) expect(wrapper.find(`.section-nav a[href="#${item.id}"]`).exists()).toBe(true)
    expect(wrapper.find('.skip-link').attributes('href')).toBe('#main-content')
  })

  it('labels every matrix state as proposed or pending rather than completed', () => {
    expect(wrapper.findAll('tbody tr').length).toBeGreaterThanOrEqual(13)
    for (const row of caseData.matrix) expect(['Proposed', 'Pending']).toContain(row[7])
    expect(wrapper.text()).toContain('no disclosure, withholding, or redaction has been completed')
  })
})
