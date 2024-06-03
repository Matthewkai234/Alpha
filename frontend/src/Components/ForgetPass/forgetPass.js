// Make sure react-router-dom is installed: npm install react-router-dom

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3005/forget-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
    
            if (response.ok) {
                const data = await response.text();
                setSuccessMessage(data);
                setErrorMessage('');
                navigate(`/codeVer/${email}`); // Pass the email to the VerificationCode component
            } else {
                const error = await response.text();
                setErrorMessage(error);
                setSuccessMessage('');
            }
        } catch (err) {
            console.error('Error:', err);
            setErrorMessage('An error occurred. Please try again later.');
            setSuccessMessage('');
        }
    };
    

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
                                        <label htmlFor="exampleInputEmail1">Email address:</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        <small id="emailHelp" className="form-text text-muted">We'll send a forget password link to your email.</small>
                                        {emailError && <small className="form-text text-danger">{emailError}</small>}
                                    </div>
                                    <button type="submit" className="btn-primary">Forget password</button>
                                    {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
