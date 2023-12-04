import React, { useState } from 'react';
import MiniCard from '../MiniCard/MiniCard.js';

function Library({library, unread, isHidden}) {
    const [visibility, setVisibility] = useState(isHidden)
    const [collection, setCollection] = useState('')
    const libraryCards = library.map(book => <MiniCard key={"00" + book.id} {...book}/> )
    const unreadCards = unread.map(book => <MiniCard key={"00" + book.id} {...book}/> )

    const adjustCollection = (collection) => {
      setVisibility(!visibility);
      setCollection(collection);
    }

    return (
    <div>
        <div classNane='button-section'>
           <button className='button' onClick={() => adjustCollection(libraryCards)}>bookshelf.</button>
           <button className='button' onClick={() => adjustCollection(unreadCards)}>unread.</button>
        </div>
        <section className={visibility ? 'hidden' : 'show-cards'}>
            {visibility ? null : collection}
        </section>
    </div>
    )
  }
  
  export default Library;
  