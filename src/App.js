import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import './App.css'
import Book from './book.js'
import SearchPage from './SearchPage.js'
import ListBooks from './ListBooks.js'
import BookShelfChanger from './BookShelfChanger.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    screen: 'search',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  handleChangeShelf = (book : any, shelf : string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    })
  }

  getBooksOnShelf() {
    BooksAPI.getAll().then(book => {
      this.setState(state => ({
        books: state.books.concat([book])
      }))
    })
  }

  render() {
    return (<div className="app">
      /* eslint-disable */
      <Route exact="exact" path="/" render={() => (<ListBooks onMoveBook={this.handleChangeShelf} books={this.state.books}/>)}/>
      <Route path="/search" component={SearchPage}/>
      /* eslint-enable */
    </div>)
  }
}

export default BooksApp
