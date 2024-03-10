import React, { useState } from 'react';
import './main.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './background.css';
import './images/background.png'

export default function Login() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2000/checkcustomerlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("/MainHome")
       //window.location.href = "https://newerp.kluniversity.in/"
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };
  

  return (

    <body className="square">
    
    <div align="center"> 
    <br/> <br/>
      <h3 align="center"  style = {{color:'whitesmoke'}}><u>Customer Login</u></h3> <br/>  <br/> <br/>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit} >
        <div>
          <label>Email</label>&nbsp;&nbsp;&nbsp;  &nbsp;
          &nbsp;&nbsp;&nbsp;<input type="iemail" id="email" value={formData.email} onChange={handleChange} required /> <br/> <br/> <br/> 
        </div>
        <div>
          <label>Password</label> &nbsp; &nbsp;
          <input type="ipassword" id="password" value={formData.password} onChange={handleChange} required /> <br/> <br/> <br/>
        </div>
        &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <button type="submit" className="button" >Login</button>
      </form>
      
    </div>
    </body>
  );
}