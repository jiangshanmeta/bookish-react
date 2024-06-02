import TextField from "@mui/material/TextField"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { fetchBooks, setTerm } from "../store/bookListSlice";



const SearchBox = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <TextField
            label="Search"
            data-test="search"
            onChange={(e) => {
                const value = e.target.value;
                if (value.trim().length === 0) {
                    return;
                }

                dispatch(setTerm(value));
                dispatch(fetchBooks(value));
            }}
            margin="normal"
            variant="outlined"
        />
    )
}

export default SearchBox