import bookListReducer, { setTerm, AppState } from "./bookListSlice"

describe("bookListReducer", () => {
    const initialState: AppState = {
        books: [],
        loading: false,
        error: false,
        term: "",
    }

    it("should handle setTerm action", () => {
        const action = setTerm("Refactoring")

        const newState = bookListReducer(initialState, action);

        expect(newState.term).toBe("Refactoring")
    })

})