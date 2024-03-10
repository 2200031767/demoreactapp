import React from 'react'
import address from './images/address.jpg'
import phone from './images/phone.png'
import email from './images/email.jpg'
import './images/background.png'

export default function Contact() {
  return (
    <body className="square"> 
    <div>
        <h3 align = "center"  style = {{color:'whitesmoke'}}> <u> Contact Page </u> </h3>
           <br/> <br/> <br/> <br/> <br/>
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <img src = {require('./images/address.jpg')} height={200} width={200} alt = ""/> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <img src = {require('./images/phone.png')} height={200} width={200} alt = ""/>  
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <img src = {require('./images/email.jpg')} height={200} width={200} alt = ""/>  
           <h3>    &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;<font color="#008080"> ADDRESS  </font>  </h3>
           <h3>    &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <font color="#008080"> Contact : 7981977283  </font>  </h3>
         
           <h4>  &nbsp; &nbsp;<font color="#008080">  Koneru Lakshmaih University, Green Fields </font>  </h4>        
           <h4>  &nbsp; &nbsp; &nbsp; <font color="#008080"> Vaddeswaram, Guntur District, AP, INDIA </font>  </h4>

    </div>
    </body>
  )
}
