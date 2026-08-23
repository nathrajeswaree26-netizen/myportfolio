
import "../../src/styles/pages/education.css";

function Education() {
  const education = [
    {
      period: "Currently Pursuing",
      degree: "B.Tech in Computer Science & Technology",
      institution: "Nalanda Institute of Technology",
      result: "Computer Science & Technology",
      icon: "🎓",
    },
    {
      period: "Higher Secondary",
      degree: "12th / Higher Secondary",
      institution: "Mahapurusha Hadidash Mahavidyalaya, Chhatia",
      result: "75%",
      icon: "📚",
    },
    {
      period: "Secondary Education",
      degree: "10th / Secondary School",
      institution: "Sashidevi Girls High School, Chhatia",
      result: "83.17%",
      icon: "🏫",
    },
  ];

  return (
    <section className="education-page">
      <div className="education-container">

        {/* Header */}
        <div className="education-header">
          <p className="section-subtitle">My Academic Journey</p>

          <h1>
            Education <span>&amp; Qualification</span>
          </h1>

          <p>
            My academic background and educational journey in computer science
            and technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="education-timeline">

          {education.map((item, index) => (
            <div
              className={`education-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={item.degree}
            >
              <div className="timeline-dot">
                {item.icon}
              </div>

              <div className="education-card glass">

                <span className="education-period">
                  {item.period}
                </span>

                <h2>{item.degree}</h2>

                <h3>{item.institution}</h3>

                <div className="education-result">
                  <span>Qualification / Result</span>
                  <strong>{item.result}</strong>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Academic Focus */}
        <div className="academic-focus glass">

          <h2>Academic Focus</h2>

          <div className="focus-grid">

            <div className="focus-card">
              <span>01</span>
              <h3>Computer Science</h3>
              <p>
                Strong interest in software development, algorithms,
                programming and modern application development.
              </p>
            </div>

            <div className="focus-card">
              <span>02</span>
              <h3>Artificial Intelligence</h3>
              <p>
                Exploring machine learning, deep learning and natural
                language processing techniques.
              </p>
            </div>

            <div className="focus-card">
              <span>03</span>
              <h3>Research</h3>
              <p>
                Interested in fake news detection, rumor detection,
                multilingual NLP and intelligent systems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;

