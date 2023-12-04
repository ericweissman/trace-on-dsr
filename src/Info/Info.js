import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
  const {title, author, description, pages, published, stars, short_desc, showInfo, handleChange} = props;
  const removeBtnStyle = {
    height: '22px',
    width: '22px',
    margin: '15px',
    backgroundImage: `url('../../../icons/icon.svg')`,
    cursor: 'pointer',
    opacity: '50%',
  }
  return ReactDOM.createPortal(
    <div className={showInfo ? 'modal' : 'hidden'}>
      <div className="info">
        <h3>{title}</h3>
        <h4>by {author}</h4>
        <div className="basic-info">
          <p>{pages} pages</p>
          <p>published {published}</p>
          <p>{stars} stars</p>
        </div>
        <div className="descriptions">
          <p className="short-desc">{short_desc}</p>
          <p className="long-desc">{description}</p>
        </div>
          <div className="showInfo">
            <button style={removeBtnStyle} onClick={(event) => handleChange(event)}>
            </button>
          </div>
        </div>
    </div>,
    document.getElementById('portal-root')
  )
}


export default Info;
