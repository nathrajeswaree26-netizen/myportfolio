import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import "./styles/glass.css";
import "./styles/navbar.css";
import "./styles/footer.css";

import "./styles/pages/home.css";
import "./styles/pages/about.css";
import "./styles/pages/education.css";
import "./styles/pages/experience.css";
import "./styles/pages/skills.css";
import "./styles/pages/projects.css";
import "./styles/pages/achievements.css";
import "./styles/pages/certifications.css";
import "./styles/pages/publications.css";
import "./styles/pages/research.css";
import "./styles/pages/resume.css";
import "./styles/pages/contact.css";
import "./styles/pages/auth.css";
import "./styles/pages/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);