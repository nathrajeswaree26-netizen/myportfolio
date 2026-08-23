import "../../src/styles/pages/projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      icon: "🧠",
      title: "Rumor Detection System",
      description:
        "A full-stack machine learning application that detects whether textual content is a rumor using NLP and machine learning techniques.",
      technologies: [
        "React.js",
        "FastAPI",
        "Python",
        "Machine Learning",
        "MySQL",
        "JWT",
      ],
      status: "Completed & Deployed",
      statusType: "completed",
      liveDemo:
        "https://rumor-detection-system-git-main-demo-176f.vercel.app",
      github:
        "https://github.com/nathrajeswaree26-netizen/rumor-detection-system",
    },

    {
      number: "02",
      icon: "🔬",
      title: "BERT-Based Odia Fake News Detection",
      description:
        "A research project for detecting fake news in Odia text using Sentence-BERT embeddings and machine learning techniques.",
      technologies: [
        "Python",
        "BERT",
        "Sentence-BERT",
        "SVM",
        "NLP",
        "Machine Learning",
      ],
      status: "Completed",
      statusType: "completed",
    },

    {
      number: "03",
      icon: "📋",
      title: "Return Issue & Desk Management System",
      description:
        "A management system developed to handle product return issues and desk-related operations, helping organize information and improve workplace resource management.",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "REST API",
      ],
      status: "Completed",
      statusType: "completed",
    },

    {
      number: "04",
      icon: "🌐",
      title: "Multilingual Fake News Detection",
      description:
        "An ongoing research project focused on detecting fake news across multiple languages using natural language processing and machine learning techniques.",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "Deep Learning",
        "Transformers",
      ],
      status: "Ongoing Research",
      statusType: "research",
    },

    {
      number: "05",
      icon: "🛡️",
      title: "Hate Speech Detection",
      description:
        "A research-oriented project for identifying and classifying potentially harmful or hateful textual content using NLP and machine learning techniques.",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "Deep Learning",
        "Text Classification",
      ],
      status: "Ongoing Research",
      statusType: "research",
    },

    {
      number: "06",
      icon: "🏦",
      title: "Bank Management System",
      description:
        "A desktop-based banking management application developed using Java Swing for managing customer accounts and performing essential banking operations.",
      technologies: [
        "Java",
        "Java Swing",
        "AWT",
        "MySQL",
      ],
      status: "Completed",
      statusType: "completed",
    },

    {
      number: "07",
      icon: "🛒",
      title: "E-Commerce Management System",
      description:
        "An e-commerce management application planned to manage products, customers, orders, and other essential online shopping operations.",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "REST API",
      ],
      status: "In Development",
      statusType: "development",
    },

    {
      number: "08",
      icon: "💻",
      title: "Personal Portfolio Website",
      description:
        "A responsive full-stack personal portfolio website designed to showcase my skills, education, projects, research work, certifications, and professional experience with a modern dark glassmorphism interface.",
      technologies: [
        "React.js",
        "React Router",
        "Axios",
        "CSS",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MySQL",
      ],
      status: "In Development",
      statusType: "development",
    },
  ];

  return (
    <section className="projects-page">

    <div className="projects-background">

  {/* Large background glows */}
  <div className="projects-glow projects-glow-one"></div>
  <div className="projects-glow projects-glow-two"></div>

  {/* Floating bubbles */}
  <div className="bubble bubble-one"></div>
  <div className="bubble bubble-two"></div>
  <div className="bubble bubble-three"></div>
  <div className="bubble bubble-four"></div>
  <div className="bubble bubble-five"></div>

  {/* Small particles */}
  <span className="project-particle particle-1"></span>
  <span className="project-particle particle-2"></span>
  <span className="project-particle particle-3"></span>
  <span className="project-particle particle-4"></span>
  <span className="project-particle particle-5"></span>
  <span className="project-particle particle-6"></span>

</div>

      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">

          <p className="projects-label">
            MY WORK
          </p>

          <h1>
            Featured <span>Projects</span>
          </h1>

          <p className="projects-intro">
            A collection of software development, machine learning,
            artificial intelligence and research projects that showcase
            my technical skills and problem-solving experience.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className={`project-card project-${project.number}`}
              key={project.number}
            >

              {/* Card Glow */}
              <div className="project-card-glow"></div>

              {/* Top Section */}
              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>

              {/* Status */}
              <div
                className={`project-status ${project.statusType}`}
              >
                <span className="status-dot"></span>
                {project.status}
              </div>

              {/* Content */}
              <div className="project-content">

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>

              </div>

              {/* Technologies */}
              <div className="project-technologies">

                <span className="technology-label">
                  Technologies:
                </span>

                <div className="technology-list">

                  {project.technologies.map(
                    (technology, index) => (
                      <span
                        className="project-tag"
                        key={index}
                      >
                        {technology}

                        {index <
                          project.technologies.length - 1 && (
                          <span className="technology-comma">
                            ,
                          </span>
                        )}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* Buttons */}
              <div className="project-actions">

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                  >
                    GitHub ↗
                  </a>
                )}

                {!project.liveDemo &&
                  !project.github && (
                    <span className="project-private">
                      Project in progress
                    </span>
                  )}

              </div>

              {/* Bottom Line */}
              <div className="project-card-line"></div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;