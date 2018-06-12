import React from 'react';
import Film from './Film';

const FilmList = (props) => {

  const filmNodes = props.data.map(film => {
      return (
        <Film
          movie={film.movie}
          key={film.id}
          >
            {film.text}
          </Film>
      )
  })



  return (
    <div className="film-list">
      {filmNodes}
    </div>
  )

}

export default FilmList;
