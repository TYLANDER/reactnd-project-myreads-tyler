import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
  getShelfFromBook(book) {
    const bookFound = this.props.books.find(b => b.id === book.id);

    if (bookFound) {
      return bookFound.shelf;
    } else {
      return 'none'
    }
  }

  render() {
    const shelf = this.state.shelf;
    return (<div className="book-shelf-changer">
      <select onChange={event => this.props.handleBookMove(this.props.book, event.target.value)} value={this.getShelfFromBook(this.props.book)}>
        <option value="move" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>);
  }
}

BookshelfChanger.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookMove: PropTypes.func.isRequired
};

export default BookshelfChanger;

<div className="book-shelf-changer">
  <select>
    <option value="move" disabled="disabled">Move to...</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>
</div>