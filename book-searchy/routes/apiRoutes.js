const router = require("express").Router();
const db = require("../models");

// * `/api/books` (get) - Should return all saved books as JSON.

// * `/api/books` (post) - Will be used to save a new book to the database.

// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.


router.get("/api/books", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Book.find({})
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

router.post("/api/books", (req, res) => {
    db.Book.create(req.body)
    .then(console.log("Book created successfully!"));
});

router.delete("/api/books/:id", (req, res) => {
    db.Book.findByID({ _id: req.params.id})
    .then(book => book.remove())
    .then(book => res.json(book))
    .catch(err => res.status(422).json(err));
})

module.exports = router;
