import React, { useState } from 'react';
import './LoginModal.css';

const RegisterModal = ({ isOpen, onClose, openLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Registered successfully');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
          <input type="date" name="dob" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          <button className="sign-in-btn">Register</button>
        </form>

        <p className="register-link">
          Already have an account?{' '}
          <span className="register-now" onClick={openLogin}>
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
