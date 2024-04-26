import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'

export default function Recommend() {
  const [formData, setFormData] = useState({
    toemail: '',
    fromemail: '',
    text:''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/Recommend`, formData);
      if (response.data != null) {
        console.log(response.data);
        navigate("/MainHome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className="container" align='center'>
      <h3><u>RECOMMEND FORM</u></h3><br></br>
      {message ? <p className="message">{message}</p> : <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>TO Email</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="iemail" id="toemail" value={formData.toemail} onChange={handleChange} required />
        </div><br></br>
        <div>
          <label>From Email</label>&nbsp;&nbsp;
          <input type="iemail" id="fromemail" value={formData.fromemail} onChange={handleChange} required />
        </div><br></br>
        <div>
          <label>Product Description</label>&nbsp;&nbsp;
          <input type="itext" id="text" value={formData.text} onChange={handleChange} required />
        </div><br></br>
        <button type="submit" align='center'>Recommend</button>
      </form>
    </div>
  );
}
