import { render, screen } from '@testing-library/react'
import BookList, { BookListProps } from './BookList'

describe('BookList', () => {

    it('render books', async () => {
        const props: BookListProps = {
            books: [
                {
                    name: "Refactoring",
                    id: 1,
                },
                {
                    name: "Domain-driven design",
                    id: 2
                },
            ]
        }

        render(<BookList {...props} />)

        const headings = await screen.findAllByRole("heading")
        headings.forEach((heading, index) => {
            expect(heading).toHaveTextContent(props.books[index].name);
        })


    })

})