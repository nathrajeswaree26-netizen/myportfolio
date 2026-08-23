import "../styles/pages/achievements.css";
import { useEffect, useState } from "react";

function Achievements() {
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "Academic Excellence",
      category: "Academic Achievement",
      description:
        "Recognition for outstanding academic performance and excellence.",
      icon: "🎓",

      // ADD ALL ACADEMIC CERTIFICATE/AWARD IMAGES HERE
      images: [
        
        "/Certificates/AcadAward.jpeg",
         "/Certificates/AcadPrize.jpeg",
          "/Certificates/AcadExcell.jpeg",
        
      ],
    },

    {
      id: 2,
      title: "Research Achievement",
      category: "Research",
      description:
        "Recognition for research work in machine learning and fake news detection.",
      icon: "🔬",

      // ALL RESEARCH IMAGES FOR THIS ACHIEVEMENT
      images: [
        "/Certificates/PaperAward.jpeg",
        "/Certificates/ResAw.jpeg",
        "/Certificates/ResearchAward.jpeg"
       
      ],
    },

    {
      id: 3,
      title: "International Conference Achievement",
      category: "Research / Conference",
      description:
        "Research paper accepted and presented at an international conference.",
      icon: "🌐",

      // ALL CONFERENCE IMAGES
      images: [
        "/Certificates/IEEEPoster.jpeg",
        "/Certificates/IterPic.jpeg",
        "/Certificates/SoaSirCert.jpeg",
         "/Certificates/Presentation.jpeg",
           "/Certificates/IEEEPost2.jpeg",
            "/Certificates/IEEE.jpeg",
      ],
    },

    {
      id: 4,
      title: "Winner / Competition Achievement",
      category: "Award",
      description:
        "Recognition received for winning or performing successfully in a competition.",
      icon: "🏆",

      // ALL AWARD IMAGES
      images: [
        "/Certificates/OurPicBput.jpeg",
         "/Certificates/PrizeCer.jpeg",
          "/Certificates/MyPicBput.jpeg",
        "/Certificates/BputCarn.jpeg",
        "/Certificates/CarnivalPic.jpeg",
        "/Certificates/SinglePicBput.jpeg",
        "/Certificates/BputPrize.jpeg",
        
      ],
    },

    {
      id: 5,
      title: "National Level Hackathon",
      category: "Programming",
      description:
        "Team Nexore for participation in INNOVATE X 5.O 30 hours National Level Hackathon held at GIET,Odisha.",
      icon: "💻",

      images: [
        "/Certificates/HackDesk.jpeg",
        "/Certificates/HackCert.jpeg",
        "/Certificates/HackTwoPic.jpeg",
        "/Certificates/Hackathon.jpeg",
         "/Certificates/HackAllPic.jpeg",
        "/Certificates/Hack3Pic.jpeg",
        "/Certificates/HackPoster.jpeg",
        "/Certificates/HackSinglePic.jpeg",
        "/Certificates/HackVibes.jpeg",
      ],
    },

    {
      id: 6,
      title: "Other Recognition",
      category: "Recognition",
      description:
        "Additional achievement and recognition received for academic or extracurricular activities.",
      icon: "⭐",

      images: [
        "/Certificates/FdpMam.jpeg",
        "/Certificates/FdpCert.jpeg",
         "/Certificates/FdpSir.jpeg",
          "/Certificates/Fdp.jpeg",
          "/Certificates/InternPic.jpeg",
          "/Certificates/Internship.jpeg",
          "/Certificates/InternshipWel.jpeg",
          "/Certificates/Intern.jpeg",
          "/Certificates/Hyb1.jpeg",
          "/Certificates/HybPresen.jpeg",
          "/Certificates/HybPres2.jpeg",
          "/Certificates/ConfGroup.jpeg",
          "/Certificates/Conf4.jpeg",
          
      ],
    },
  ];

  /* =========================================
     OPEN VIEWER
  ========================================= */

  const openViewer = (achievement) => {
    setActiveAchievement(achievement);
    setActiveImageIndex(0);
  };

  /* =========================================
     CLOSE VIEWER
  ========================================= */

  const closeViewer = () => {
    setActiveAchievement(null);
    setActiveImageIndex(0);
  };

  /* =========================================
     NEXT
  ========================================= */

  const nextImage = () => {
    if (!activeAchievement) return;

    setActiveImageIndex((current) => {
      if (current >= activeAchievement.images.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  /* =========================================
     PREVIOUS
  ========================================= */

  const previousImage = () => {
    if (!activeAchievement) return;

    setActiveImageIndex((current) => {
      if (current <= 0) {
        return activeAchievement.images.length - 1;
      }

      return current - 1;
    });
  };

  /* =========================================
     KEYBOARD
  ========================================= */

  useEffect(() => {
    if (!activeAchievement) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        closeViewer();
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
      document.body.style.overflow = "";
    };
  }, [activeAchievement]);

  return (
    <section className="achievements-page">

      <div className="achievements-space-glow"></div>

      <div className="achievements-container">

        {/* ================================
            HEADING
        ================================= */}

        <div className="achievements-heading">

          <span className="section-tag">
            MY JOURNEY
          </span>

          <h1>
            Achievements <span>&amp;</span> Awards
          </h1>

          <p>
            A collection of milestones, recognitions, research achievements,
            awards, certificates, and accomplishments throughout my
            academic journey.
          </p>

        </div>


        {/* ================================
            CARDS
        ================================= */}

        <div className="achievements-grid">

          {achievements.map((achievement) => (

            <article
              className="achievement-card"
              key={achievement.id}
            >

              <div className="achievement-orbit"></div>

              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <div className="achievement-content">

                <span className="achievement-category">
                  {achievement.category}
                </span>

                <h2>
                  {achievement.title}
                </h2>

                <p>
                  {achievement.description}
                </p>

                <button
                  type="button"
                  className="certificate-button"
                  onClick={() => openViewer(achievement)}
                >
                  View Certificate / Award
                  <span>↗</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* =================================================
          FULL SCREEN VIEWER
      ================================================= */}

      {activeAchievement && (

        <div className="certificate-viewer">

          {/* TOP */}

          <div className="certificate-viewer-header">

            <div className="certificate-viewer-info">

              <span>
                {activeAchievement.category}
              </span>

              <h2>
                {activeAchievement.title}
              </h2>

            </div>

            <button
              type="button"
              className="viewer-close"
              onClick={closeViewer}
            >
              ×
            </button>

          </div>


          {/* IMAGE */}

          <div className="certificate-viewer-main">

            {activeAchievement.images.length > 1 && (
              <button
                type="button"
                className="viewer-arrow viewer-arrow-left"
                onClick={previousImage}
              >
                ‹
              </button>
            )}


            <div className="certificate-image-container">

              <img
                key={activeImageIndex}
                src={
                  activeAchievement.images[activeImageIndex]
                }
                alt={`${activeAchievement.title} ${
                  activeImageIndex + 1
                }`}
                className="certificate-full-image"
              />

            </div>


            {activeAchievement.images.length > 1 && (
              <button
                type="button"
                className="viewer-arrow viewer-arrow-right"
                onClick={nextImage}
              >
                ›
              </button>
            )}

          </div>


          {/* BOTTOM */}

          <div className="certificate-viewer-footer">

            <span className="image-count">
              {activeImageIndex + 1}
              {" / "}
              {activeAchievement.images.length}
            </span>


            {activeAchievement.images.length > 1 && (

              <div className="image-dots">

                {activeAchievement.images.map(
                  (_, index) => (

                    <button
                      type="button"
                      key={index}
                      className={
                        index === activeImageIndex
                          ? "image-dot active"
                          : "image-dot"
                      }
                      onClick={() =>
                        setActiveImageIndex(index)
                      }
                    />

                  )
                )}

              </div>

            )}

          </div>

        </div>

      )}

    </section>
  );
}

export default Achievements;