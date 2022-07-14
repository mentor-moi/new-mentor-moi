import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

const navigation = [
  { name: 'Accueil', href: '#', current: true },
  { name: 'Mentors', href: '#', current: false },
  { name: 'Test', href: '#', current: false },
  { name: 'Test', href: '#', current: false },
]

describe('Navbar', () => {
  // it('renders a register text', () => {
  //   render(<Navbar />)

  //   const heading = screen.getByText(/Profil/i)

  //   expect(heading).toBeInTheDocument()
  // })

  it.each(navigation)('Check if Nav Bar have link.', (link) => {
    render(<Navbar />)
    const linkDom = screen.getByText(link.name)

    expect(linkDom).toHaveAttribute('href', link.href)
  })

  it('Check if have logo and link to home page', () => {
    render(<Navbar />)
    const logoImg = screen.getByRole('img', {
      name: /logo-mentor-desktop/i,
    })

    const logoText = screen.getByTestId('logo')

    expect(logoText).toHaveAttribute('href', '/')

    expect(logoImg).toBeInTheDocument()
  })

  it('Label should open the menu', () => {
    render(<Navbar />)

    userEvent.click(screen.getByLabelText('Open menu'))
  })
})
