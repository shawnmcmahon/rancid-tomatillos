import React from 'react';
import './Trailer.css';


const Trailer = (props) => {
    console.log('the trailer key', props.key)
  

    return (
      <div> 
        <iframe
          width="560"
          src={"http://www.youtube.com/embed/" + props.key}
          height="315"
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
  
    )


}

export default Trailer; 