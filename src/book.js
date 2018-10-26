import React, {Component} from 'react';
import Changer from './Changer';

class Book extends Component {
  constructor(props) {
    super(props);
    let book = this.props.book;
    this.hasThumbnail = this.hasThumbnail.bind(book);
  }
  render() {
    console.log('Book Props', this.props)
    let hasThumbnail = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : '';

    return (<div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${hasThumbnail}")`
          }}></div>
        <p>
          {this.props.book}
          {this.props.moveBook}
          {this.props.book.shelf}
        </p>
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">{this.props.book.authors}</div>
    </div>);
  }
}
