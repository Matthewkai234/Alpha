import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPass.css';

const capitalAlphabet = /[A-Z]/;
const symbols = /[!@#$%^&*(),.?":{}|<>]/;
const numbers = /[0-9]/;

function doesStringContain(string, regex) {
    return regex.test(string);
}

function NewPassword() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

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
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return false;
        }
        setMessage("");
        return true;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (validatePassword()) {
            try {
                const response = await fetch("http://localhost:3005/new-password", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: 'user@example.com', password })
                });

                if (response.ok) {
                    setMessage("Password reset successful");
                    console.log('Password reset successful');
                    navigate("/login");
                } else {
                    setMessage("Password reset failed: " + (await response.text()));
                }
            } catch (err) {
                console.error('Error submitting form:', err);
                setMessage("Network error, try again later.");
            }
        }
    }

    return (
        <div className="d-flex align-items-center light-blue-gradient" style={{ height: '100vh' }}>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="s">
                            <div className="card-body">
                                <div className="image-container" align="center">
                                    <img
                                        className="motorsport-logo"
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9b3848d276d1d2fc5395bb5bf4479fdc91cd78aac03f6874f22b8e07b24f30?apiKey=72ba7d21523a435cb5437721466af3ff&"
                                        alt="Motorsport Logo"
                                    />
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="newPassword">New Password:</label>
                                        <input
                                            className="sign-up-password"
                                            type="password"
                                            id="newPassword"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.currentTarget.value)}
                                            required
                                        />
                                        <p className="password-error-message">{message}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password:</label>
                                        <input
                                            type="password"
                                            className="sign-up-password"
                                            id="confirmPassword"
                                            placeholder="Confirm new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary">Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;
