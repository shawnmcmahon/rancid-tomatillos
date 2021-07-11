import React from 'react';
import './Trailer.css';


const Trailer = (props) => {
  
  

    return (
      <div> 
        <iframe
          width="560"
          src={`http://www.youtube.com/embed/${props.id}`}
          height="315"
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />           
      </div>
  
    )


}

export default Trailer; 