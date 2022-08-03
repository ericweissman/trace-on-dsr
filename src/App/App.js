import React, { useState, useEffect } from 'react';
import BookArea from '../BookArea/BookArea.js'
import Library from '../Library/Library.js'
import { allBooks } from '../list.js'

const App = () => {
  const [books, setBooks] = useState(allBooks)

  const removeBook = (id) => {
    const cleanedBooks = books.filter(book => book.id !== id);
    setBooks(cleanedBooks);
  }

  const unread = books.filter(book => !book.read);
  const read = books.filter(book => book.read).sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="App">
      <h1>bookclub.</h1>
      <BookArea
        books={unread}
        remove={removeBook}
        library={read}
      />
      <Library 
        library={read}
        isHidden={true}
      />
    </div>
  )
}

export default App;
