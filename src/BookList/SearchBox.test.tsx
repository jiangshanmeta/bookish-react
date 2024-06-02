import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import SearchBox from "./SearchBox"
import { configureStore } from "@reduxjs/toolkit"
import bookListReducer from "../store/bookListSlice"
import { Provider } from "react-redux";

const createMockStore = () => {
    return configureStore({
        reducer: {
            list: bookListReducer,
        }
    });
}

describe("SearchBox", () => {

    it("renders input", () => {


        const mockStore = createMockStore()

        render(
            <Provider store={mockStore}>
                <SearchBox />
            </Provider>
        )

        const input = screen.getByRole("textbox")
        userEvent.type(input, "domain")

        const state = mockStore.getState();

        expect(state.list.term).toEqual("domain")
    })

    it("trim empty strings", () => {
        const mockStore = createMockStore()

        render(
            <Provider store={mockStore}>
                <SearchBox />
            </Provider>
        )

        const input = screen.getByRole("textbox")
        userEvent.type(input, '   ');

        const state = mockStore.getState();
        expect(state.list.term).toEqual("")
    })

})