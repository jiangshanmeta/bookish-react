import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Review } from '../type';
export type AddReviewRequest = {
    id: number,
    name: string;
    content: string;
}

export const addReview = createAsyncThunk<Review, AddReviewRequest>("reviews/addReview",
    async ({ id, name, content }: AddReviewRequest) => {
        try {
            const response = await axios.post(`http://localhost:8080/books/${id}/reviews`, {
                name,
                content
            })

            return response.data;
        } catch (e) {
            throw e;
        }

    })





export type ReviewStateType = {
    loading: boolean,
    error: boolean,
}

const initialState: ReviewStateType = {

    loading: false,
    error: false
}



export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addReview.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
        });

        builder.addCase(addReview.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(addReview.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })

    }
})


export default reviewSlice.reducer