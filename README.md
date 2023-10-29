# MyReads Project Readme

## Project Overview

The MyReads project is an interactive bookshelf app that allows users to organize and categorize their books. This app is built using React and provides a server and client library for persisting book information as users interact with the application.

## App Functionality

### Main Page

The main page of the MyReads app displays a list of "shelves," which represent categories of books. There are three default shelves:

1. **Currently Reading**: Books you are currently reading.
2. **Want to Read**: Books you want to read in the future.
3. **Read**: Books you have already read.

Each book on the main page has a control that enables you to select the shelf for that book. When you choose a different shelf, the book is automatically moved to that category. The default value for the control is always set to the current shelf that the book is in.

### Search Page

The app also includes a search page accessible via a link on the main page. On the search page, you can search for books to add to your library. The search page features:

- A text input for entering search queries.
- Real-time updates: As you type in the search input, books matching your query are displayed on the page.
- A control that allows you to add a book from the search results to your library.

To maintain a consistent user interface, some of the code used to display books on the main page is reused for the search page. When a book is added to your library from the search page, its state remains consistent between the main application page and the search page.

### Navigation
The main page also has a link to /search, a search page that allows you to find books to add to your library.
The search page provides a link to the root URL ("/"), which allows you to return to the main page quickly. When you navigate back to the main page from the search page, you will instantly see all the selections you made on the search page in your library.

## Project Setup

1. Clone the project.

```
git clone https://github.com/ntn1999/nd0191-c1-myreads.git
```

2. Install the dependencies.

```
cd to the nd0191-c1-myreads/starter directory
npm install
```

3. Start the application.

```
npm start
```
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

