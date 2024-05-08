import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const numbers = "1234567890";
  const capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()-_=+,.?/:;{}[]~";

  function doesStringContain(text, collection) {
    return collection.split('').some(char => text.includes(char));
  }

  function validateEmail() {
    const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validator.test(email);
  }

  function validatePassword() {
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return false;
    }
    if (!doesStringContain(password, capitalAlphabet)) {
      setMessage("Password must contain at least one capital letter");
      return false;
    }
    if (!doesStringContain(password, symbols)) {
      setMessage("Password must contain at least one symbol");
      return false;
    }
    if (!doesStringContain(password, numbers)) {
      setMessage("Password must contain at least one number");
      return false;
    }
    setMessage("");
    return true;
  }

  function validateUsername() {
    if (username.length < 3) {
      setMessage("Username must be at least 3 characters");
      return false;
    }
    setMessage("");
    return true;
  }

  async function handleSignUpSubmit(e) {
    e.preventDefault();
    if (!validateEmail()) {
      setMessage("Invalid Email");
      return;
    }
    if (!validateUsername()) {
      return;
    }
    if (!validatePassword()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
      });

      if (response.ok) {
        console.log('Registration successful');
        navigate("/login");
      } else {
        setMessage("Registration failed: " + (await response.text()));
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setMessage("Network error, try again later.");
    }
  }

  useEffect(() => {
    setMessage(""); // Clear messages when username or password changes
  }, [username, password]);

  return (
    
    <div className="sign-up-background-main">
    <div className="sign-up-main-section">
      
    
      <div className="image-container" align="center">
        <img
          className="motorsport-logo"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9b3848d276d1d2fc5395bb5bf4479fdc91cd78aac03f6874f22b8e07b24f30?apiKey=72ba7d21523a435cb5437721466af3ff&"
          alt="Motorsport Logo"
        />
      </div>
  
      <p className="sign-up-header" align="center">Sign Up</p>
      <form onSubmit={handleSignUpSubmit} className="sign-up-form">
        <div>
          <input
            className="sign-up-email"
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
            className="sign-up-username"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <input
            className="sign-up-password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
          <p className="password-error-message">{message}</p>
        </div>
        <button className="sign-up-submit" align="center">Sign Up</button>
        <p className="sign-up-have-account" align="center">
          <Link className="have-account-link" to="/login">Already have an account?</Link>
        </p>
      </form>
    </div>
  </div>
  
  );
}

export default SignUp;
