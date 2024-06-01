import { useEffect, useState } from 'react';
import { Book } from './type';
import axios from 'axios';

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true)
            setError(false);

            try {
                const response = await axios.get("http://localhost:8080/books")
                setBooks(response.data);

            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()

    }, [])

    return {
        loading,
        error,
        books
    }

}

export default useBooks;