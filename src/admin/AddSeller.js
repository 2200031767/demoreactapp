import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import '../seller/Seller.css'; 
import { useNavigate } from 'react-router-dom';

export default function AddSeller() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    companyName: '',
    location: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/Seller`, formData); // Updated endpoint to match backend
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          gender: '',
          dateOfBirth: '',
          companyName: '',
          location: '',
          password: ''
        });
        navigate("/MainHome");
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="container">
      {message ? (
        <h3 align="center" className="message">{message}</h3>
      ) : (
        <h3 align="center" className="error">{error}</h3>
      )}

      <div className="cont" align='center'>
        <div className="forms">
          <div className="form login">
            <span className="title" align='center'>Seller Registration</span>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input type="text" id="name" value={formData.name} placeholder="Enter your Name" onChange={handleChange} required />
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <select id="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Other</option>
                </select>
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input type="date" id="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
                <i className="uil uil-user"></i>
              </div>
              
              <div className="input-field">
                <input type="text" id="companyName" placeholder="Enter your Company Name" value={formData.companyName} onChange={handleChange} required />
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input type="text" id="location" value={formData.location} placeholder="Enter your Location" onChange={handleChange} required />
                <i className="uil uil-user-location"></i>
              </div>
              <div className="input-field">
                <input type="password" className="password" placeholder="Enter your password" id="password" value={formData.password} onChange={handleChange} required />
                <i className="uil uil-lock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="termCon"/>
                  <label htmlFor="termCon" className="text">I accept all terms and conditions</label>
                </div>
              </div>
              <div className="input-field button">
                <button type="submit" >Add Seller</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
