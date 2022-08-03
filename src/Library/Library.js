import React, { useState } from 'react';
import MiniCard from '../MiniCard/MiniCard.js';

function Library({library, isHidden}) {
    const [visibility, setVisibility] = useState(isHidden)

    const libraryCards = library.map(book => <MiniCard key={"00" + book.id} {...book}/> )
    
    const trimRead = library.map(book => {
      return {
        title: book.title,
        author: book.author
      }
    })
    
    return (
    <div>
        <div className='button' onClick={() => setVisibility(!visibility)}>bookshelf.</div>
        <section className={visibility ? 'hidden' : 'library'}>
            {visibility ? null : libraryCards}
        </section>
    </div>
    )
  }
  
  export default Library;
  