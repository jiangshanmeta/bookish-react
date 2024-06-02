const path = require("path")
const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const bodyParser = require("body-parser")

server.use((req, res, next) => {
    if (req.method === "DELETE" && req.query['_cleanup']) {
        const db = router.db;
        db.set('books', []).write()
        res.sendStatus(204)

    } else {
        next()
    }

})
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.post("/books/:id/reviews", (req, res) => {
    const { id } = req.params;
    console.log("ssssssss", req.body)
    const { name, content } = req.body;

    const book = router.db.get("books").find({
        id: +id,
    }).value();

    if (book) {
        if (!book.reviews) {
            book.reviews = [];
        }
        const review = {
            id: book.reviews.length + 1,
            bookId: +id,
            name,
            content
        }
        book.reviews.push(review)
        router.db.write()

        res.status(200).json(review)
    } else {
        res.status(404).json({ error: "Book not found" })
    }


});

server.delete("/books/:id/reviews", (req, res) => {
    const { id } = req.params;
    const book = router.db.get("books").find({
        id: +id,
    }).value();
    if (book) {
        book.reviews = [];
        router.db.write()
    }



    res.status(200).json({})
})


server.use(middlewares)
server.use(router)

server.listen(8080, () => {
    console.log("JSON server is running")
})
