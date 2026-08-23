
import "../../src/styles/pages/about.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* Page Header */}
        <div className="about-header">
          <p className="section-subtitle">Get to know me</p>

          <h1>
            About <span>Me</span>
          </h1>

          <p className="about-intro">
            A passionate developer and research enthusiast focused on building
            meaningful technology solutions.
          </p>
        </div>

        {/* Main About Card */}
        <div className="about-main glass">

          <div className="about-content">

            <h2>
              Hello! I'm <span>Rajeswaree Nath</span>
            </h2>

            <p>
              I am a Computer Science and Technology student with a strong
              interest in software development, machine learning, deep
              learning and research.
            </p>

            <p>
              My primary development interest is Java and Spring Boot, while
              I also work with React for building modern and responsive
              frontend applications.
            </p>

            <p>
              Along with software development, I am actively interested in
              artificial intelligence and natural language processing. My
              research interests include fake news detection, rumor detection,
              hate speech detection and multilingual NLP.
            </p>

            <p>
              I enjoy combining software engineering with intelligent systems
              to create practical applications that solve real-world
              problems.
            </p>

          </div>

        </div>

        {/* Information Cards */}
        <div className="about-grid">

          <div className="about-info-card glass">
            <div className="about-icon">🎓</div>

            <h3>Education</h3>

            <p>
              B.Tech in Computer Science &amp; Technology
            </p>

            <span>
              Nalanda Institute of Technology
            </span>
          </div>

          <div className="about-info-card glass">
            <div className="about-icon">💻</div>

            <h3>Development</h3>

            <p>
              Java • Spring Boot • React • MySQL
            </p>

            <span>
              Full-stack application development
            </span>
          </div>

          <div className="about-info-card glass">
            <div className="about-icon">🔬</div>

            <h3>Research</h3>

            <p>
              Machine Learning • Deep Learning • NLP
            </p>

            <span>
              AI and multilingual text analysis
            </span>
          </div>

          <div className="about-info-card glass">
            <div className="about-icon">🌐</div>

            <h3>Interests</h3>

            <p>
              AI • Web Development • Research
            </p>

            <span>
              Exploring emerging technologies
            </span>
          </div>

        </div>

        {/* Quick Facts */}
        <div className="about-facts glass">

          <h2>Quick Facts</h2>

          <div className="facts-grid">

            <div>
              <strong>Primary Language</strong>
              <span>Java</span>
            </div>

            <div>
              <strong>Frontend</strong>
              <span>React.js</span>
            </div>

            <div>
              <strong>Backend</strong>
              <span>Spring Boot</span>
            </div>

            <div>
              <strong>Database</strong>
              <span>MySQL</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>ML / DL / NLP</span>
            </div>

            <div>
              <strong>Career Focus</strong>
              <span>Software &amp; AI Research</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

