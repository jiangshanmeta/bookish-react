import { render, screen } from "@testing-library/react"
import ReviewList from "./ReviewList"

describe("renders an empty list", () => {

    it("renders an empty list", () => {
        render(<ReviewList reviews={[]} />)
        expect(screen.getByTestId("reviews-container")).toBeInTheDocument()
    })

    it("renders a list when data is passed", () => {

        render(<ReviewList
            reviews={[
                {
                    id: 1,
                    bookId: 1,
                    name: "Juntao",
                    date: "2023/06/01",
                    content: "whatever",
                },
                {
                    id: 2,
                    bookId: 1,
                    name: "Kim",
                    date: "2023/06/22",
                    content: "great book"
                }
            ]}
        />)

        const items = screen.getAllByTestId("review")

        expect(items.length).toBe(2)
    })

    it("renders book review detail information", () => {
        render(<ReviewList
            reviews={[
                {
                    id: 1,
                    bookId: 1,
                    name: "Juntao",
                    date: "2023/06/01",
                    content: "whatever",
                },
            ]}
        />)

        expect(screen.getByTestId("name")).toHaveTextContent("Juntao")
        expect(screen.getByTestId("review-content")).toHaveTextContent("whatever")

    })

})

