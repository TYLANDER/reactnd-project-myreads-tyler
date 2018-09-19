import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'

import SearchPage from './SearchPage.js'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {
  state = {
    screen: 'search'
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
      <Route path="/" render={() => (<ListBooks onMoveBook={this.handleChangeShelf} booksOnShelf={this.state.books}/>)}/>
      <Route path="/search" render={() => <SearchPage onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books}/>}/>

    </div>)
  }
}

export default BooksApp
