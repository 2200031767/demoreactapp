import React, { useState } from 'react';
import axios from 'axios';
import './main.css';
import './images/background.png'


export default function Registration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2000/insertcustomer', formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          email: '',
          username: '',
          password: ''
        });
      }
      setMessage(response.data);
      setError('') // set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  
  return (
    <body className="square"> 
    <div align="center">
      <h3 align="center" style = {{color:'whitesmoke'}}><u> SignUp </u></h3> &nbsp; &nbsp; &nbsp; &nbsp; 
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="utext" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <br/> 
        <div>
        &nbsp; &nbsp; &nbsp;  <label>Email</label>  &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; < input type="uemail" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <br/>
        <div>
        &nbsp; &nbsp; &nbsp;  <label>User Name</label> &nbsp;
          <input type="utext" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <br/>
        <div> 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label>Password</label> &nbsp; 
          <input type="upassword" id="password" value={formData.password}   pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$" onChange={handleChange}  title="Password must contain at least one digit, one lowercase & one uppercase, one special character, and be at least 8 characters long." required />
        </div>
        <br/> <br/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button type="submit">SignUp</button>
      </form>
    </div>
    </body>
  );
}
