import { render, screen } from "@testing-library/react";
import BookDetail, { BookDetailProps } from "./BookDetail"
import { Provider } from "react-redux"
import store from "../store"

const renderWithProvider = (component: JSX.Element) => {

    return {
        ...render(
            <Provider store={store}>
                {component}
            </Provider>
        )
    }

}

describe("BookDetail", () => {

    it("renders title", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring"
            }
        };

        renderWithProvider(<BookDetail {...props} />)

        const title = screen.getByRole("heading")
        expect(title.innerHTML).toBe(props.book.name)
    })

    it("renders description", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring",
                description: "Martin Fowler's book"
            },
        }

        renderWithProvider(<BookDetail {...props} />)

        expect(screen.getByText(props.book.description!)).toBeInTheDocument()
    })

    it("displays the book name when no description was given", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring"
            },
        };

        renderWithProvider(<BookDetail {...props} />)

        const description = screen.getByTestId("book-description");
        expect(description).toHaveTextContent(props.book.name)

    })


    it("renders reviews", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring",
                reviews: [
                    {
                        id: 1,
                        bookId: 1,
                        name: "Juntao",
                        date: "2023/06/21",
                        content: "whatever",
                    }
                ],
            },

        };

        renderWithProvider(<BookDetail {...props} />)

        const reviews = screen.getAllByTestId("review");
        expect(reviews.length).toBe(1);

        expect(screen.getByTestId("review-content")).toHaveTextContent("whatever")

    });

    it("renders review form", () => {
        const props: BookDetailProps = {
            book: {
                id: 1,
                name: "Refactoring"
            },
        };

        renderWithProvider(<BookDetail {...props} />)

        const nameInput = screen.getByTestId("name")
        const contentInput = screen.getByTestId("content")
        const button = screen.getByTestId("submit")

        expect(nameInput).toBeInTheDocument();
        expect(contentInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();


    });

})