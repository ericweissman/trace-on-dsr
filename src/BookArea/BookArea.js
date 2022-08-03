import React from 'react';
import Card from '../Card/Card.js';
import MiniCard from '../MiniCard/MiniCard.js';

function BookArea({books, library, remove}) {
  const bookCards = books.splice(0, 3).map(book => <Card key={book.id}
    {...book} remove={remove}/>)
  
  return (
    <div>
      <section>
        {bookCards}
      </section>
    </div>
  )
}

export default BookArea;
