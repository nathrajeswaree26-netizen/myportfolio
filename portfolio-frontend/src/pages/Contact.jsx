import { useState } from "react";
import "../styles/pages/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="contact-background">

        <div className="contact-glow contact-glow-one"></div>

        <div className="contact-glow contact-glow-two"></div>

        <div className="contact-grid"></div>

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="contact-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="contact-heading">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's <span>Connect</span>
          </h1>

          <p>
            Have a project idea, research collaboration, internship
            opportunity, or simply want to discuss technology?
            Feel free to reach out.
          </p>

        </header>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="contact-layout">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-information">


            {/* INTRO CARD */}

            <article className="contact-intro-card">

              <div className="contact-orbit"></div>

              <div className="contact-intro-icon">
                ✦
              </div>

              <span>
                OPEN TO OPPORTUNITIES
              </span>

              <h2>
                Let's build something
                <strong> meaningful.</strong>
              </h2>

              <p>
                I am interested in software development,
                Artificial Intelligence, Machine Learning,
                Natural Language Processing, research,
                and emerging cybersecurity technologies.
              </p>

            </article>


            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="contact-details">


              {/* EMAIL */}

              <a
                href="mailto:nathrajeswaree26@gmail.com"
                className="contact-detail-card"
              >

                <div className="contact-detail-icon">
                  @
                </div>

                <div>

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    nathrajeswaree26@gmail.com
                  </strong>

                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/rajesware-nath/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-card"
              >

                <div className="contact-detail-icon">
                  in
                </div>

                <div>

                  <span>
                    LINKEDIN
                  </span>

                  <strong>
                    linkedin.com/in/rajesware-nath
                  </strong>

                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>

              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/nathrajeswaree26-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-card"
              >

                <div className="contact-detail-icon">
                  &lt;/&gt;
                </div>

                <div>

                  <span>
                    GITHUB
                  </span>

                  <strong>
                    github.com/nathrajeswaree26-netizen
                  </strong>

                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>

              </a>


            </div>


            {/* =================================================
                INTERESTS
            ================================================= */}

            <div className="contact-interests">

              <span>
                CURRENT INTERESTS
              </span>

              <div className="contact-interest-tags">

                <span>
                  Java
                </span>

                <span>
                  React
                </span>

                <span>
                  AI / ML
                </span>

                <span>
                  NLP
                </span>

                <span>
                  Cybersecurity
                </span>

                <span>
                  Research
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE - FORM
          ================================================= */}

          <div className="contact-form-card">

            <div className="contact-form-header">

              <span>
                SEND A MESSAGE
              </span>

              <h2>
                Start a <strong>Conversation</strong>
              </h2>

              <p>
                Fill out the form below and I'll get back to you.
              </p>

            </div>


            {/* SUCCESS MESSAGE */}

            {submitted && (

              <div className="contact-success">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Message Ready
                  </strong>

                  <p>
                    Your message details have been captured.
                  </p>

                </div>

              </div>

            )}


            {/* FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              {/* NAME + EMAIL */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    YOUR EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              {/* SUBJECT */}

              <div className="contact-field">

                <label htmlFor="subject">
                  SUBJECT
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="contact-field">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="7"
                  required
                ></textarea>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
              >

                <span>
                  Send Message
                </span>

                <span className="contact-submit-arrow">
                  ↗
                </span>

              </button>


              <p className="contact-form-note">
                This form is currently frontend-only and can be connected
                to your Spring Boot backend later.
              </p>

            </form>

          </div>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="contact-bottom">

          <span className="contact-bottom-line"></span>

          <div className="contact-bottom-content">

            <span className="contact-bottom-icon">
              ◈
            </span>

            <p>
              Open to learning, collaborating and building impactful
              technology.
            </p>

          </div>

          <span className="contact-bottom-line"></span>

        </div>

      </div>

    </section>
  );
}

export default Contact;