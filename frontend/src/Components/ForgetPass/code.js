import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPassword.css';
import { useParams, useNavigate } from 'react-router-dom';

function VerificationCode() {
    const { email } = useParams();
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/verify-code', { email, code });
            setMessage('Verification code is valid');
            console.log(response.data);
            navigate('/newPass');
        } catch (error) {
            console.error(error);
            setMessage('Invalid or expired verification code (page)');
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
                                        <label htmlFor="verificationCode">Verification Code:</label>
                                        <input
                                            type="text"
                                            className="sign-up-password"
                                            id="verificationCode"
                                            placeholder="Enter verification code"
                                            value={code}
                                            onChange={handleCodeChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary">Submit Code</button>
                                </form>
                                {message && <p>{message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerificationCode;
