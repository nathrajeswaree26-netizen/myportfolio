import "../styles/pages/resume.css";

function Resume() {
  const resumePath = "/Resume/CompleteResume.pdf";

  const education = [
    {
      year: "CURRENT",
      degree: "B.Tech in Computer Science & Technology",
      institution: "Nalanda Institute of Technology",
      details: "CST Branch",
      icon: "◈",
    },
    {
      year: "12th",
      degree: "Higher Secondary Education",
      institution: "Mahapurusha Hadidash Mahavidyalaya, Chhatia",
      details: "Percentage: 75%",
      icon: "◇",
    },
    {
      year: "10th",
      degree: "Secondary Education",
      institution: "Sashidevi Girls High School, Chhatia",
      details: "Percentage: 83.17%",
      icon: "◎",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Java", "Python", "C", "JavaScript"],
    },
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "React.js",
        "Vite",
        "Axios",
        "React Router",
      ],
    },
    {
      category: "Backend & Database",
      items: [
        "Spring Boot",
        "REST API",
        "MySQL",
        "FastAPI",
      ],
    },
    {
      category: "Machine Learning & NLP",
      items: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "BERT",
        "RoBERTa",
        "Sentence-BERT",
        "SHAP",
      ],
    },
    {
      category: "Research Tools",
      items: [
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Transformers",
        "XGBoost",
      ],
    },
  ];

  const experience = [
    {
      number: "01",
      title: "Full Stack Java Intern",
      company: "MindBrain Innovations Private Limited",
      description:
        "Completed a hands-on internship focused on Full Stack Java development, software engineering, backend concepts, database integration, web technologies, debugging, and project-oriented application development.",
      technologies: [
        "Java",
        "Full Stack",
        "Backend",
        "Database",
        "Web Development",
      ],
    },
  ];

  const research = [
    {
      number: "01",
      title: "BERT-Based Fake Odia News Detection",
      status: "PUBLISHED",
      description:
        "Research focused on detecting fake news in the Odia language using Sentence-BERT representations combined with machine learning classification.",
      technologies: [
        "BERT",
        "Sentence-BERT",
        "SVM",
        "NLP",
      ],
    },
    {
      number: "02",
      title:
        "SHAP-Enhanced GPT Embedding Framework for Hate Speech Detection",
      status: "RESEARCH",
      description:
        "Research framework combining GPT-based text embeddings with SHAP explainability for hate speech detection and interpretable model predictions.",
      technologies: [
        "GPT Embeddings",
        "SHAP",
        "NLP",
        "Explainable AI",
      ],
    },
    {
      number: "03",
      title: "Multilingual Fake News Detection",
      status: "ONGOING",
      description:
        "Ongoing multilingual NLP research using transformer and deep-learning approaches for misinformation detection across languages.",
      technologies: [
        "Multilingual NLP",
        "Transformers",
        "BERT",
        "Deep Learning",
      ],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Rumour Detection on Social Media",
      description:
        "Machine learning and deep learning project for detecting rumours from social media text using classical ML and transformer-based NLP approaches.",
      technologies: [
        "Python",
        "Scikit-learn",
        "LSTM",
        "BiLSTM",
        "BERT",
        "RoBERTa",
      ],
    },
    {
      number: "02",
      title: "E-Commerce Management System",
      description:
        "Application focused on product, customer, order, and core e-commerce workflow management.",
      technologies: [
        "Java",
        "Database",
        "Management System",
      ],
    },
    {
      number: "03",
      title: "Personal Portfolio",
      description:
        "Responsive personal portfolio with a dark glassmorphism interface, interactive navigation, research, publications, achievements, certifications, and project sections.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "React Router",
      ],
    },
    {
      number: "04",
      title: "Bank Management System - Java Swing",
      description:
        "Desktop banking application using Java Swing concepts for customer, account, and banking-operation management.",
      technologies: [
        "Java",
        "Java Swing",
        "OOP",
      ],
    },
    {
      number: "05",
      title: "Return, Issue & Desk Management",
      description:
        "Management-oriented application for tracking issue and return workflows and maintaining desk-related records.",
      technologies: [
        "Java",
        "Database",
        "Management System",
      ],
    },
  ];

  const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Fake News Detection",
    "Hate Speech Detection",
    "Explainable AI",
    "Cybersecurity",
    "Malware Detection",
    "Phishing Detection",
    "Multilingual NLP",
    "LLM Security",
  ];

  const achievements = [
    {
      icon: "✦",
      title: "IEEE / Web of Science Indexed Conference Publication",
      description:
        "Research paper accepted for ETAACT 2026 at ITER, SOA University.",
    },
    {
      icon: "◈",
      title: "Research in AI & NLP",
      description:
        "Research work in fake news detection, hate speech detection, multilingual NLP, and Explainable AI.",
    },
    {
      icon: "◎",
      title: "Coding Practice",
      description:
        "Problem-solving practice through HackerRank and LeetCode.",
    },
    {
      icon: "◇",
      title: "Academic Excellence",
      description:
        "Strong academic performance throughout secondary and higher secondary education.",
    },
  ];

  return (
    <section className="resume-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="resume-background">
        <div className="resume-glow resume-glow-one"></div>
        <div className="resume-glow resume-glow-two"></div>
        <div className="resume-grid"></div>
      </div>


      <div className="resume-container">

        {/* =====================================================
            HERO
        ===================================================== */}

        <header className="resume-hero">

          <span className="resume-label">
            MY PROFESSIONAL PROFILE
          </span>

          <h1>
            Rajeswaree <span>Nath</span>
          </h1>

          <h2>
            Java Developer
            <span>•</span>
            AI/ML Researcher
            <span>•</span>
            NLP Enthusiast
          </h2>

          <p>
            Computer Science and Technology student passionate about
            Java development, Artificial Intelligence, Machine Learning,
            Natural Language Processing, Explainable AI, and
            research-driven technology.
          </p>


          {/* =================================================
              RESUME BUTTONS
          ================================================= */}

          <div className="resume-actions">

            {/* VIEW FULL RESUME */}

            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-primary-button"
            >
              <span>↗</span>
              View Full Resume
            </a>


            {/* DOWNLOAD RESUME */}

            <a
              href={resumePath}
              download="CompleteResume.pdf"
              className="resume-secondary-button"
            >
              <span>↓</span>
              Download CV
            </a>

          </div>

        </header>


        {/* =====================================================
            PROFILE SNAPSHOT
        ===================================================== */}

        <section className="resume-section resume-profile-section">

          <div className="resume-section-heading">

            <span>01 / PROFILE</span>

            <h2>
              Professional <strong>Snapshot</strong>
            </h2>

          </div>


          <div className="resume-profile-grid">

            <article className="resume-profile-card">

              <div className="resume-profile-icon">
                ⌘
              </div>

              <span>
                DOMAIN
              </span>

              <h3>
                Computer Science &amp; Technology
              </h3>

              <p>
                Building software solutions while exploring
                intelligent systems and research-oriented applications.
              </p>

            </article>


            <article className="resume-profile-card">

              <div className="resume-profile-icon">
                ◈
              </div>

              <span>
                PRIMARY FOCUS
              </span>

              <h3>
                Java &amp; Artificial Intelligence
              </h3>

              <p>
                Developing Java-based applications and exploring
                AI/ML and NLP techniques for real-world problems.
              </p>

            </article>


            <article className="resume-profile-card">

              <div className="resume-profile-icon">
                ✦
              </div>

              <span>
                RESEARCH
              </span>

              <h3>
                NLP &amp; Explainable AI
              </h3>

              <p>
                Researching misinformation, hate speech, multilingual
                NLP and interpretable machine learning systems.
              </p>

            </article>

          </div>

        </section>


        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              02 / EXPERIENCE
            </span>

            <h2>
              Professional <strong>Experience</strong>
            </h2>

          </div>


          <div className="resume-research-list">

            {experience.map((item) => (

              <article
                className="resume-research-card"
                key={item.number}
              >

                <div className="resume-research-number">
                  {item.number}
                </div>


                <div className="resume-research-main">

                  <div className="resume-research-top">
                    <span>
                      INTERNSHIP EXPERIENCE
                    </span>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.company}
                  </h4>

                  <p>
                    {item.description}
                  </p>


                  <div className="resume-research-tags">

                    {item.technologies.map(
                      (technology, index) => (

                        <span key={index}>
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              03 / EDUCATION
            </span>

            <h2>
              Academic <strong>Journey</strong>
            </h2>

          </div>


          <div className="resume-timeline">

            {education.map((item, index) => (

              <article
                className="resume-timeline-item"
                key={index}
              >

                <div className="resume-timeline-marker">
                  {item.icon}
                </div>

                <div className="resume-timeline-line"></div>

                <div className="resume-timeline-content">

                  <span className="resume-timeline-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.degree}
                  </h3>

                  <h4>
                    {item.institution}
                  </h4>

                  <p>
                    {item.details}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            TECHNICAL SKILLS
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              04 / TECHNICAL EXPERTISE
            </span>

            <h2>
              Skills &amp; <strong>Technologies</strong>
            </h2>

          </div>


          <div className="resume-skills-grid">

            {skills.map((group, index) => (

              <article
                className="resume-skill-card"
                key={index}
              >

                <div className="resume-skill-header">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {group.category}
                  </h3>

                </div>


                <div className="resume-skill-tags">

                  {group.items.map(
                    (skill, skillIndex) => (

                      <span key={skillIndex}>
                        {skill}
                      </span>

                    )
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            RESEARCH
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              05 / RESEARCH
            </span>

            <h2>
              Research <strong>Experience</strong>
            </h2>

            <p>
              Selected research work covering misinformation detection,
              hate speech detection, multilingual NLP and Explainable AI.
            </p>

          </div>


          <div className="resume-research-list">

            {research.map((item) => (

              <article
                className="resume-research-card"
                key={item.number}
              >

                <div className="resume-research-number">
                  {item.number}
                </div>


                <div className="resume-research-main">

                  <div className="resume-research-top">
                    <span>
                      {item.status}
                    </span>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>


                  <div className="resume-research-tags">

                    {item.technologies.map(
                      (technology, index) => (

                        <span key={index}>
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>


                <div className="resume-research-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            RESEARCH INTERESTS
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-interest-card">

            <div className="resume-interest-orbit"></div>

            <div className="resume-interest-content">

              <span>
                06 / RESEARCH INTERESTS
              </span>

              <h2>
                Exploring the
                <strong> Next Frontier</strong>
              </h2>

              <p>
                My research interests extend toward intelligent,
                secure and explainable computing systems.
              </p>


              <div className="resume-interest-tags">

                {researchInterests.map(
                  (interest, index) => (

                    <span key={index}>
                      {interest}
                    </span>

                  )
                )}

              </div>

            </div>


            <div className="resume-interest-symbol">
              AI
            </div>

          </div>

        </section>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              07 / PROJECTS
            </span>

            <h2>
              Selected <strong>Projects</strong>
            </h2>

          </div>


          <div className="resume-project-grid">

            {projects.map((project) => (

              <article
                className="resume-project-card"
                key={project.number}
              >

                <div className="resume-project-number">
                  {project.number}
                </div>

                <div className="resume-project-icon">
                  ◇
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="resume-project-tags">

                  {project.technologies.map(
                    (technology, index) => (

                      <span key={index}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            PUBLICATION
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              08 / PUBLICATION
            </span>

            <h2>
              Research <strong>Publication</strong>
            </h2>

          </div>


          <article className="resume-publication-card">

            <div className="resume-publication-icon">
              IEEE
            </div>


            <div className="resume-publication-content">

              <span>
                PUBLISHED RESEARCH PAPER
              </span>

              <h3>
                BERT-Based Fake Odia News Detection
              </h3>

              <p>
                Research work on fake news detection in the Odia
                language using transformer-based sentence
                representations and machine learning classification.
              </p>


              <div className="resume-publication-meta">

                <span>
                  IEEE
                </span>

                <span>
                  Web of Science Indexed Conference
                </span>

                <span>
                  ETAACT 2026
                </span>

              </div>

            </div>


            <a
              href="https://ieeexplore.ieee.org/document/11541782"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-publication-link"
            >
              View Paper ↗
            </a>

          </article>

        </section>


        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}

        <section className="resume-section">

          <div className="resume-section-heading">

            <span>
              09 / ACHIEVEMENTS
            </span>

            <h2>
              Highlights &amp;
              <strong> Achievements</strong>
            </h2>

          </div>


          <div className="resume-achievements-grid">

            {achievements.map(
              (achievement, index) => (

                <article
                  className="resume-achievement-card"
                  key={index}
                >

                  <div className="resume-achievement-icon">
                    {achievement.icon}
                  </div>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    {achievement.description}
                  </p>

                </article>

              )
            )}

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="resume-final">

          <div className="resume-final-glow"></div>

          <div className="resume-final-content">

            <span>
              10 / DOWNLOAD RESUME
            </span>

            <h2>
              Interested in
              <strong> Working Together?</strong>
            </h2>

            <p>
              View or download my complete resume for a detailed
              overview of my education, experience, research,
              technical skills, projects and achievements.
            </p>


            <div className="resume-actions">

              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-primary-button"
              >
                <span>↗</span>
                View Full Resume
              </a>


              <a
                href={resumePath}
                download="CompleteResume.pdf"
                className="resume-secondary-button"
              >
                <span>↓</span>
                Download CV
              </a>

            </div>

          </div>


          <div className="resume-final-symbol">
            CV
          </div>

        </section>

      </div>

    </section>
  );
}

export default Resume;