# Tyler's MyReads Project

The MyReads project creates a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. This template saved Tyler time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. Tyler chose to start with the template forked from the Udacity repository, and add interactivity to the app by refactoring the static code in this repository.

[Create React App](https://github.com/facebookincubator/create-react-app) was used to bootstrap the project.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


A good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed. I'm gonna do that too.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
