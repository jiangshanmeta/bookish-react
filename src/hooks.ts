import { useEffect, useState } from 'react';
import { Book } from './type';
import axios from 'axios';
import { useParams } from "react-router"

export const useBooks = () => {
    const [term, setTerm] = useState('')

    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true)
            setError(false);

            try {
                const response = await axios.get(`http://localhost:8080/books?q=${term}&_sort=id`)
                setBooks(response.data);

            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()

    }, [term])

    return {
        loading,
        error,
        books,
        term,
        setTerm
    }

}

export const useBook = () => {
    const { id } = useParams<{ id: string }>()
    const [book, setBook] = useState<Book>({ id: 0, name: "" })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            setLoading(true);
            setError(false)

            try {
                const res = await axios.get(`http://localhost:8080/books/${id}`);
                setBook(res.data)
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false)
            }

        }
        fetchBook()

    }, [id])

    return {
        book,
        loading,
        error
    }

}