import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css'

const shelves = [
  {
    key: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    key: 'wantToRead',
    name: 'Want To Read'
  },
  {
    key: 'read',
    name: 'Read'
  }
];

class ListBooks extends Component {

    static propTypes = {
       books: PropTypes.array.isRequired
    }

    state = {
        showSearchPage: false,
        query: ''
      }

    render() {

        const { books, onUpdateShelf } = this.props

        function getBooksForShelf(shelfKey) {
          return books.filter(book => book.shelf === shelfKey);
        }

        console.log(books);

        return(
            <div className="app">
            {this.state.showSearchPage ? (
              <div className="search-books">
                <div className="search-books-bar">
                  <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div>
            ) : (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    { shelves.map((shelf) => (
                      <div key={shelf.key} className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.name}</h2>
                          <div className="bookshelf-books">
                            <ol className="books-grid">
                        <li>
                          { getBooksForShelf(shelf.key).map((book) => (
                            <div key={book.id} className="book">
                              <div className="book-top">
                               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                 <select>
                                  <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading" onClick={() => onUpdateShelf(book, 'currentlyReading')} >Currently Reading</option>
                                    <option value="wantToRead" onClick={() => onUpdateShelf(book, 'wantToRead')} >Want to Read</option>
                                    <option value="read" onClick={() => onUpdateShelf(book, 'read')} >Read</option>
                                    <option value="none" onClick={() => onUpdateShelf(book, '')} >None</option>
                                   </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                             <div className="book-authors">{book.author}</div>
                            </div>
                            ))}
                          </li>
                        </ol>
                        </div>
                      </div>
                    )) }
                  </div>
                </div>
                <div className="open-search">
                  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
              </div>
            )}
          </div>
        )
    }
}

export default ListBooks
