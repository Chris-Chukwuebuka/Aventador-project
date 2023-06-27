
import React from 'react'
import "../styles/tour.css"
import rectangle from "../assets/Rectangle9.png";

const Tour = () => {
  return (

          <div className="mountain">
          <div className="sec-text">
      <h1>
        Making Adventures tours, <br />
        activities affordable..
      </h1>
        <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor cursus
        tortor tempus ac. Purus amet risus amet sagittis. Enim nulla a sapien
        lectus tellus mauris integer ut. Magna viverra sit rhoncus convallis id.
        Aenean egestas turpisnean feugiat pharetra sed sed morbi faucibus.
          </p>
          </div>
          <div className="pic">
              <img src={ rectangle} alt="rectangle" />
          </div>
    </div>
  )
}


     
export default Tour;
