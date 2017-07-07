'use strict'
import axios from 'axios';

//GET BOOK
export function getBooks() {
  return {
            type: 'GET_BOOKS',
          }
}

//POST A BOOK
export function postBooks(book) {
  return function(dispatch) {
    axios.post('/books', book)
    .then(function(response) {
      dispatch({type:'POST_BOOK', payload:response.data})
    })
    .catch(function(err) {
      dispatch({type:'POST_BOOK_REJECTED', payload: 'there was an error while posting a new book'})
    })
  }
}

// DELETE A BOOK
export function deleteBooks(id) {
  return {
            type: 'DELETE_BOOK',
            payload: id
          }
}

// UPDATE A BOOK
export function updateBooks(book) {
  return {
            type: 'UPDATE_BOOK',
            payload: book
          }
}
