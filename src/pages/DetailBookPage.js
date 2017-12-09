import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from 'api/BooksAPI';
import { BookCover, BookInfo } from 'components/Book';

class DetailBookPage extends Component {
  state = {
    book: null,
  };

  componentDidMount() {
    const { match: { params } } = this.props;

    BooksAPI.get(params.bookId).then(book => {
      this.setState({ book });
    });
  }

  render() {
    const { book } = this.state;
    return (
      book && (
        <div
          style={{
            maxWidth: '800px',
            padding: '20px',
            margin: 'auto',
          }}
        >
          <div>
            <div>
              <h1 style={{ marginBottom: 0 }}>{book.title}</h1>
              <div style={{ marginBottom: '20px' }}>{book.subtitle}</div>
              <div
                style={{
                  float: 'left',
                  textAlign: 'center',
                  paddingRight: '30px',
                }}
              >
                <BookCover
                  bookId={book.id}
                  thumbnail={book.imageLinks.thumbnail}
                />
              </div>

              <BookInfo title="Description" description={book.description} />
              <BookInfo title="Authors" description={book.authors} />
              <BookInfo title="Publisher" description={book.publisher} />
              <BookInfo
                title="Published Date"
                description={book.publishedDate}
              />
              <BookInfo title="Pages" description={book.pageCount} />
              <BookInfo title="Categories" description={book.categories} />
              <BookInfo title="Language" description={book.language} />
            </div>
          </div>
        </div>
      )
    );
  }
}

DetailBookPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DetailBookPage;
