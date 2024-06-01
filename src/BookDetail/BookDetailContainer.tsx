import BookDetail from "./BookDetail";
import { useBook } from "../hooks"

const BookDetailContainer = () => {
    const { book, loading, error } = useBook();

    return <BookDetail book={book} />
}

export default BookDetailContainer