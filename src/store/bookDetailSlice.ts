import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "../type";


export const fetchBookDetail = createAsyncThunk<Book, string>("bookDetails/fetch", async (id) => {

    const response = await axios.get(`http://localhost:8080/books/${id}`);
    return response.data
})

export type BookDetailType = {
    book: Book,
    loading: boolean,
    error: boolean
}

const initialState: BookDetailType = {
    book: {
        id: 0,
        name: ""
    },
    loading: false,
    error: false
}

export const bookDetailSlice = createSlice({
    name: "bookDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookDetail.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchBookDetail.fulfilled, (state, action) => {
            state.book = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchBookDetail.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

    }
})

export default bookDetailSlice.reducer