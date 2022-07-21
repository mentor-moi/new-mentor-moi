import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FAQ from './FAQ'

const faqs = [
  {
    id: 1,
    question: "C'est payant ou gratuit ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "C'est payant ou gratuit ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "C'est payant ou gratuit ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "C'est payant ou gratuit ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "C'est payant ou gratuit ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "C'est payant ou gratuit ?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

describe('FAQ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FAQ />, div)
  })

  it('renders the right tilte', () => {
    render(<FAQ />)

    const h2 = document.querySelector('h2')
    expect(h2?.textContent).toEqual('Frequently asked questions')
  })

  it.each(faqs)('Check if Nav Bar have link.', (faq) => {
    render(<FAQ />)

    expect(faq.question).toBeDefined()
    expect(faq.answer).toBeDefined()
  })

  it.each(faqs)('Check if we have 6 FAQS', () => {
    render(<FAQ />)

    expect(faqs).toHaveLength(6)
  })

  it.each(faqs)('Check item in faqs', () => {
    render(<FAQ />)

    expect(faqs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ question: "C'est payant ou gratuit ?" }),
      ])
    )
  })
})
