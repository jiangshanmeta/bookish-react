import { useState } from "react";
import { Review } from "../type"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const ReviewItem = ({ review }: { review: Review }) => {
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState(review.content)

    return (
        <div data-testid="review">
            <div data-testid="name">{review.name}</div>
            {
                editing ? <TextField
                    name="content"
                    label="Content"
                    margin="normal"
                    variant="outlined"
                    multiline
                    value={content}
                    onChange={(e) => setContent(e.target.value)}

                /> : <div data-testid="review-content">{review.content}</div>
            }


            <Button onClick={() => setEditing(!editing)}>
                {editing ? "Submit" : "Edit"}
            </Button>
        </div>
    )
}

export default ReviewItem