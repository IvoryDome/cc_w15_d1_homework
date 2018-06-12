import React, {Component} from 'react'
import FilmList from '../components/FilmList'

class FilmBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, movie: "Sausage Party", text: "show times"},
        {id: 2, movie: "Café Society", text: "show times"},
        {id: 3, movie: "Morgan", text: "show times"},
        {id: 4, movie: "The 9th Life of Louis Drax", text: "show times"},
        {id: 5, movie: "Naam Hai Akira", text: "show times"},
        {id: 6, movie: "Equity", text: "show times"},
        {id: 7, movie: "Things to Come", text: "show times"}
      ]
    }
  }


  render(){
    return(
       <div className="film-box">
         <h2>UK Opening This Week</h2>
         <FilmList data={this.state.data}/>
       </div>
     )
  }
}

export default FilmBox;
