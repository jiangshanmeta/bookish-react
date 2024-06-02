import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Review } from "../type"
import ReviewItem from "./ReviewItem"

const genTestReviewData = (): Review => {
    return {
        id: 1,
        bookId: 1,
        name: "Juntao",
        date: "2023/06/21",
        content: "Excellent"
    }
}

describe("ReviewItem", () => {

    it("renders", () => {

        render(<ReviewItem review={genTestReviewData()} />)


        expect(screen.getByTestId("name")).toHaveTextContent("Juntao")
        expect(screen.getByTestId("review-content")).toHaveTextContent("Excellent")

    })


    it("edit a review item", () => {
        render(<ReviewItem review={genTestReviewData()} />)

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent("Edit")

        act(() => {
            userEvent.click(button)
        })

        expect(button).toHaveTextContent("Submit")
    });

    it("copy content to a textarea for editing", () => {

        render(<ReviewItem review={genTestReviewData()} />)

        const button = screen.getByRole('button');

        const content = screen.getByTestId("review-content");
        expect(content).toBeInTheDocument()

        act(() => {
            userEvent.click(button)
        })

        const editingContent = screen.getByRole("textbox");
        expect(content).not.toBeInTheDocument()

        expect(editingContent).toBeInTheDocument();
        expect(editingContent).toHaveValue("Excellent")

    })



})