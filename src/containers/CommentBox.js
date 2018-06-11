import React, {Component} from 'react'
import CommentList from '../components/CommentList'

class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, film: "Sausage Party"},
        {id: 2, film: "Café Society"},
        {id: 3, film: "Morgan"},
        {id: 4, film: "The 9th Life of Louis Drax"},
        {id: 5, film: "Naam Hai Akira"},
        {id: 6, film: "Equity"},
        {id: 7, film: "Things to Come"}
      ]
    }
  }




  render(){
    return(
       <div className="comment-box">
         <h2>UK Opening This Week</h2>
         <CommentList data={this.state.data}/>
       </div>
     )
  }
}

export default CommentBox;
