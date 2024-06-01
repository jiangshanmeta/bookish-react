import TextField from "@mui/material/TextField"

export interface SearchBoxProps {
    term: string;
    onSearch: (term: string) => void;
}

const SearchBox = ({ term, onSearch }: SearchBoxProps) => {
    return (
        <TextField
            label="Search"
            value={term}
            data-test="search"
            onChange={(e) => {
                const value = e.target.value;
                if (value.trim().length === 0) {
                    return;
                }

                onSearch(value)
            }}
            margin="normal"
            variant="outlined"
        />
    )
}

export default SearchBox