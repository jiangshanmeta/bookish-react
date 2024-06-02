import { Book } from "../type";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addReview } from "../store/reviewSlice";
import { fetchBookDetail } from "../store/bookDetailSlice";


const ReviewForm = ({ book }: { book: Book }) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("")

    const dispatch = useDispatch<AppDispatch>();
    return (
        <form noValidate autoComplete="off">
            <TextField
                name="name"
                data-testid="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <TextField
                name="content"
                data-testid="content"
                value={content}
                onChange={e => setContent(e.target.value)}
            />

            <Button
                data-testid="submit"
                name="submit"
                onClick={() => {
                    dispatch(addReview({
                        id: book.id,
                        name,
                        content,
                    }))

                    dispatch(fetchBookDetail(String(book.id)));
                }}
            >
                Submit
        </Button>
        </form>
    )
}

export default ReviewForm