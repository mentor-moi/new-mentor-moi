import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Testimonial from './Testimonial'

describe('FAQ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Testimonial />, div)
  })

  it('Check if Nav Bar have link.', () => {
    render(<Testimonial />)
    const p = document.querySelector('p')
    expect(p?.textContent).toEqual(
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”'
    )
  })
})
