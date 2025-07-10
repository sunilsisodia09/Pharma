import React from 'react';
import './LoginModal.css';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose, openRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Log in</h2>

        <p className="register-link">
          New user? <span className="register-now" onClick={openRegister}>Register Now</span>
        </p>

        <a href="https://myaccount.google.com/" className="google-btn">
          <FaGoogle className="icon" /> Continue with Google
        </a>

        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaGithub className="social-icon" />
        </div>

        <form>
          <input type="text" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <button className="sign-in-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
