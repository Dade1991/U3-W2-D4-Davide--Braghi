import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import BookList from "../components/BookList"
import Fantasy from "../data/fantasy.json"

describe("after finished promises", () => {
  it('checks if the searchbar is working with "witcher" word', async () => {
    render(<BookList books={Fantasy} />)
    const searchInput = screen.getByPlaceholderText("Cerca un libro")
    fireEvent.change(searchInput, { target: { value: "witcher" } })
    const arrayOfFindings = await screen.findAllByTestId("card")
    expect(arrayOfFindings).toHaveLength(3)
  })

  it("checks if the selected card border highlight in RED", async () => {
    render(<BookList books={Fantasy} />)
    const cardSelected = await screen.findAllByTestId("card")
    fireEvent.click(cardSelected[0])
    expect(cardSelected[0]).toHaveStyle("border: 3px solid red")
  })
})
