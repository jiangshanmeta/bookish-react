import { Book } from "../type";

export interface BookDetailProps {
    book: Book
}

const BookDetail = ({ book }: BookDetailProps) => {

    return (<div className="detail">
        <h2 className="book-title">{book.name}</h2>
        <p
            className="book-description"
            data-testid="book-description"
        >{book.description || book.name}</p>
    </div>)

}

export default BookDetail