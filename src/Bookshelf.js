import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Book } from './Book';
import PropTypes from 'prop-types';

export const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {props.title}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            ? props.books.map(book =>
                <Book key={book.id} book={book} onMoveBook={props.onMoveBook} />
              )
            : <li>No book</li>}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.prototype = {
  title: PropTypes.string,
  books: PropTypes.array,
  onMoveBook: PropTypes.func,
};

//manage this.state.allBooks as a single array. Filter books according to shelf in Bookshelf.js
