import { Book } from './type';

export interface BookListProps {
    books: Book[]
}

const BookList = ({ books }: BookListProps) => {
    return (
        <div data-test="book-list">
            {
                books.map((book) => {
                    return (
                        <div className="book-item" key={book.id}>
                            <h2 className="title">{book.name}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default BookList