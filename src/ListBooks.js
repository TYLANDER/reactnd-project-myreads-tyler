import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import BookShelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import Book from './book'

class ListBooks extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.defaultState = {
      booksOnShelf: []
    };
    this.state = this.defaultState;
  }

  handleChangeShelf = () => {
    const event = e;
    let temp = this.props.booksOnShelf;
    const book = temp.filter(t => t.id === bookId[0]);
    book.shelf = e.target.value;
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({books: temp});
    });
  };

  render() {
    console.log('Listbook Props', this.props)
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf key="currently" books={this.props.booksOnShelf.filter(book => book.shelf === "currentlyReading")} onChangeShelf={this.handleChangeShelf} shelftitle="Currently Reading"/>
        <BookShelf key="wantToRead" books={this.props.booksOnShelf.filter(book => book.shelf === "wantToRead")} onChangeShelf={this.handleChangeShelf} shelftitle="Want to Read"/>
        <BookShelf key="read" books={this.props.booksOnShelf.filter(book => book.shelf === "read")} onChangeShelf={this.handleChangeShelf} shelftitle="Read"/>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>);
  }
}

export default ListBooks;
