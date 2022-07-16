import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageContainerHero from './ImageContainerHero'

describe('HeroHomepage', () => {
  it('renders a mentor text', () => {
    render(<ImageContainerHero />)

    const heading = screen.getByText(/Mentors/i)

    expect(heading).toBeInTheDocument()
  })

  it('Should have 14 images', () => {
    render(<ImageContainerHero />)
    expect(document.querySelectorAll('.select-none').length).toBe(14)
  })
})
