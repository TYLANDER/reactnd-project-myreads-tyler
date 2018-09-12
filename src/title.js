import React from 'react';
import '../containers/App.css';

export const Title = props => {
  return (
    <div className="list-books-title">
      <h1>
        {props.title}
      </h1>
    </div>
  );
};
