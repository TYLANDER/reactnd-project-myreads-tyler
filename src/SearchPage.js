import React, { Component } from 'react'
import * as BooksAPI from "./BooksAPI"
import { Link } from "react-router-dom"
import "./App.css"
import './index.css'



class SearchPage extends Component {

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
  		this.setState({ query })
  		if(query) {
  			BooksAPI.search(query).then(books => {
  				if (books.length >= 1) {
  					this.setState({ showingBooks: books })
  				} else {
  					this.setState({ showingBooks: [] })
  				}
  			})
  		}
  		if (query === '') {
  			this.setState(state =>
  				({ query: '', showingBooks: [] })
  			)
  		}
  	}

  	handleChange = (e) => {
  		e.preventDefault()
  		let value = e.target.value
  		let bookID = e.target.closest('li').classList[0]
  		this.props.addToShelf(value, bookID)
  	}

    render(){
  		return(
  			<div className="search-books">
  				<div className="search-books-bar">
  					<Link className="close-search" to="/">Close</Link>
  					<div className="search-books-input-wrapper">
  						<input
  							type="text"
  							placeholder="Search by title or author"
  							value={this.state.query}
  							onChange={(e) => this.updateQuery(e.target.value)}
  						/>
  					</div>
  				</div>
  				<div className="search-books-results">
  					<ol className="books-grid">
  					{this.state.showingBooks.length === 0 && this.state.query !== '' && (
  						<div>No books in our database match your search. Please try a new search term.</div>
  					)}
  					{this.state.showingBooks.length === 0 && this.state.query === '' && (
  						<li></li>
  					)}
  					{this.state.showingBooks.map((book) =>
  					    <li key = {book.id} className={book.id}>
  					      <div className="book">
  					        <div className="book-top">
  					          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`}}></div>
  					          <div className="book-shelf-changer">
  					            <select onChange={this.handleChange} defaultValue={book.shelf || 'none'}>
  					              <option value="move" disabled>Move to...</option>
  					              <option value="currentlyReading">Currently Reading</option>
  					              <option value="wantToRead">Want to Read</option>
  					              <option value="read">Read</option>
  					              <option value="none">None</option>
  					            </select>
  					          </div>
  					        </div>
  					        <div className="book-title">{book.title}</div>
  					        <div className="book-authors">{book.authors}</div>
  					      </div>
  					    </li>
  					)}
  					</ol>
  				</div>
  			</div>

  		)
  	}
  }

export default SearchPage
