import React from 'react';
import './Trailer.css';
import { getTrailers } from '../../utilities/apiCalls'


class Trailer extends React.Component {
  constructor() {
    super()
    this.state = {
      trailers: [],
    }
  }

  componentDidMount() {
    getTrailers(this.props.id)
    .then(data => {
      this.setState({trailers: data.videos})
    })
  }


  getRandomTrailerKey = () => {
    const randomTrailer = this.state.trailers[Math.floor(Math.random() * this.state.trailers.length)];
    return {...randomTrailer}.key;
  }

  render() {
    return (
      <div className="video-responsive">
        {
          this.state.trailers.length &&
          <iframe
            src={"http://www.youtube.com/embed/" + this.getRandomTrailerKey()}
            width="560"
            height="349"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            >
          </iframe>
        }
      </div>
    )
  }
}

export default Trailer;
