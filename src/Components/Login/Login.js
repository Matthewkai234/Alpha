import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const numbers = "1234567890";
  const capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()-_=+,.?/:;{}[]~";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function doesStringContain(text, collection) {
    for (const letter of collection) {
      if (text.includes(letter)) return true;
    }
    return false;
  }

  function validatePassword() {
    if (password === "") {
      setMessage("");
      return false;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return false;
    } else {
      setMessage("");
    }

    if (!doesStringContain(password, capitalAlphabet)) {
      setMessage("Password must contain at least one capital letter");
      return false;
    } else {
      setMessage("");
    }

    if (!doesStringContain(password, symbols)) {
      setMessage("Password must contain at least one symbol");
      return false;
    } else {
      setMessage("");
    }

    if (!doesStringContain(password, numbers)) {
      setMessage("Password must contain at least one number");
      return false;
    } else {
      setMessage("");
    }

    return true;
  }

  function validateEmail() {
    const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validator.test(email);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    if (!validateEmail()) {
      setMessage("Invalid Email");
      return;
    }

    if (!validatePassword()) {
      setMessage("Invalid password");
      return;
    }

    navigate("/home");
  }

  useEffect(() => {
    validatePassword();
  }, [password]);

  return (
    <div className="login-background-main">
      <div className="login-main-section">
        <p className="login-header" align="center">
          Login
        </p>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div>
            <input
              className="login-email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.currentTarget.value)}
              className="login-password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className="password-error-message">{message}</p>
          </div>
          <button className="login-submit" align="center">
            Login
          </button>
          <p className="login-forgot-password" align="center">
            <Link className="forgot-password-link" to="/signup">
              Forgot Password?{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
