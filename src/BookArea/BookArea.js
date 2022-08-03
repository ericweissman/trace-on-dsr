import React from 'react';
import Card from '../Card/Card.js';
import MiniCard from '../MiniCard/MiniCard.js';

function BookArea({books, library, remove}) {
  const bookCards = books.splice(0, 3).map(book => <Card key={book.id}
    {...book} remove={remove}/>)

  // const libraryCards = library.map(book => <MiniCard key={"00" + book.id} {...book}/> )
  
  // const trimRead = library.map(book => {
  //   return {
  //     title: book.title,
  //     author: book.author
  //   }
  // })
  
  // const showLibrary = () => {
  //   console.log(trimRead)
  //   return library.map(book => <MiniCard key={"00" + book.id} {...book}/>)
  // } 
  
  return (
    <div>
      <section>
        {bookCards}
      </section>
      {/* <button onClick={showLibrary}>Library</button>
      <section className='library'>
        {libraryCards}
      </section> */}
    </div>
  )
}

export default BookArea;
