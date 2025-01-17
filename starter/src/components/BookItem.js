import PropTypes from "prop-types";

const BookItem = ({ book, onSelectShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                : "",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => onSelectShelf(book, event.target.value)}
              defaultValue={book.shelf ? book.shelf : "none"}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

BookItem.prototype = {
  book: PropTypes.object.isRequired,
  onSelectShelf: PropTypes.func.isRequired,
};

export default BookItem;
