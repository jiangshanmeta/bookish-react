import App from "./App"
import { customRender } from "./testUtil"
import { screen } from "@testing-library/react"

it("renders bookish", () => {

    customRender(<App />)


    const heading = screen.getByText(/Bookish/i);
    expect(heading).toBeInTheDocument()

})