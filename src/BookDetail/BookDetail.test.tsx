import { render, screen } from "@testing-library/react";
import BookDetail, { BookDetailProps } from "./BookDetail"

describe("BookDetail", () => {

    it("renders title", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring"
            }
        };

        render(<BookDetail {...props} />)

        const title = screen.getByRole("heading")
        expect(title.innerHTML).toBe(props.book.name)
    })

    it("renders description", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring",
                description: "Martin Fowler's book"
            }
        }

        render(<BookDetail {...props} />)

        expect(screen.getByText(props.book.description!)).toBeInTheDocument()
    })

    it("displays the book name when no description was given", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring"
            }
        };

        render(<BookDetail {...props} />)

        const description = screen.getByTestId("book-description");
        expect(description).toHaveTextContent(props.book.name)

    })

})