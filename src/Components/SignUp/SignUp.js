import { Link } from "react-router-dom";
import "./SignUp.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const numbers = "1234567890";
  const capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()-_=+,.?/:;{}[]~";

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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

  function validateUsername() {
    if (username === "") {
      setMessage("");
      return false;
    }
    if (username.length < 3) {
      setMessage("User must be at least 3 characters");
      return false;
    } else {
      setMessage("");
    }

    if (!doesStringContain(username, "!@#$%^&*()- =+,.?/:;{}[]~")) {
      setMessage("This symbol is not allowed");
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

  function handleSignUpSubmit(e) {
    e.preventDefault();

    if (!validateEmail()) {
      setMessage("Invalid Email");
      return;
    }

    if (username.length < 3) {
      setMessage("Invalid Username");
    }

    if (!validatePassword()) {
      setMessage("Invalid password");
      return;
    }

    navigate("/login");
  }

  useEffect(() => {
    validateUsername();
  }, [username]);

  useEffect(() => {
    validatePassword();
  }, [password]);

  return (
    <div className="sign-up-background-main">
      <div className="sign-up-main-section">
        <p className="sign-up-header" align="center">
          Sign Up
        </p>
        <form onSubmit={handleSignUpSubmit} className="sign-up-form">
          <div>
            <input
              className="sign-up-email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div>
            <input
              className="sign-up-username"
              type="name"
              name="name"
              placeholder="Username"
              onChange={(e) => setUsername(e.currentTarget.value)}
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.currentTarget.value)}
              className="sign-up-password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className="password-error-message">{message}</p>
          </div>
          <button className="sign-up-submit" align="center">
            Sign Up
          </button>
          <p className="sign-up-have-account" align="center">
            <Link className="have-account-link" to="/login">
              Already have an account?{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
