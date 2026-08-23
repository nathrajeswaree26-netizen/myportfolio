import "../../src/styles/pages/experience.css";

function Experience() {
  const experiences = [
    {
      title: "Java Developer",
      role: "Software Development",
      date: "2025 - Present",
      description:
        "Developing backend applications using Java and Spring Boot with a focus on scalable and maintainable software.",
      skills: ["Java", "Spring Boot", "MySQL", "REST API"],
    },
    {
      title: "Machine Learning Research",
      role: "Research & Development",
      date: "2024 - Present",
      description:
        "Working on machine learning and deep learning research involving fake news, rumor detection and natural language processing.",
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP"],
    },
    {
      title: "Frontend Development",
      role: "React Developer",
      date: "2025 - Present",
      description:
        "Building responsive and modern user interfaces using React, React Router, Axios and CSS.",
      skills: ["React", "JavaScript", "Axios", "CSS"],
    },
    {
      title: "Research Projects",
      role: "ML & DL Research",
      date: "2024 - Present",
      description:
        "Researching multilingual fake news detection, rumor detection and hate speech detection using modern NLP techniques.",
      skills: ["BERT", "RoBERTa", "TF-IDF", "NLP"],
    },
  ];

  return (
    <section className="experience-page">
      <div className="experience-container">

        <div className="experience-title">
          <h1>Experience</h1>
          <p>
            My professional, development and research experience.
          </p>
        </div>

        <div className="experience-grid">

          {experiences.map((experience, index) => (
            <div
              className="experience-card glass"
              key={index}
            >

              <div>
                <div className="experience-header">

                  <div>
                    <h3>{experience.title}</h3>
                    <div className="experience-role">
                      {experience.role}
                    </div>
                  </div>

                  <span className="experience-date">
                    {experience.date}
                  </span>

                </div>

                <p>
                  {experience.description}
                </p>
              </div>

              <div className="experience-skills">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    className="experience-skill"
                    key={skillIndex}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;