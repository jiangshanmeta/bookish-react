import { Book } from "../type";
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

export interface BookDetailProps {
    book: Book,
}

const BookDetail = ({ book }: BookDetailProps) => {


    return (<div className="detail">
        <h2 className="book-title">{book.name}</h2>
        <p
            className="book-description"
            data-testid="book-description"
        >{book.description || book.name}</p>

        {book.reviews && <ReviewList reviews={book.reviews} />}

        <ReviewForm book={book} />
    </div>)

}

export default BookDetail