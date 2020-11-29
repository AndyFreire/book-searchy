const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: { type: String, required: false },
  image: { type: String },
  link: {type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
