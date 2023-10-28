import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import ListBooks from "./ListBooks";
import SearchPage from "./SearchPage.js";
import * as BooksAPI from "../utils/BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);
  const [booksSearch, setbooksSearch] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const onSelectShelf = async (book, shelf) => {
    const res = await BooksAPI.update(book, shelf);
    if (res) {
      const isHaveBookOnShelf = books.some(item => item.id === book.id);
      if (isHaveBookOnShelf) {
        books.forEach((item) => {
          if (item.id === book.id) {
            item.shelf = shelf;
          }
        });
        setBooks([...books]);
      } else {
        setBooks([...books, {...book, shelf}]);
      }
    }
  };

  const onSearchBook = async (query) => {
    let res = await BooksAPI.search(query);
    if (!query || res.hasOwnProperty("error")) {
      setbooksSearch([]);
      return;
    }
    if (books.length > 0) {
      res = res.map((item) => {
        const bookOnShelf = books.find((book) => book.id === item.id);
        if (bookOnShelf) {
          return { ...item, shelf: bookOnShelf.shelf };
        } else {
          return { ...item, shelf: "none" };
        }
      });
      setbooksSearch(res);
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ListBooks books={books} onSelectShelf={onSelectShelf} />}
      />
      <Route
        path="/search"
        element={
          <SearchPage
            onSelectShelf={onSelectShelf}
            onSearchBook={onSearchBook}
            booksSearch={booksSearch}
          />
        }
      />
    </Routes>
  );
};

export default App;
