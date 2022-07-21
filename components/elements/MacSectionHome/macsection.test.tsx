import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MacSectionHome from './MacSectionHome'

describe('FAQ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MacSectionHome />, div)
  })

  it('Should display the right name', () => {
    render(<MacSectionHome />)
    const p = document.querySelector('p')
    expect(p?.textContent).toEqual('Aissa Cissé')
  })

  it('renders message from mentor', () => {
    render(<MacSectionHome />)

    const heading = screen.getByText(
      /Bonjour Tony, comment faire pour être Développeuse Backend ?/i
    )

    expect(heading).toBeInTheDocument()
  })
})
