import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import BookList from "../components/BookList"

describe.skip("after finished promises", () => {
  it('checks if the searchbar is working with "witcher" word', async () => {
    render(<BookList />)
    const searchInput = screen.getAllByPlaceholderText("Cerca un libro")
    fireEvent.change(searchInput, { target: { value: "Witcher" } })
    const arrayOfFindings = await screen.findAllByTestId("singleBook")
    expect(arrayOfFindings).toHaveLength(3)
  })
})
