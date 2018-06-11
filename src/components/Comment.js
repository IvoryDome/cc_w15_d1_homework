import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
      <p className="comment-film">
        {props.film}
      </p>

    </div>

  )

}


export default Comment;
