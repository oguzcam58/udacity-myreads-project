import React, { Component } from 'react'
import BookItem from './BookItem'

class BooksOnTheShelf extends Component {
  render() {
    const { shelves } = this.props
    let currentlyReading = shelves.get('currentlyReading')
    let wantToRead = shelves.get('wantToRead')
    let read = shelves.get('read')

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { currentlyReading && currentlyReading.map(book => (
                  <li key={book.id}>
                    <BookItem
                      title={book.title}
                      authors={book.authors.join(", ")}
                      url={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { wantToRead && wantToRead.map(book => (
                  <li key={book.id}>
                    <BookItem
                      title={book.title}
                      authors={book.authors.join(", ")}
                      url={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { read && read.map(book => (
                  <li key={book.id}>
                    <BookItem
                      title={book.title}
                      authors={book.authors.join(", ")}
                      url={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default BooksOnTheShelf