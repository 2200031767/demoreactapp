import React from 'react'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.webp'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpg'
import './images/background.png'
export default function Home() {
  return (
    <div className="square">
            <h1 align = "center"> <i> <font color="#6a4c93"> EXPLORE  </font> </i>  </h1>
        <br/> 
        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
   <img src = {require('./images/image1.jpeg')} height={400} width={300} alt = ""/> &nbsp; &nbsp;  
   <img src = {require('./images/image2.jpg')} height={400} width={450}  alt = ""/> &nbsp; &nbsp; 
   <img src = {require('./images/image3.jpeg')} height={400} width={550}  alt = ""/>  <br/> <br/>
   <img src = {require('./images/image4.webp')} height={300} width={450}  alt = ""/>  &nbsp; &nbsp; 
   <img src = {require('./images/image5.jpeg')} height={300} width={400}  alt = ""/ > &nbsp; &nbsp; &nbsp;
   <img src = {require('./images/image6.jpg')} height={300} width={450}  alt = ""/ > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  )
}
