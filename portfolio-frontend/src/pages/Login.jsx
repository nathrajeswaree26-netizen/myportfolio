import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/pages/login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

    if (!formData.email.trim() || !formData.password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email: formData.email.trim(),
          password: formData.password,
        }
      );

      const data = response.data;

      const token =
        data.token ||
        data.accessToken ||
        data.jwt ||
        "";

      if (!token) {
        throw new Error("Authentication token was not returned.");
      }

      const storage = rememberMe
        ? localStorage
        : sessionStorage;

      storage.setItem("token", token);

      if (data.user) {
        storage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      setSuccessMessage("Login successful. Redirecting...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);

    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage(
            "Invalid email or password."
          );
        } else if (error.response.status === 403) {
          setErrorMessage(
            "You are not authorized to access this account."
          );
        } else if (
          error.response.data?.message
        ) {
          setErrorMessage(
            error.response.data.message
          );
        } else {
          setErrorMessage(
            "Login failed. Please try again."
          );
        }
      } else if (error.request) {
        setErrorMessage(
          "Cannot connect to the backend. Please make sure your Spring Boot server is running."
        );
      } else {
        setErrorMessage(
          error.message ||
            "Something went wrong during login."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="login-background">

        <div className="login-glow login-glow-one"></div>

        <div className="login-glow login-glow-two"></div>

        <div className="login-grid"></div>

      </div>


      {/* =====================================================
          LOGIN CONTAINER
      ===================================================== */}

      <div className="login-container">

        {/* ===================================================
            LEFT BRAND PANEL
        =================================================== */}

        <div className="login-brand-panel">

          <div className="login-brand-orbit"></div>

          <div className="login-brand-icon">
            ◈
          </div>

          <span className="login-brand-label">
            PERSONAL PORTFOLIO
          </span>

          <h1>
            Welcome
            <span> Back</span>
          </h1>

          <p>
            Sign in to access your protected portfolio
            dashboard and administrative features.
          </p>


          {/* Decorative circles */}

          <div className="login-floating-node node-one">
            AI
          </div>

          <div className="login-floating-node node-two">
            DEV
          </div>

          <div className="login-floating-node node-three">
            ML
          </div>

        </div>


        {/* ===================================================
            LOGIN CARD
        =================================================== */}

        <div className="login-card">

          <div className="login-card-header">

            <span>
              SECURE ACCESS
            </span>

            <h2>
              Sign <strong>In</strong>
            </h2>

            <p>
              Enter your credentials to continue.
            </p>

          </div>


          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {errorMessage && (

            <div className="login-message login-error">

              <span>
                !
              </span>

              <p>
                {errorMessage}
              </p>

            </div>

          )}


          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {successMessage && (

            <div className="login-message login-success">

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
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="login-field">

              <label htmlFor="email">
                EMAIL
              </label>

              <div className="login-input-wrapper">

                <span className="login-input-icon">
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

            <div className="login-field">

              <label htmlFor="password">
                PASSWORD
              </label>

              <div className="login-input-wrapper">

                <span className="login-input-icon">
                  •
                </span>

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
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


            {/* OPTIONS */}

            <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(
                      event.target.checked
                    )
                  }
                />

                <span>
                  Remember me
                </span>

              </label>


              <button
                type="button"
                className="forgot-password"
                onClick={() => {
                  setErrorMessage(
                    "Password recovery can be connected to your backend later."
                  );
                }}
              >
                Forgot password?
              </button>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="login-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  <span>
                    Sign In
                  </span>

                  <span className="login-button-arrow">
                    ↗
                  </span>
                </>
              )}

            </button>

          </form>


          {/* =================================================
              REGISTER
          ================================================= */}

          <div className="login-register">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create Account
            </Link>

          </div>


          {/* =================================================
              SECURITY NOTE
          ================================================= */}

          <div className="login-security">

            <span>
              🔒
            </span>

            <p>
              Your authentication is protected through
              JWT-based access control.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;