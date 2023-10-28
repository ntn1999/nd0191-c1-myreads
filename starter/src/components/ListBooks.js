import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const ListBooks = ({ books, onSelectShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
          onSelectShelf={onSelectShelf}
        ></BookShelf>
        <BookShelf
          title="Want to Read"
          books={books.filter((book) => book.shelf === "wantToRead")}
          onSelectShelf={onSelectShelf}
        ></BookShelf>
        <BookShelf
          title="Read"
          books={books.filter((book) => book.shelf === "read")}
          onSelectShelf={onSelectShelf}
        ></BookShelf>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onSelectShelf: PropTypes.func.isRequired,
};

export default ListBooks;
