import AllTheBooks from "../components/AllTheBooks"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("intial load", () => {
  it("checks if all the cards has been correctly loaded", async () => {
    render(<AllTheBooks />)
    const arrayOfBookList = await screen.findAllByTestId("book-list")
    expect(arrayOfBookList.length).toBeGreaterThanOrEqual(150)
  })
})
