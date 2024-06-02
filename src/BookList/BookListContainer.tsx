import BookList from './BookList';
import SearchBox from "./SearchBox"
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchBooks } from "../store/bookListSlice"
import { useEffect } from 'react';


const BookListContainer = () => {
    const { books } = useSelector((state: RootState) => {
        return {
            books: state.list.books
        }
    })

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchBooks(""))
    }, [dispatch])

    return (
        <div>
            <SearchBox />

            <BookList books={books} />
        </div>
    )
}

export default BookListContainer