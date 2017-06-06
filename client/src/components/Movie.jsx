import React from 'react'

class Movie extends React.Component {

  render(){
    return(
      <div className="movie">
        <h4 className="movieShowtime">
          { this.props.film }
          
        </h4>
        { this.props.children }
      </div>
      )
  }

}

export default Movie