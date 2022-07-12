import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('button', () => {
    render(<Home />)

    const button = screen.getByRole('button', {
      name: /submit/i,
    })

    expect(button).toBeInTheDocument()
  })
})
