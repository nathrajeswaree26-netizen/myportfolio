import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("portfolioUser"));

  const handleLogout = () => {
    localStorage.removeItem("portfolioUser");
    navigate("/login");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Certifications", path: "/certifications" },
    { name: "Publications", path: "/publications" },
    { name: "Research", path: "/research" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">
          Rajeswaree<span>.</span>
        </NavLink>

        <div className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          {user ? (
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="auth-btn">
                Login
              </NavLink>

              <NavLink to="/register" className="auth-btn register-btn">
                Register
              </NavLink>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;