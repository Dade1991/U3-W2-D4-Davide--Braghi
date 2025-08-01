import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import SingleBook from "../components/SingleBook"
import Fantasy from "../data/fantasy.json"

describe.skip("after finished promises", () => {
  it("checks if the selected card border highlight in RED", async () => {
    render(<SingleBook book={Fantasy[0]} />)
    const cardSelected = await screen.findByTestId("card")
    fireEvent.click(cardSelected)
    expect(cardSelected).toHaveStyle("border: 3px solid red")
  })
})
