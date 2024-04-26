import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'

export default function AdminLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) 
      {

        localStorage.setItem('admin', JSON.stringify(response.data));
        navigate("/MainHome")

      } 
      else 
      {
        setMessage("Login Failed");
        setError("");
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div align='center'>
      &nbsp;&nbsp;&nbsp;<h3 align="center"><u>Admin Login</u></h3><br/>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>&nbsp;&nbsp;&nbsp;
          <input type="utext" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <br/>
        <div>
          <label>Password</label>&nbsp;&nbsp;&nbsp;
          <input type="upassword" name="password" value={formData.password} onChange={handleChange} required />
        </div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}