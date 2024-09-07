import React, { useState } from 'react';
import img2 from '../assets/img2.jpg';
import './Login.css';

const Login = () => {
    const [activeForm, setActiveForm] = useState(null); // To manage active form (login or register)

    // Show login form
    const showLoginForm = () => {
        setActiveForm('login');
    };

    // Show register form
    const showRegisterForm = () => {
        setActiveForm('register');
    };

    return (
        <div className="login-container">
            {/* Left side with the image */}
            <div className="login-left">
                <img src={img2} alt="Campus Event" className="login-image" />
            </div>

            {/* Right side with tagline and login/register form */}
            <div className="login-right">
                <div className={`login-content ${activeForm ? 'login-active' : 'no-border'}`}>
                    {/* Conditional rendering for taglines */}
                    {activeForm === null ? (
                        <>
                            <h2 className="main-tagline">Welcome</h2>
                            <h2 className="main-tagline">to</h2>
                            <h2 className="main-tagline">CampusSync</h2>
                        </>
                    ) : (
                        <h2 className="main-tagline single-tagline">CampusSync</h2>
                    )}

                    <h2 className="tagline">"The Seamless Event Management for Campus Life"</h2>

                    {/* Two buttons to select between Login and Register */}
                    {activeForm === null && (
                        <div className="button-group">
                            <button className="register-button" onClick={showLoginForm}>
                                Login
                            </button>
                            <button className="register-button" onClick={showRegisterForm}>
                                Register
                            </button>
                        </div>
                    )}

                    {/* Login form */}
                    {activeForm === 'login' && (
                        <>
                            <h2 className="form-header">Login</h2>
                            <form className="login-form">
                                <div className="input-container">
                                    <span className="input-icon">👤</span> {/* Small username logo */}
                                    <input type="text" placeholder="Username" required />
                                </div>
                                <div className="input-container">
                                    <span className="input-icon">🔒</span> {/* Small password logo */}
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <button type="submit" className="login-button">Login</button>
                            </form>

                            <p className="forgot-password">
                                <a href="/forgot-password">Forgot Password?</a>
                            </p>
                        </>
                    )}

                    {/* Register form */}
                    {activeForm === 'register' && (
                        <>
                            <h2 className="form-header">Register</h2>
                            <form className="login-form">
                                <div className="input-container">
                                    <span className="input-icon">👤</span> {/* Small username logo */}
                                    <input type="text" placeholder="Username" required />
                                </div>
                                <div className="input-container">
                                    <span className="input-icon">🔒</span> {/* Small password logo */}
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div className="input-container">
                                    <span className="input-icon">✉️</span> {/* Small email logo */}
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <button type="submit" className="login-button">Register</button>
                            </form>

                            <p className="register-text">
                                Already have an account? <a href="/login">Login here</a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
