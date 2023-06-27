import React, {useState} from "react";
import "../styles/testimonial.css";
import clients from "../components/user";
import{BsArrowLeft, BsArrowRight}from "react-icons/bs"
const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const { id, comment, image, name, job } = clients[index];
    const checkNumber = (num) => {
        if (num > clients.length - 1) {
            return 0; 
        }
        if (num < 0) {
            return clients.length - 1;   
        }
        return num;
    }
//previous
    const prevPerson = () => {
        setIndex((index) => {
            return checkNumber(index - 1);  
        })
    }
    //Next
    const nextPerson = () => {
        setIndex((index) => {
            return checkNumber (index + 1);
        })
    }
    

    
  return (
    <div className="testimonial">
      <div className="heading">
        <h2>Clients Testimonial</h2>

        <h2>Adventure Ideas</h2>
        <div className="testimonial-main">
          <img src={image} alt={name} />
                  <p>{comment}</p>
                  <div className="btn-container">
                      <button onClick={prevPerson}><BsArrowLeft />
                      </button>
                      <button onClick={nextPerson}><BsArrowRight />
                      </button>
                  </div>
          <h2>{name}</h2>
          <h3>{job}</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
