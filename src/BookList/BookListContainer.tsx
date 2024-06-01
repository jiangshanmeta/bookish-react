import BookList from './BookList';
import { useBooks } from '../hooks';
import SearchBox from "./SearchBox"


const BookListContainer = () => {
    const {
        loading,
        error,
        books,
        term,
        setTerm
    } = useBooks();

    return (
        <div>
            <SearchBox term={term} onSearch={setTerm} />

            <BookList books={books} />
        </div>
    )
}

export default BookListContainer