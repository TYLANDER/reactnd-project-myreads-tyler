import React, {Component} from 'react';
import Changer from './Changer';

class Book extends Component {
  constructor(props) {
  super(props);
  let book = this.props.book;
  this.hasThumbnail = this.hasThumbnail.bind(book);
}
  render() {
    let hasThumbnail =
    this.props.book.imageLinks ?
      this.props.book.imageLinks.thumbnail :
      '';

    return (
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${hasThumbnail}")` }}></div>
        <Changer
          book = {this.props.book}
          moveBook = {this.props.moveBook}
          shelf ={ this.props.book.shelf}
          />
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">{this.props.book.authors}</div>
    </div>);
  }
}

export default Book;
