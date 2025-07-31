import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CommentArea from "../components/CommentArea"

describe("after finished promises", () => {
  it("checks if comment area is loading correctly", async () => {
    render(<CommentArea />)
    const commentAreaCheck = await screen.findByTestId("commentArea")
    expect(commentAreaCheck).toBeInTheDocument()
  })
})
