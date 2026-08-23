import "../../src/styles/pages/skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      icon: "⌘",
      skills: [
        "C",
        "Java",
        "Python",
        "JavaScript",
      ],
    },

    {
      title: "Frontend",
      icon: "◈",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Axios",
        "React Router",
      ],
    },

    {
      title: "Backend",
      icon: "⚙",
      skills: [
        "Core Java",
        "Advanced Java",
        "Spring Boot",
        "Node.js",
        "REST API",
        "FastAPI",
      ],
    },

    {
      title: "Machine Learning & AI",
      icon: "◉",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Generative AI",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
      ],
    },

    {
      title: "Research & NLP",
      icon: "⌁",
      skills: [
        "BERT",
        "RoBERTa",
        "Sentence-BERT",
        "NLP",
        "Text Classification",
        "Fake News Detection",
        "Rumor Detection",
        "Hate Speech Detection",
      ],
    },

    {
      title: "Database, Tools & Deployment",
      icon: "◆",
      skills: [
        "MySQL",
        "SQLAlchemy",
        "JPA",
        "Hibernate",
        "Maven",
        "Eclipse",
        "VS Code",
        "IntelliJ IDEA",
        "Git",
        "GitHub",
        "Postman",
        "JWT",
        "Railway",
        "Render",
        "Vercel",
      ],
    },

    {
      title: "Soft Skills",
      icon: "✦",
      skills: [
        "Leadership",
        "Team Spirit",
        "Communication",
        "Problem Solving",
        "Critical Thinking",
        "Adaptability",
        "Time Management",
        "Collaboration",
        "Creativity",
        "Quick Learning",
      ],
    },
  ];

  return (
    <section className="skills-page">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="skills-background">
        <div className="skills-glow skills-glow-one"></div>
        <div className="skills-glow skills-glow-two"></div>
      </div>


      <div className="skills-container">

        {/* =========================================
            PAGE HEADER
        ========================================= */}

        <div className="skills-title">

          <p className="skills-label">
            MY EXPERTISE
          </p>

          <h1>
            Technical <span>Skills</span>
          </h1>

          <p className="skills-description">
            Technologies and tools I use for software development,
            frontend engineering, backend development, machine learning,
            artificial intelligence and research.
          </p>

        </div>


        {/* =========================================
            SKILLS GRID
        ========================================= */}

        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <div
              className="skill-card"
              key={index}
            >

              {/* Card Top */}

              <div className="skill-card-top">

                <div className="skill-icon">
                  {group.icon}
                </div>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* Card Title */}

              <h2>
                {group.title}
              </h2>


              {/* Skills */}

              <div className="skill-list">

                {group.skills.map((skill, skillIndex) => (

                  <span
                    className="skill-tag"
                    key={skillIndex}
                  >
                    {skill}
                  </span>

                ))}

              </div>


              {/* Bottom Line */}

              <div className="skill-card-line"></div>

            </div>

          ))}

        </div>


        {/* =================================================
            ORBIT SKILLS SECTION
            This appears AFTER all skill cards
        ================================================= */}

        <div className="skills-orbit-section">

          {/* Orbit Heading */}

          <div className="orbit-heading">

            <p>
              SKILLS IN MOTION
            </p>

            <h2>
              My Skills <span>Orbit</span>
            </h2>

            <div className="orbit-line"></div>

          </div>


          {/* Orbit */}

          <div className="skills-orbit">

            {/* =========================================
                ORBIT RINGS
            ========================================= */}

            <div
              className="orbit-ring orbit-ring-one"
            ></div>

            <div
              className="orbit-ring orbit-ring-two"
            ></div>

            <div
              className="orbit-ring orbit-ring-three"
            ></div>


            {/* =========================================
                CENTER
            ========================================= */}

            <div className="orbit-center">

              <span>
                MY
              </span>

              <strong>
                SKILLS
              </strong>

            </div>


            {/* =========================================
                ORBIT SKILLS
            ========================================= */}

            <div className="orbit-skill orbit-python">
              🐍 Python
            </div>

            <div className="orbit-skill orbit-java">
              ☕ Java
            </div>

            <div className="orbit-skill orbit-react">
              ⚛ React
            </div>

            <div className="orbit-skill orbit-js">
              JS
            </div>

            <div className="orbit-skill orbit-c">
              C
            </div>

            <div className="orbit-skill orbit-spring">
              Spring Boot
            </div>

            <div className="orbit-skill orbit-ai">
              AI / ML
            </div>

            <div className="orbit-skill orbit-nlp">
              NLP
            </div>

            <div className="orbit-skill orbit-mysql">
              MySQL
            </div>

            <div className="orbit-skill orbit-leadership">
              Leadership
            </div>


            {/* =========================================
                ADDITIONAL SOFT SKILLS
            ========================================= */}

            <div className="orbit-skill orbit-team">
              Team Spirit
            </div>

            <div className="orbit-skill orbit-communication">
              Communication
            </div>

            <div className="orbit-skill orbit-problem">
              Problem Solving
            </div>

            <div className="orbit-skill orbit-critical">
              Critical Thinking
            </div>

            <div className="orbit-skill orbit-adaptability">
              Adaptability
            </div>

            <div className="orbit-skill orbit-time">
              Time Management
            </div>

            <div className="orbit-skill orbit-collaboration">
              Collaboration
            </div>

            <div className="orbit-skill orbit-creativity">
              Creativity
            </div>

            <div className="orbit-skill orbit-learning">
              Quick Learning
            </div>


            {/* =========================================
                RESEARCH / AI SKILLS
            ========================================= */}

            <div className="orbit-skill orbit-bert">
              BERT
            </div>

            <div className="orbit-skill orbit-tensorflow">
              TensorFlow
            </div>

            <div className="orbit-skill orbit-git">
              Git / GitHub
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;