import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import { caseData, navigation } from './data/case.js'

describe('K17 evidence review', () => {
  const wrapper = mount(App)

  it('renders the five evidence register items with explicit unavailable detail', () => {
    const cards = wrapper.findAll('.evidence-card')
    expect(cards).toHaveLength(5)
    expect(cards.map((card) => card.find('.evidence-code').text())).toEqual([
      'R2-A',
      'R2-B',
      'R2-C',
      'R2-D',
      'R2-E',
    ])
    expect(wrapper.text()).toContain('Item-level details not supplied')
    expect(cards[0].text()).toContain('does not describe its contents')
  })

  it('renders critical clock, provenance, access, screenshot, and attribution qualifications', () => {
    const text = wrapper.text()
    expect(text).toContain('A server clock was found six minutes slow at noon')
    expect(text).toContain('09:14:10')
    expect(text).toContain('09:16:20')
    expect(text).toContain('hypothetical')
    expect(text).toContain('not proof of tampering')
    expect(text).toContain('does not establish who performed remote access')
    expect(text).toContain('does not independently prove')
    expect(text).toContain('does not establish unauthorized access')
  })

  it('provides unique valid navigation targets for every section link', () => {
    const ids = [...wrapper.element.querySelectorAll('[id]')].map((element) => element.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)

    const links = [...wrapper.element.querySelectorAll('.section-nav a')]
    expect(links).toHaveLength(navigation.length)
    for (const link of links) {
      const targetId = link.getAttribute('href').slice(1)
      expect(ids.filter((id) => id === targetId)).toHaveLength(1)
    }
  })

  it('shows the independent authentication recommendation and manifest priority caveat', () => {
    const recommendation = wrapper.find('#recommendation')
    expect(recommendation.text()).toContain(caseData.recommendation.choice)
    expect(recommendation.text()).toContain('native job manifest')
    expect(recommendation.text()).toContain('240 records')
    expect(recommendation.text()).toContain('human panel retains binding decision-making authority')
    expect(recommendation.text()).toContain('no retrieval is represented as completed')
  })

  it('compares all three retrieval options without claiming any was completed', () => {
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
    for (const option of caseData.options) {
      expect(wrapper.text()).toContain(option.name)
      expect(wrapper.text()).toContain(option.status)
    }
  })
})
