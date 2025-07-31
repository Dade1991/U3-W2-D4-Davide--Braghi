import Welcome from "../components/Welcome"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe(`Testing initial mounting`, () => {
  it(`checks if Welcome component is in the DOM`, () => {
    render(<Welcome />)
    const welcomeText = screen.getByText(/Benvenuti in EpiBooks!/i)
    expect(welcomeText).toBeInTheDocument()
  })
})
