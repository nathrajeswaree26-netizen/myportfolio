
import { Link } from "react-router-dom";
import heroImage from "../assets/RajeswareePic.jpeg";
import "../../src/styles/pages/home.css";

function Home() {
  return (
    <section className="home-page">

      {/* Background Glow */}
      <div className="home-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="home-container">

        {/* Left Content */}
        <div className="home-content">

          <p className="home-greeting">
            Hello, I'm
          </p>

          <h1>
            Rajeswaree <span>Nath</span>
          </h1>

          <h2>
            Java Developer &amp; Research Enthusiast
          </h2>

          <p className="home-description">
            I am a Computer Science and Technology student passionate about
            software development, machine learning, deep learning and
            research. I build modern, responsive and intelligent applications
            using Java, Spring Boot, React and Python.
          </p>

          {/* Buttons */}
          <div className="home-buttons">

            <Link
              to="/projects"
              className="primary-btn"
            >
              View My Projects
            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >
              Contact Me
            </Link>

          </div>

          {/* Skills Summary */}
          <div className="home-stats">

            <div className="stat-card glass">
              <h3>Java</h3>
              <p>Development</p>
            </div>

            <div className="stat-card glass">
              <h3>ML/DL</h3>
              <p>Research</p>
            </div>

            <div className="stat-card glass">
              <h3>React</h3>
              <p>Frontend</p>
            </div>

          </div>

        </div>

        {/* Right Profile Image */}
        <div className="home-image-wrapper">

          <div className="home-image-glow"></div>

          <div className="home-image-card glass">

            <img
              src={heroImage}
              alt="Rajeswaree Nath"
              className="home-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;

