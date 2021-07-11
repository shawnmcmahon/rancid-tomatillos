import { render } from '@testing-library/react';
import React from 'react';
import './Trailer.css';


// getRandomTrailerKey = (props) => {
//   // console.log('trailer props', props)
//   const randomTrailer = props.trailers[Math.floor(Math.random() * props.trailers.length)];
//   const copy = {...randomTrailer};
//   console.log('copy key', copy.key)
//   return copy.key;
// }
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
      

    // console.log('props.trailers', props.trailers[0])
    // const copy = {...props.trailers};
    // const key = copy[0].key
    // console.log('the key we need', key)

  }


    render() {
      return (
        <div> 
          {
            this.state.trailers &&  
            // console.log('this.state.trailers', this.state.trailers)
            <iframe
              width="560"
              src={"http://www.youtube.com/embed/" + this.state.trailers[0].key}
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