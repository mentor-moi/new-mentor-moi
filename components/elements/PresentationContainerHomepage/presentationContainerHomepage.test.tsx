import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PresentationContainerHomepage from './PresentationContainerHomepage'
import {
  SearchIcon,
  MailIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline'
import Navbar from '../Navbar/Navbar'

const features = [
  { name: 'Trouvez votre mentor', icon: SearchIcon },
  { name: 'Message au mentor', icon: MailIcon },
  { name: 'Débutez ensemble', icon: DesktopComputerIcon },
]

describe('HeroHomepage', () => {
  it('renders a presentation text', () => {
    render(<PresentationContainerHomepage />)

    const h2 = document.querySelector('h2')
    expect(h2?.textContent).toEqual(
      'À portée de main : un coach de carrière dédié.'
    )
  })

  it.each(features)('Check if Nav Bar have link.', (link) => {
    render(<Navbar />)

    expect(link.name).toBeDefined()
  })

  it.each(features)('Check if we have 3 features', () => {
    render(<Navbar />)

    expect(features).toHaveLength(3)
  })

  it.each(features)('Check item in features', () => {
    render(<Navbar />)

    expect(features).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Trouvez votre mentor' }),
      ])
    )
  })
})
