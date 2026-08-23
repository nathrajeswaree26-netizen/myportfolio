import "../styles/pages/publications.css";

function Publications() {
  const publications = [
    {
      id: 1,
      number: "01",

      type: "PUBLISHED RESEARCH",

      title: "BERT-Based Fake Odia News Detection",

      subtitle:
        "BERT-Based Fake Odia News Detection on Social Media",

      description:
        "A research study focused on detecting fake news in the Odia language using transformer-based representations and machine learning techniques for effective text classification.",

      status: "PUBLISHED",

      venue:
        "2026 1st International Conference on Emerging Trends in Advancements and Applications of Computational Intelligence Techniques (ETAACT)",

      year: "2026",

      publicationLabel: "IEEE PUBLICATION",

      doi: "10.1109/ETAACT69135.2026.11541782",

      ieeeLink:
        "https://ieeexplore.ieee.org/document/11541782",

      technologies: [
        "BERT",
        "Sentence-BERT",
        "SVM",
        "NLP",
        "Machine Learning",
      ],

      highlights: [
        "Fake News Detection",
        "Odia Language",
        "Transformer Embeddings",
        "Text Classification",
      ],

      icon: "◈",
    },

    {
      id: 2,
      number: "02",

      type: "RESEARCH WORK",

      title:
        "SHAP-Enhanced GPT Embedding Framework for Hate Speech Detection",

      subtitle:
        "Explainable Hate Speech Detection using GPT Embeddings and SHAP",

      description:
        "A research framework investigating GPT-based text embeddings combined with SHAP explainability techniques for detecting and interpreting hate speech in social media text.",

      status: "RESEARCH",

      venue:
        "Machine Learning, Natural Language Processing & Explainable AI",

      year: "2026",

      publicationLabel: "RESEARCH PAPER",

      technologies: [
        "GPT Embeddings",
        "SHAP",
        "NLP",
        "Machine Learning",
        "Explainable AI",
      ],

      highlights: [
        "Hate Speech Detection",
        "GPT Embeddings",
        "Explainable AI",
        "SHAP Analysis",
      ],

      icon: "◉",
    },

    {
      id: 3,
      number: "03",

      type: "ONGOING RESEARCH",

      title: "Multilingual Fake News Detection",

      subtitle:
        "A Multilingual NLP Framework for Fake News Detection",

      description:
        "An ongoing research study focused on developing a multilingual fake news detection framework capable of processing and classifying misinformation across multiple languages.",

      status: "ONGOING",

      venue:
        "Multilingual Natural Language Processing & Fake News Detection",

      year: "2026",

      publicationLabel: "ONGOING RESEARCH",

      technologies: [
        "Multilingual NLP",
        "Transformers",
        "BERT",
        "Deep Learning",
        "Text Classification",
      ],

      highlights: [
        "Multilingual Detection",
        "Fake News Detection",
        "Transformer Models",
        "Deep Learning",
      ],

      icon: "⌁",
    },
  ];

  return (
    <section className="publications-page">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="publications-background">

        <div className="publication-glow publication-glow-one"></div>

        <div className="publication-glow publication-glow-two"></div>

        <div className="publication-grid-background"></div>

      </div>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="publications-container">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="publications-heading">

          <span className="publication-section-tag">
            RESEARCH &amp; PUBLICATIONS
          </span>

          <h1>
            My <span>Publications</span>
          </h1>

          <p>
            Research work, scientific publications, and ongoing studies
            focused on Natural Language Processing, Artificial Intelligence,
            Fake News Detection, Hate Speech Detection, and Explainable AI.
          </p>

        </div>


        {/* =================================================
            PUBLICATION LIST
        ================================================= */}

        <div className="publications-list">

          {publications.map((publication) => (

            <article
              className={`publication-card publication-card-${publication.id}`}
              key={publication.id}
            >

              {/* =================================================
                  CARD NUMBER
              ================================================= */}

              <div className="publication-number">

                {publication.number}

              </div>


              {/* =================================================
                  CARD ORBIT
              ================================================= */}

              <div className="publication-orbit">

                <div className="publication-orbit-inner"></div>

              </div>


              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div className="publication-card-header">

                <div className="publication-icon">

                  {publication.icon}

                </div>


                <div className="publication-meta">

                  <span className="publication-type">

                    {publication.type}

                  </span>


                  <span className="publication-year">

                    {publication.year}

                  </span>

                </div>

              </div>


              {/* =================================================
                  PUBLICATION CONTENT
              ================================================= */}

              <div className="publication-content">

                <span className="publication-label">

                  {publication.publicationLabel}

                </span>


                <h2>

                  {publication.title}

                </h2>


                <h3>

                  {publication.subtitle}

                </h3>


                <p className="publication-description">

                  {publication.description}

                </p>


                {/* =================================================
                    VENUE
                ================================================= */}

                <div className="publication-venue">

                  <span className="venue-label">
                    VENUE
                  </span>

                  <span className="venue-value">
                    {publication.venue}
                  </span>

                </div>


                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                <div className="publication-technologies">

                  {publication.technologies.map(
                    (technology, technologyIndex) => (

                      <span
                        className="publication-tech"
                        key={technologyIndex}
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* =================================================
                    HIGHLIGHTS
                ================================================= */}

                <div className="publication-highlights">

                  {publication.highlights.map(
                    (highlight, highlightIndex) => (

                      <span
                        className="publication-highlight"
                        key={highlightIndex}
                      >
                        <span className="highlight-dot"></span>

                        {highlight}
                      </span>

                    )
                  )}

                </div>


                {/* =================================================
                    PUBLICATION ACTIONS
                ================================================= */}

                <div className="publication-actions">

                  {/* ===============================================
                      IEEE Xplore
                  =============================================== */}

                  {publication.ieeeLink && (

                    <a
                      href={publication.ieeeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link ieee-link"
                    >

                      <span className="publication-link-icon">
                        ◈
                      </span>

                      <span>
                        IEEE Xplore
                      </span>

                      <span className="publication-link-arrow">
                        ↗
                      </span>

                    </a>

                  )}


                  {/* ===============================================
                      DOI
                  =============================================== */}

                  {publication.doi && (

                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link doi-link"
                    >

                      <span className="publication-link-icon">
                        #
                      </span>

                      <span>
                        DOI
                      </span>

                      <span className="publication-link-arrow">
                        ↗
                      </span>

                    </a>

                  )}


                  {/* ===============================================
                      RESEARCH STATUS
                  =============================================== */}

                  {!publication.ieeeLink && (

                    <span
                      className={`publication-status publication-status-${publication.status.toLowerCase()}`}
                    >

                      <span className="status-dot"></span>

                      {publication.status}

                    </span>

                  )}

                </div>

              </div>


              {/* =================================================
                  CARD FOOTER
              ================================================= */}

              <div className="publication-card-footer">

                <span>
                  RESEARCH PUBLICATION
                </span>

                <span className="footer-line"></span>

                <span>
                  {publication.number}
                </span>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            RESEARCH SUMMARY
        ================================================= */}

        <div className="publication-summary">

          <div className="summary-item">

            <span className="summary-number">
              01
            </span>

            <span className="summary-text">
              IEEE Publication
            </span>

          </div>


          <div className="summary-divider"></div>


          <div className="summary-item">

            <span className="summary-number">
              02
            </span>

            <span className="summary-text">
              Research Work
            </span>

          </div>


          <div className="summary-divider"></div>


          <div className="summary-item">

            <span className="summary-number">
              03
            </span>

            <span className="summary-text">
              Ongoing Research
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Publications;