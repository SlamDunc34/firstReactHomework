import React from 'react'
import MovieList from './MovieList'

class MovieBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [{
        id:1, film:'Sausage Party', showtime:'9pm'
      },
      {id:2, film:'Equity', showtime:'10pm'}]
    }
  }

  render(){
    return (
    <div className="movie-box">
      <MovieList data={this.state.data}/>
    </div>
    )
  }
}

export default MovieBox