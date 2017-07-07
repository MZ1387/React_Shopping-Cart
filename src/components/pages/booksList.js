'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Carousel, Grid, Col, Row, Button } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart'

class BooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const booksList = this.props.books.map(function(booksArr) {
      return (
        <Col xs={12} sm={6} md ={4} key={booksArr._id}>
          <BookItem
            _id={booksArr._id}
            title={booksArr.title}
            description={booksArr.description}
            images={booksArr.images}
            price={booksArr.price}
          />
        </Col>
      )
    });

    return(
      <Grid>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="https://assets.entrepreneur.com/content/3x2/1300/20150903173413-books-shop-fair-library-used-bookshelf-literature-study-textbooks.jpeg"/>
              <Carousel.Caption>
                <h3>Welcome to The BookShop</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="https://assets.entrepreneur.com/content/3x2/1300/20150903173413-books-shop-fair-library-used-bookshelf-literature-study-textbooks.jpeg"/>
              <Carousel.Caption>
                <h3>Welcome to The BookShop</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Cart />
        </Row>
        <Row style={{marginTop:'15px'}}>
            {booksList}
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBooks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
