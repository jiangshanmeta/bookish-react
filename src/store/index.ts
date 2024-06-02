import { configureStore } from "@reduxjs/toolkit"
import bookListReducer from "./bookListSlice"
import bookDetailReducer from "./bookDetailSlice"

const store = configureStore({
    reducer: {
        list: bookListReducer,
        detail: bookDetailReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch