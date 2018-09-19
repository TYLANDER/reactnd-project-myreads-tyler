import React, { Component } from 'react'

import './index.css'

class BookShelf extends Component {

state ={};


render() {
    return (
      <div className="bookshelf flex">
        <h4 className="bookshelf-title text-grey-dark font-normal">
          {this.props.shelftitle}
        </h4>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book =>
              <li key={book.id} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select className="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline" value={book.shelf} onChange={e => this.props.onChangeShelf(book.id, e)}>
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
                <div className="book-title">
                  {book.title}
                </div>
                <div className="book-authors">
                  {book.authors &&
                    <div className="book-authors">
                      {book.authors[0]}
                    </div>}
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
