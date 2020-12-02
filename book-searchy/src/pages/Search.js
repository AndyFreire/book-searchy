import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";


function Saved() {

    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");
  
    const handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { value } = event.target;
      setBookSearch(value);
    };
  
    const handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get books update the books state
      event.preventDefault();
      API.searchBooks(bookSearch)
        .then(res => {
          console.log(res);
          const searchedBooks = res.data.items.map(book => {
            const title = book.volumeInfo.title;
            const authors = book.volumeInfo.authors || "";
            const description = book.volumeInfo.description || "";
            const link = book.volumeInfo.infoLink;
            const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://placeholder.com/";
            console.log(image);
  
            return ({
              title: title,
              authors: authors,
              description: description,
              link: link,
              image: image
            })
          });
          setBooks(searchedBooks);
        })
        .catch(err => console.log(err));
    };
    
    return (
        <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search for Books"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <div>
                <h5 className="text-xs-center text-muted w-100">No Books to Display</h5>
              </div>
            ) : (
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                      key={book.title}
                      title={book.title}
                      link={book.link}
                      authors={book.authors}
                      image={book.image}
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container>
    );
}

export default Saved;