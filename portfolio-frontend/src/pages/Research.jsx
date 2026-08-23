import "../styles/pages/research.css";

function Research() {
  const researchAreas = [
    {
      icon: "◈",
      title: "Fake News Detection",
      description:
        "Developing machine learning and deep learning approaches for identifying misinformation and fake news from textual and social media data.",
    },
    {
      icon: "◉",
      title: "Hate Speech Detection",
      description:
        "Exploring NLP and transformer-based techniques to identify and analyze harmful and hateful content in social media text.",
    },
    {
      icon: "⌁",
      title: "Natural Language Processing",
      description:
        "Working with text representation, embeddings, classification, transformers, and language models for real-world NLP problems.",
    },
    {
      icon: "✦",
      title: "Explainable AI",
      description:
        "Using explainability techniques such as SHAP to understand model decisions and make AI predictions more interpretable.",
    },
    {
      icon: "◇",
      title: "Deep Learning",
      description:
        "Applying neural networks, recurrent architectures, and transformer models to challenging language-processing problems.",
    },
  ];

  /* =========================================================
     RESEARCH INTERESTS
  ========================================================= */

  const researchInterests = [
    {
      icon: "⌬",
      title: "Cybersecurity",
      description:
        "Exploring intelligent and data-driven approaches for identifying, analyzing, and mitigating modern cybersecurity threats.",
    },
    {
      icon: "◉",
      title: "Malware Detection",
      description:
        "Investigating machine learning and deep learning techniques for malware classification, detection, and behavioral analysis.",
    },
    {
      icon: "⌁",
      title: "Phishing Detection",
      description:
        "Developing intelligent approaches for detecting phishing websites, malicious URLs, deceptive messages, and social engineering attacks.",
    },
    {
      icon: "◇",
      title: "Network Security",
      description:
        "Studying AI-based techniques for network intrusion detection, anomaly detection, and identification of suspicious network activities.",
    },
    {
      icon: "✦",
      title: "Threat Intelligence",
      description:
        "Exploring automated threat analysis and intelligent systems for understanding cyber threats, attack patterns, and security risks.",
    },
    {
      icon: "◈",
      title: "Digital Forensics",
      description:
        "Interested in applying computational and AI techniques to digital evidence analysis, cyber investigations, and forensic data processing.",
    },
    {
      icon: "◎",
      title: "Privacy & Data Security",
      description:
        "Investigating techniques for protecting sensitive information and developing secure and privacy-aware intelligent systems.",
    },
    {
      icon: "⚡",
      title: "AI for Cybersecurity",
      description:
        "Combining artificial intelligence with cybersecurity to create intelligent systems capable of detecting and responding to emerging threats.",
    },
    {
      icon: "⬡",
      title: "Adversarial Machine Learning",
      description:
        "Studying adversarial attacks, model robustness, and defense strategies for securing machine learning and artificial intelligence systems.",
    },
    {
      icon: "△",
      title: "Social Engineering Detection",
      description:
        "Exploring NLP and machine learning methods for identifying deceptive communication, manipulation, and social engineering patterns.",
    },
  ];

  const researchProjects = [
    {
      number: "01",
      status: "RESEARCH PROJECT",
      title: "Rumour Detection on Social Media",
      description:
        "A machine learning and deep learning based research project for detecting rumours from social media text. The research explores traditional machine learning algorithms as well as modern NLP and transformer-based approaches.",
      methods: [
        "SVM",
        "Logistic Regression",
        "Naive Bayes",
        "Decision Tree",
        "LSTM",
        "BiLSTM",
        "BERT",
        "RoBERTa",
      ],
      focus: "Social Media Rumour Detection",
      icon: "◎",
    },

    {
      number: "02",
      status: "PUBLISHED RESEARCH",
      title: "BERT-Based Fake Odia News Detection",
      description:
        "A research study focused on detecting fake news in the Odia language using transformer-based sentence representations combined with machine learning classification.",
      methods: [
        "BERT",
        "Sentence-BERT",
        "SVM",
        "NLP",
        "Text Classification",
      ],
      focus: "Odia Fake News Detection",
      icon: "◈",
    },

    {
      number: "03",
      status: "RESEARCH WORK",
      title:
        "SHAP-Enhanced GPT Embedding Framework for Hate Speech Detection",
      description:
        "A research framework investigating GPT-based text embeddings together with SHAP explainability to detect hate speech and understand the factors influencing model predictions.",
      methods: [
        "GPT Embeddings",
        "SHAP",
        "NLP",
        "Machine Learning",
        "Explainable AI",
      ],
      focus: "Explainable Hate Speech Detection",
      icon: "◉",
    },

    {
      number: "04",
      status: "ONGOING RESEARCH",
      title: "Multilingual Fake News Detection",
      description:
        "An ongoing research direction focused on developing multilingual NLP approaches for detecting misinformation across different languages using transformer and deep learning techniques.",
      methods: [
        "Multilingual NLP",
        "Transformers",
        "BERT",
        "Deep Learning",
        "Text Classification",
      ],
      focus: "Multilingual Misinformation Detection",
      icon: "⌁",
    },
  ];

  const methodology = [
    {
      number: "01",
      title: "Dataset",
      description: "Collect and prepare relevant research datasets.",
      icon: "▣",
    },
    {
      number: "02",
      title: "Preprocessing",
      description: "Clean, normalize and prepare textual data.",
      icon: "⌁",
    },
    {
      number: "03",
      title: "Representation",
      description: "Generate meaningful features and embeddings.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Model Training",
      description: "Train machine learning and deep learning models.",
      icon: "⚙",
    },
    {
      number: "05",
      title: "Evaluation",
      description: "Measure model performance using suitable metrics.",
      icon: "◉",
    },
    {
      number: "06",
      title: "Explainability",
      description: "Analyze model decisions using explainable AI.",
      icon: "✦",
    },
  ];

  const researchTools = [
    "Python",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Transformers",
    "BERT",
    "RoBERTa",
    "Sentence-BERT",
    "SHAP",
    "XGBoost",
    "Pandas",
    "NumPy",
  ];

  return (
    <section className="research-page">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="research-background">
        <div className="research-glow research-glow-one"></div>
        <div className="research-glow research-glow-two"></div>
        <div className="research-grid"></div>
      </div>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="research-container">

        {/* =================================================
            HERO
        ================================================= */}

        <header className="research-hero">

          <span className="research-label">
            RESEARCH &amp; INNOVATION
          </span>

          <h1>
            Research <span>Beyond Limits</span>
          </h1>

          <p>
            Exploring Artificial Intelligence, Natural Language Processing,
            Machine Learning, Deep Learning, and Explainable AI to solve
            real-world problems involving misinformation and harmful content.
          </p>

          <div className="research-hero-line"></div>

        </header>


        {/* =================================================
            RESEARCH AREAS
        ================================================= */}

        <section className="research-section">

          <div className="research-section-heading">

            <span>01 / FOCUS AREAS</span>

            <h2>
              Areas of <strong>Research</strong>
            </h2>

          </div>


          <div className="research-areas-grid">

            {researchAreas.map((area, index) => (

              <article
                className="research-area-card"
                key={index}
              >

                <div className="research-area-icon">
                  {area.icon}
                </div>

                <span className="research-area-number">
                  0{index + 1}
                </span>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.description}
                </p>

                <div className="research-card-line"></div>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            RESEARCH INTERESTS
        ================================================= */}

        <section className="research-section research-interests-section">

          <div className="research-section-heading">

            <span>02 / RESEARCH INTERESTS</span>

            <h2>
              Exploring <strong>Future Frontiers</strong>
            </h2>

            <p>
              My broader research interests extend toward cybersecurity,
              intelligent threat detection, secure artificial intelligence,
              and emerging applications of machine learning in cyber defense.
            </p>

          </div>


          <div className="research-areas-grid research-interests-grid">

            {researchInterests.map((interest, index) => (

              <article
                className="research-area-card research-interest-card"
                key={index}
              >

                <div className="research-area-icon">
                  {interest.icon}
                </div>

                <span className="research-area-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {interest.title}
                </h3>

                <p>
                  {interest.description}
                </p>

                <div className="research-card-line"></div>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            FEATURED RESEARCH
        ================================================= */}

        <section className="research-section">

          <div className="research-section-heading">

            <span>03 / FEATURED WORK</span>

            <h2>
              Research <strong>Projects</strong>
            </h2>

            <p>
              Selected research projects covering misinformation detection,
              hate speech detection, NLP, transformer models, and explainable
              artificial intelligence.
            </p>

          </div>


          <div className="research-projects">

            {researchProjects.map((project) => (

              <article
                className="research-project-card"
                key={project.number}
              >

                <div className="research-project-number">
                  {project.number}
                </div>


                <div className="research-project-orbit">
                  <div></div>
                </div>


                <div className="research-project-top">

                  <div className="research-project-icon">
                    {project.icon}
                  </div>

                  <span>
                    {project.status}
                  </span>

                </div>


                <div className="research-project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="research-focus">

                    <span>
                      RESEARCH FOCUS
                    </span>

                    <strong>
                      {project.focus}
                    </strong>

                  </div>


                  <div className="research-methods">

                    {project.methods.map((method, index) => (

                      <span key={index}>
                        {method}
                      </span>

                    ))}

                  </div>

                </div>


                <div className="research-project-footer">

                  <span>
                    RESEARCH
                  </span>

                  <div></div>

                  <span>
                    {project.number}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            METHODOLOGY
        ================================================= */}

        <section className="research-section methodology-section">

          <div className="research-section-heading">

            <span>04 / METHODOLOGY</span>

            <h2>
              Research <strong>Workflow</strong>
            </h2>

            <p>
              A structured research pipeline used to transform raw textual
              data into evaluated and explainable AI predictions.
            </p>

          </div>


          <div className="methodology-flow">

            {methodology.map((step, index) => (

              <div
                className="methodology-item"
                key={step.number}
              >

                <div className="methodology-icon">
                  {step.icon}
                </div>

                <span className="methodology-number">
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>


                {index < methodology.length - 1 && (

                  <div className="methodology-connector">
                    →
                  </div>

                )}

              </div>

            ))}

          </div>

        </section>


        {/* =================================================
            RESEARCH TOOLS
        ================================================= */}

        <section className="research-section">

          <div className="research-section-heading">

            <span>05 / TECHNOLOGY STACK</span>

            <h2>
              Research <strong>Tools</strong>
            </h2>

          </div>


          <div className="research-tools">

            {researchTools.map((tool, index) => (

              <span
                className="research-tool"
                key={index}
              >
                {tool}
              </span>

            ))}

          </div>

        </section>


        {/* =================================================
            CURRENT RESEARCH
        ================================================= */}

        <section className="current-research">

          <div className="current-research-glow"></div>

          <div className="current-research-content">

            <span>
              06 / CURRENT RESEARCH DIRECTION
            </span>

            <h2>
              Building More
              <strong> Explainable &amp; Secure AI</strong>
            </h2>

            <p>
              My current research direction focuses on multilingual
              misinformation detection, hate speech detection, transformer
              based language representations, explainable artificial
              intelligence, and emerging cybersecurity applications of AI.
              The goal is to build reliable, secure, and interpretable
              intelligent systems that can address real-world challenges.
            </p>

            <div className="current-research-tags">

              <span>Multilingual NLP</span>
              <span>Fake News Detection</span>
              <span>Hate Speech Detection</span>
              <span>Explainable AI</span>
              <span>Transformers</span>
              <span>Cybersecurity</span>
              <span>Malware Detection</span>
              <span>Phishing Detection</span>

            </div>

          </div>


          <div className="current-research-symbol">
            AI
          </div>

        </section>

      </div>

    </section>
  );
}

export default Research;