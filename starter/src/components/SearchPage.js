import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import { DebounceInput } from "react-debounce-input";

const SearchPage = ({ booksSearch, onSearchBook, onSelectShelf }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <DebounceInput
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => onSearchBook(event.target.value)}
            debounceTimeout={500}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksSearch.length > 0 &&
            booksSearch.map((book) => (
              <BookItem
                book={book}
                key={book.id}
                onSelectShelf={onSelectShelf}
              ></BookItem>
            ))}
        </ol>
      </div>
    </div>
  );
};

SearchPage.prototype = {
  books: PropTypes.array.isRequired,
  onSearchBook: PropTypes.func.isRequired,
  onSelectShelf: PropTypes.func.isRequired,
};

export default SearchPage;
