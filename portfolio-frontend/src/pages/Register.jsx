import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/pages/register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8080";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const username = formData.username.trim();
    const email = formData.email.trim();

    if (!username || !email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API_URL}/api/auth/register`, {
        username,
        email,
        password: formData.password,
      });

      setSuccessMessage(
        "Registration successful. Redirecting to login..."
      );

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        if (error.response.status === 409) {
          setErrorMessage(
            "An account with this username or email already exists."
          );
        } else if (error.response.data?.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            "Registration failed. Please try again."
          );
        }
      } else if (error.request) {
        setErrorMessage(
          "Cannot connect to the backend. Please make sure your Spring Boot server is running."
        );
      } else {
        setErrorMessage(
          error.message || "Something went wrong during registration."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-page">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="register-background">
        <div className="register-glow register-glow-one"></div>
        <div className="register-glow register-glow-two"></div>
        <div className="register-grid"></div>
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="register-container">

        {/* ===================================================
            BRAND PANEL
        =================================================== */}

        <div className="register-brand-panel">

          <div className="register-brand-orbit"></div>

          <div className="register-brand-icon">
            ✦
          </div>

          <span className="register-brand-label">
            PERSONAL PORTFOLIO
          </span>

          <h1>
            Create
            <span> Account</span>
          </h1>

          <p>
            Register to access protected portfolio features,
            dashboards and administrative functionality.
          </p>

          <div className="register-floating-node register-node-one">
            DEV
          </div>

          <div className="register-floating-node register-node-two">
            AI
          </div>

          <div className="register-floating-node register-node-three">
            DB
          </div>

        </div>

        {/* ===================================================
            REGISTER CARD
        =================================================== */}

        <div className="register-card">

          <div className="register-card-header">

            <span>
              CREATE ACCOUNT
            </span>

            <h2>
              Sign <strong>Up</strong>
            </h2>

            <p>
              Enter your information to create your account.
            </p>

          </div>

          {/* =================================================
              ERROR
          ================================================= */}

          {errorMessage && (
            <div className="register-message register-error">

              <span>
                !
              </span>

              <p>
                {errorMessage}
              </p>

            </div>
          )}

          {/* =================================================
              SUCCESS
          ================================================= */}

          {successMessage && (
            <div className="register-message register-success">

              <span>
                ✓
              </span>

              <p>
                {successMessage}
              </p>

            </div>
          )}

          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* USERNAME */}

            <div className="register-field">

              <label htmlFor="username">
                USERNAME
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  ◉
                </span>

                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  autoComplete="username"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}

            <div className="register-field">

              <label htmlFor="email">
                EMAIL
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  @
                </span>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="register-field">

              <label htmlFor="password">
                PASSWORD
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  •
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "◉" : "◌"}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="register-field">

              <label htmlFor="confirmPassword">
                CONFIRM PASSWORD
              </label>

              <div className="register-input-wrapper">

                <span className="register-input-icon">
                  •
                </span>

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? "◉" : "◌"}
                </button>

              </div>

            </div>

            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="register-spinner"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  <span>
                    Create Account
                  </span>

                  <span className="register-button-arrow">
                    ↗
                  </span>
                </>
              )}
            </button>

          </form>

          {/* =================================================
              LOGIN LINK
          ================================================= */}

          <div className="register-login">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign In
            </Link>

          </div>

          {/* =================================================
              SECURITY
          ================================================= */}

          <div className="register-security">

            <span>
              🔒
            </span>

            <p>
              Your account will be protected by your
              authentication system and JWT-based access control.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Register;