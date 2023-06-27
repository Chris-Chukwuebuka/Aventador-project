import React from "react";
import "../styles/footer.css";
import face from "../assets/facebook.png";
import insta from "../assets/insta.png";
import tweet from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="background">
      <div className="back">
        <div className="about">
          <h2>About Adventor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
        <div className="quick">
          <h2>Quick Menu</h2>
          <div className="list">
            <ul>
              <li>Home</li>
              <li>Stories</li>
              <li>Trending Stories</li>
              <li>Popular Stories</li>
            </ul>
            <ul>
              <li>Sign Up</li>
              <li>Log In</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="news">
          <h2>Subscribe to our newsletter</h2>
          <div className="button">
            <form>
              <input className="form" type="email" placeholder="Email adress" />
            </form>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="term">
        <p>Terms and policy</p>
        <div className="image">
          <img width="14px" height="14px" src={tweet} alt="tweet" />
          <img width="14px" height="14px" src={face} alt="yea" />
          <img width="14px" height="14px" src={insta} alt="insta" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
