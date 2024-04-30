import React from 'react'
// import image1 from './images/image1.jpeg'
// import image2 from './images/image2.jpg'
// import image3 from './images/image3.jpeg'
// import image4 from './images/image4.webp'
// import image5 from './images/image5.jpeg'
// import image6 from './images/image6.jpg'
import './images/background.png'
import './main.css'
export default function Home() {
  return (
    <div className="scrollable-container">
    <div className="square">
            <h1 align = "center"> <i> <font color="#6a4c93"> EXPLORE  </font> </i>  </h1>
        <br/> 
        &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 
   <img src = {require('./images/iphone13.jpg')} height={350} width={350} alt = ""/> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
   <img src = {require('./images/image2.jpg')} height={350} width={350}  alt = ""/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   <img src = {require('./images/image3.jpeg')} height={350} width={350}  alt = ""/>  <br/> <br/> <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   <img src = {require('./images/image4.webp')} height={350} width={350}  alt = ""/>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   <img src = {require('./images/image5.jpeg')} height={350} width={350}  alt = ""/ > &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 
   <img src = {require('./images/image6.jpg')} height={350} width={350}  alt = ""/ > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 
    </div>
    </div>
  )
}
