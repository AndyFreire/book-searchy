import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API

// BookListItem renders a bootstrap list item containing data from the book api call
export function BookListItem({
  image,
  title,
  authors,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Authors: {authors}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Read More!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
