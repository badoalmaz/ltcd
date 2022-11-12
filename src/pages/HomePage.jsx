import React from "react";
import "../styles/homepage.css";
import dribbble_logo from "../assets/images/dribbble.svg";
import instagram_logo from "../assets/images/instagram.svg";
import linkedin_logo from "../assets/images/linkedin.svg";
import telegram_logo from "../assets/images/telegram.svg";
import footer from "../assets/images/footer2.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="main__content">
          <h1>
            EVERY IDEA
            <br />
            HAS A CHANCE
          </h1>
          <p>
            Experienced design team passionate to create visualy-appealing{" "}
            <br />
            solutions to solve your business needs.
          </p>

          <Link to="/contact">
            <button>Start New Project</button>
          </Link>

          {/* <div className="social-media__icons">
            <a href="/">
              <img
                className="social-media__icon"
                src={dribbble_logo}
                alt="dribbble"
              />
            </a>

            <a href="/">
              <img
                className="social-media__icon"
                src={instagram_logo}
                alt="instagram"
              />
            </a>

            <a href="/">
              <img
                className="social-media__icon"
                src={linkedin_logo}
                alt="linkedin"
              />
            </a>

            <a href="/">
              <img
                className="social-media__icon"
                src={telegram_logo}
                alt="telegram"
              />
            </a>
          </div> */}
        </div>
      </main>

      <footer>
        <img src={footer} alt="footer" />
      </footer>
    </>
  );
};

export default HomePage;
