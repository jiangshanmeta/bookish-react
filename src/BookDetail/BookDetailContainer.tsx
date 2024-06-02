import BookDetail from "./BookDetail";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchBookDetail } from "../store/bookDetailSlice";
import { useParams } from "react-router";

const BookDetailContainer = () => {
    const { id } = useParams<{ id: string }>()

    const { book } = useSelector((state: RootState) => {
        return {
            book: state.detail.book
        }
    })

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchBookDetail(id!))
    }, [dispatch, id])

    return <BookDetail book={book} />
}

export default BookDetailContainer