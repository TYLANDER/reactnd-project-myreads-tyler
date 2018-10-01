import React, {Component} from 'react';

class Changer extends Component {
	state = {
		value: 'none'
	}

	// handleChange(event) {
  //   this.setState({value: event.target.value})
	//   this.props.moveBook(
	//   	this.props.book, event.target.value
	// 	)
  // }

	render () {
		return(
			<div className="book-shelf-changer">
				<select

					//ternary to check for book shelf prop
					value = { this.props.shelf ?
						this.props.shelf :
						this.state.value
					}


					onChange={this.handleChange}

					onChange={ (event) =>
						this.props.moveBook(
						this.props.book, event.target.value
					)}
				>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>

				</select>
			</div>
		);
	}
}

export default Changer;
