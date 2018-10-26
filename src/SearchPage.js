import React, {Component} from 'react'
import Book from './book'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
    this.searchForBooks(query);
  }

  searchForBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        searchResults.error
          ? this.setState({searchResults: []})
          : this.setState({searchResults: searchResults});
      })
    } else {
      this.setState({searchResults: []})
    }
  }

  render() {
    console.log('SearchPage Props', this.props)
    return (<main className="search-books">
      <header className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
      </header>
      <section className="search-books-results">
        <ol className="books-grid">
          {
            this.state.searchResults.map((foundBook) => {
              foundBook.shelf = 'none';

              this.props.books.map(book => (
                book.id === foundBook.id
                ? foundBook.shelf = book.shelf
                : ''));

              return (<li key={foundBook.id}>
                <Book book={foundBook} moveBook={this.props.moveBook} currentShelf={foundBook.shelf}/>
              </li>)
            })
          }
        </ol>
      </section>
    </main>);
  }
}

export default SearchPage;
