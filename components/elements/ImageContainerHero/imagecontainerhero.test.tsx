import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageContainerHero from './ImageContainerHero'

describe('HeroHomepage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ImageContainerHero />, div)
  })

  it('Should have 11 images', () => {
    render(<ImageContainerHero />)
    expect(document.querySelectorAll('.select-none').length).toBe(11)
  })
})
