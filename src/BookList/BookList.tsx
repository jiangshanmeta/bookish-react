import { Book } from '../type';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"

export interface BookListProps {
    books: Book[]
}

const BookList = ({ books }: BookListProps) => {
    return (
        <div data-test="book-list">
            <Grid container spacing={3}>
                {
                    books.map((book) => {
                        return (
                            <Grid item xs={4} sm={4} key={book.id} className="book-item">
                                <Card  >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {book.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {book.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            color="primary"
                                        >
                                            <Link href={`/book/${book.id}`}>
                                                View Details
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}


export default BookList