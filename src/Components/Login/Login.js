import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        navigate("/home");
      } else {
        const errMsg = await response.text();
        setMessage("Login failed: " + errMsg);
      }
    } catch (err) {
      setMessage("Network error: " + err.message);
    }
  }

  return (
    <div className="login-background-main">

      <div className="login-main-section">
      
      <div className="image-container" align="center">
        <img
          className="motorsport-logo"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9b3848d276d1d2fc5395bb5bf4479fdc91cd78aac03f6874f22b8e07b24f30?apiKey=72ba7d21523a435cb5437721466af3ff&"
          alt="Motorsport Logo"
        />
      </div>

        <p className="login-header" align="center">Login</p>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div>
            <input
              className="login-email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div>
            <input
              className="login-password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
            <p className="password-error-message">{message}</p>
          </div>
          <button className="login-submit" align="center">Login</button>
          <p className="login-forgot-password" align="center">
            <Link className="forgot-password-link" to="/sign-up">
              Create Account?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
