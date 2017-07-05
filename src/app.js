'use strict'
import React from 'react';
import { render } from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

import logger from 'redux-logger';

import BooksList from './components/pages/bookslist'

render(
  <BooksList />, document.getElementById('app')
);

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.dispatch(postBooks(
  [{
    id: 1,
    title: 'Book Title 1',
    description: 'Book snippet...',
    price: 3.13
  },{
    id: 2,
    title: 'Book Title 2',
    description: 'Book snippet...',
    price: 13.87
  }]
));

store.dispatch(deleteBooks(
  {id: 1}
))

store.dispatch(updateBooks(
  {
    id: 2,
    title: 'Learn React in 24h'
  }
))

store.dispatch(addToCart([{id: 1}]));
