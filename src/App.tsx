import Typography from "@mui/material/Typography"
import { Routes, Route } from "react-router-dom"
import BookListContainer from './BookList/BookListContainer'
import BookDetailContainer from './BookDetail/BookDetailContainer'

function App() {
  return (
    <div>
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >
        Bookish
      </Typography>

      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/book/:id" element={<BookDetailContainer />} />
      </Routes>


    </div>
  );
}

export default App;
