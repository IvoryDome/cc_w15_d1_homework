import React from 'react';

const Film = (props) => {
  return (
    <div className="film">
      <h4 className="film-movie">
        {props.movie}
      </h4>
      <p>
        {props.children}
      </p>
    </div>

  )

}


export default Film;
