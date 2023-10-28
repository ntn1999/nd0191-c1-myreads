import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BookShelf = ({ title, books, onSelectShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => (
              <BookItem
                book={book}
                onSelectShelf={onSelectShelf}
                key={book.id}
              ></BookItem>
            ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.prototype = {
  title: PropTypes.string.isRequired,
  onSelectShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookShelf;
