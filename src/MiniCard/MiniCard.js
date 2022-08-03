import React, { useState } from 'react';

const MiniCard = (props) => {
  const {id} = props;
  const cardStyle = {
    backgroundImage: `url(../../../photos/${id}.jpeg)`,
    opactiy: '0.4'
  }

  return (
    <div key={id} className="mini-book-card" style={cardStyle}>
    </div>
    )
  }


export default MiniCard;
