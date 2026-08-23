import { useEffect, useState } from "react";
import "../styles/pages/certifications.css";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Replace these sample certificates with your real certificates later.
  const certifications = [
    {
      id: 1,
      title: "International Conference Web Of Science (IEEE) Research Paper Certification(ETAACT)",
      provider: "Ofline presentation Platform (ITER SOA)",
      date: "10th-11th April 2026",
      category: "Paper Publication",
      description:
        "Certification related to BERT-based Fake Odia News Detection On Social Media.",
      skills: ["AI", "ML", "NLP", "DL"],
      color: "purple",
      images: [
        "/Certificates/IEEE.jpeg",
      
      ],
    },

    {
      id: 2,
      title: "Rumor Detection System",
      provider: "Offline Presenting Platform (Trident)",
      date: "26.2.2026",
      category: "AI Project Competition (2025)",
      description:
        "Certification related to winner of the BPUT Tech Carnival for building real-time monitoring System.",
      skills: ["ML", "NLP", "DL"],
      color: "blue",
      images: [
        "/Certificates/BputCarn.jpeg",
      ],
    },

    {
      id: 3,
      title: "Oracle Certified Foundations Associate (Agentic AI Certification)",
      provider: "Online Learning Platform",
      date: "7th Aug 2026",
      category: "Artificial Intelligence",
      description:
        "Certification covering Agentic AI and its basic foundations with fundamental concepts.",
      skills: ["Machine Learning", "AI"],
      color: "cyan",
      images: [
        
        "/Certificates/Oracle.jpeg",
      ],
    },

    {
      id: 4,
      title: "Research Paper Writing",
      provider: "Offline Learning Platform",
      date: "08th-10th june 2026",
      category: "Research related",
      description:
        "Certification covering Scientific Writing (Latex), python, AI, and funded project development.",
      skills: ["AI", "Python", "Overleaf/Latex"],
      color: "pink",
      images: [
        "/Certificates/Fdp.jpeg",
      ],
    },

    {
      id: 5,
      title: "Introduction to Cloud Computing (IBM)",
      provider: "Online Learning Platform",
      date: "13th Dec 2024",
      category: "Cloud Computing (Coursera)",
      description:
        "Certification focused on cloud platform, services, data storage ,scalability, Reliability etc.",
      skills: ["AWS", "Azure", "Google cloud"],
      color: "orange",
      images: [
        "/Certificates/cloud.jpeg",
        
      ],
    },

    {
      id: 6,
      title: "Cloud Computing Applications (Part 1) (ILLINOIS)",
      provider: "Online Learning Platform",
      date: "18th Feb 2025",
      category: "Cloud Computing (Coursera)",
      description:
        "Certification covering cloud Systems and its infrastructure.",
      skills: ["Apache Zookeper","Docker"],
      color: "green",
      images: [
        "/Certificates/Part1.jpeg",
      ],
    },

    {
        id: 7,
      title: "Cloud Computing Applications (Part 2) (ILLINOIS)",
      provider: "Online Learning Platform",
      date: "20th Feb 2025",
      category: "Cloud Computing (Coursera)",
      description:
        "Certification covering Big data and applications in cloud.",
      skills: ["Google Cloud","Apache Zookeper","Docker","AWS", "Azure"],
      color: "pink",
      images: [
        "/Certificates/Part2.jpeg",
      ],
    },

      {
        id: 8,
      title: "Digital Productivity with AI (YuWaah!)",
      provider: "Online Learning Platform",
      date: "27th Dec 2025",
      category: "Passport to Earning (Unicef)",
      description:
        "Certification covering basic fundamentals of AI related to Digital market productivity.",
      skills: ["AI","Business Intelligence"],
      color: "green",
      images: [
        "/Certificates/YuWaah.jpeg",
      ],
    },

      {
        id: 9,
      title: "Master Java Concurrency and Multithreading",
      provider: "Online Learning Platform",
      date: "5th Feb 2026",
      category: "Java Multithread (Scaler Masterclass)",
      description:
        "Certification covering threads in java.",
      skills: ["Threading","Exception Handling","Garbage Collection"],
      color: "blue",
      images: [
        "/Certificates/Scaler.jpeg",
      ],
    },

      {
        id: 10,
      title: "IP Sparks Empowering Tommorrow's Innovators",
      provider: "Ofline Learning Platform",
      date: "26th April 2026",
      category: "Intellectual Property (AIC-Nalanda)",
      description:
        "Certification covering Intellectual Properties, Trademarks etc.",
      skills: ["IP","Trading", "IPR"],
      color: "orange",
      images: [
        "/Certificates/IpSpark.jpeg",
      ],
    },
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setCurrentImage(0);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (!selectedCertificate) return;

    setCurrentImage((prev) =>
      prev === selectedCertificate.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const previousImage = () => {
    if (!selectedCertificate) return;

    setCurrentImage((prev) =>
      prev === 0
        ? selectedCertificate.images.length - 1
        : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyboard = (event) => {
      if (!selectedCertificate) return;

      if (event.key === "Escape") {
        closeCertificate();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedCertificate]);

  // Prevent background scrolling while viewer is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <section className="certifications-page">

      {/* Background decoration */}
      <div className="certifications-orb orb-one"></div>
      <div className="certifications-orb orb-two"></div>
      <div className="certifications-grid-bg"></div>

      <div className="certifications-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="certifications-header">

          <div className="certification-mini-label">
            <span></span>
            MY CREDENTIALS
            <span></span>
          </div>

          <h1>
            Certifications
            <strong>&amp;</strong>
            Learning
          </h1>

          <p>
            A collection of professional certifications and learning
            milestones that reflect my continuous growth in technology,
            software development, artificial intelligence and research.
          </p>

        </header>


        {/* =========================================
            CERTIFICATION GRID
        ========================================= */}

        <div className="certifications-grid">

          {certifications.map((certificate, index) => (

            <article
              className={`certification-card ${certificate.color}`}
              key={certificate.id}
            >

              {/* Number */}
              <div className="certificate-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Decorative circle */}
              <div className="certificate-decoration"></div>


              {/* Icon */}
              <div className="certificate-icon">
                🎓
              </div>


              {/* Category */}
              <div className="certificate-category">
                {certificate.category}
              </div>


              {/* Title */}
              <h2>
                {certificate.title}
              </h2>


              {/* Provider */}
              <p className="certificate-provider">
                {certificate.provider}
              </p>


              {/* Description */}
              <p className="certificate-description">
                {certificate.description}
              </p>


              {/* Skills */}
              <div className="certificate-skills">

                {certificate.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>


              {/* Bottom */}
              <div className="certificate-card-bottom">

                <span className="certificate-date">
                  {certificate.date}
                </span>

                <button
                  className="view-certificate"
                  onClick={() => openCertificate(certificate)}
                >
                  <span>View Certificate</span>
                  <b>↗</b>
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* =================================================
          FULL SCREEN CERTIFICATE VIEWER
      ================================================= */}

      {selectedCertificate && (

        <div
          className="certificate-lightbox"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeCertificate();
            }
          }}
        >

          {/* TOP BAR */}

          <div className="certificate-lightbox-header">

            <div>

              <small>
                CERTIFICATE {currentImage + 1} OF{" "}
                {selectedCertificate.images.length}
              </small>

              <h2>
                {selectedCertificate.title}
              </h2>

            </div>

            <button
              className="lightbox-close"
              onClick={closeCertificate}
              aria-label="Close certificate viewer"
            >
              ×
            </button>

          </div>


          {/* IMAGE AREA */}

          <div className="certificate-lightbox-content">

            {selectedCertificate.images.length > 1 && (

              <button
                className="lightbox-arrow lightbox-left"
                onClick={previousImage}
                aria-label="Previous certificate"
              >
                ‹
              </button>

            )}


            <div className="certificate-image-wrapper">

              <img
                key={selectedCertificate.images[currentImage]}
                src={selectedCertificate.images[currentImage]}
                alt={`${selectedCertificate.title} ${currentImage + 1}`}
                className="certificate-large-image"
              />

            </div>


            {selectedCertificate.images.length > 1 && (

              <button
                className="lightbox-arrow lightbox-right"
                onClick={nextImage}
                aria-label="Next certificate"
              >
                ›
              </button>

            )}

          </div>


          {/* BOTTOM BAR */}

          <div className="certificate-lightbox-footer">

            <span>
              {currentImage + 1} /{" "}
              {selectedCertificate.images.length}
            </span>


            {selectedCertificate.images.length > 1 && (

              <div className="certificate-thumbnails">

                {selectedCertificate.images.map((image, index) => (

                  <button
                    key={image}
                    className={
                      index === currentImage
                        ? "thumbnail active"
                        : "thumbnail"
                    }
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={image}
                      alt={`Certificate ${index + 1}`}
                    />
                  </button>

                ))}

              </div>

            )}

            <span className="keyboard-hint">
              ESC to close • ← → to navigate
            </span>

          </div>

        </div>

      )}

    </section>
  );
}

export default Certifications;