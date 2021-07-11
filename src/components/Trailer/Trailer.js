import { render } from '@testing-library/react';
import React from 'react';
import './Trailer.css';


class Trailer extends React.Component {
  constructor() {
    super()
    this.state = {
      trailers: ''
      
    }
  }
  
  componentDidMount() {
    let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    let movieUrl = url + this.props.id + '/videos/'
    fetch(movieUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({trailers: data.videos})
    })
    
  }
  
  
  render() {
    const getRandomTrailerKey = () => {
      const randomTrailer = this.state.trailers[Math.floor(Math.random() * this.state.trailers.length)];
      const copy = {...randomTrailer};
      console.log('copy key', copy.key)
      return copy.key;
    }
      return (
        <div> 
          {
            this.state.trailers &&  
            <iframe
              width="560"
              src={"http://www.youtube.com/embed/" + getRandomTrailerKey()}
              height="315"
              title={this.props.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          }
         
        </div>
    
      )

      }


}

export default Trailer; 