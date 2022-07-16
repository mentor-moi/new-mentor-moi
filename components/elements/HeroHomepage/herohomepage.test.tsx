import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroHomepage from './HeroHomepage'

describe('HeroHomepage', () => {
  it('renders a H1 with Mentor title', () => {
    render(<HeroHomepage />)

    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent('Mentor Moi')
    expect(header).toHaveClass('font-Playfair')
  })

  it('should render a button with the class of primary', () => {
    render(<HeroHomepage />)
    const primaryButton = screen.getByRole('button', {
      name: /Trouver un⸱e mentor/i,
    })
    expect(primaryButton).toHaveClass('bg-darkOrange')
  })
})
