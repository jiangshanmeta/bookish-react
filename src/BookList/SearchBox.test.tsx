import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import SearchBox, { SearchBoxProps } from "./SearchBox"

describe("SearchBox", () => {

    it("renders input", () => {
        const props: SearchBoxProps = {
            term: "",
            onSearch: jest.fn()
        }
        render(<SearchBox {...props} />)

        const input = screen.getByRole("textbox")
        userEvent.type(input, "domain")

        expect(props.onSearch).toHaveBeenCalled()
    })

    it("trim empty strings", () => {
        const props: SearchBoxProps = {
            term: "",
            onSearch: jest.fn()
        }

        render(<SearchBox {...props} />)

        const input = screen.getByRole("textbox")
        userEvent.type(input, '   ');

        expect(props.onSearch).not.toHaveBeenCalled()
    })

})