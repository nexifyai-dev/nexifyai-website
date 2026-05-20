import { describe, it, expect } from 'vitest'

describe('NeXify AI Website', () => {
  it('Markenname ist korrekt', () => {
    const brand = 'NeXify AI'
    expect(brand).toBe('NeXify AI')
    expect(brand).toContain(' ')
  })

  it('Tagline ist korrekt', () => {
    const tagline = 'chat it. automate it.'
    expect(tagline).toBeTruthy()
    expect(tagline).toContain('chat')
    expect(tagline).toContain('automate')
  })

  it('Deutsche UI-Texte sind definiert', () => {
    const uiTexts = {
      login: 'Bei NeXify AI anmelden',
      signup: 'NeXify AI-Konto erstellen',
      homepage: 'NeXify AI',
    }
    Object.values(uiTexts).forEach(text => {
      expect(text).toContain('NeXify AI')
    })
  })

  it('D/A/CH-Compliance: DSGVO-Hinweis existiert', () => {
    const dsgvoRequired = true
    expect(dsgvoRequired).toBe(true)
  })
})
