import axios from "axios";

// The getbooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function (query) {
    return axios.get("/api/books");
  },

  searchBooks: function (query) {
    // Call the GoogleBooks API
    let googleBooksAPIKey =process.env.REACT_APP_API_KEY;

    const googleBooksURL= `https://www.googleapis.com/books/v1/volumes?printType=books&maxAllowedMaturityRating=not-mature&q=${query}&key=${googleBooksAPIKey}`;

    return axios.get(googleBooksURL);
  },

  saveBook: function (book) {
    return axios.post("/api/books");
  }
};
