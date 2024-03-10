import React from 'react'
import iphone13 from './images2/iphone13.jpg'
import iphone14 from './images2/iphone14(a).jpg'
import ip15max from './images2/ip15max.jpg'
import s23 from './images2/s23ultra.webp'
import Apple from './images2//Apple.jpeg'
import image from './images2//image.png'


import  './images.css'
export default function MainHome() {

  return (
    <div>
       
      <table align='center'>
        <tr>
          <td>
          <div className="card">
        <img src={iphone13} width="250px" height="250px"  alt="iphone13" />
        <br /> <br/> 
        <h3>Iphone 13</h3>
        
        <button style={{ display: 'block', margin: '15 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 ' >Buy</button>&nbsp;&nbsp;
        <button style={{ display: 'block', margin: '50auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 ' >Add to Cart</button>
      </div>
          </td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br/> <br/>
<td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className="card">
        <img src={iphone14} width="250px" height="250px"  alt="iphone14" />
        <br />
        <h3>Iphone 14 pro max</h3>
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 ' >Buy</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Add to Cart</button>
      </div>
</td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<td>
<div className="card">
        <img src={ip15max} width="250px" height="250px"  alt="iphone15" />
        <br />
        <h3>Iphone 15</h3>
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Buy</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Add to Cart</button>
      </div>
</td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<td>
  
<div className="card">
        <img src={s23} width="250px" height="250px"  alt="samsungs23" />
        <br />
        <h3>Samsung s23 ultra </h3>
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Buy</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Add to Cart</button>
      </div>
</td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br></br>
</tr>

<tr>
<td>

  
<div className="card">
        <img src={Apple} width="250px" height="250px"  alt="Apple" />
        <br />
        <h3>Apple MacBook </h3>
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Buy</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Add to Cart</button>
      </div>

</td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<td>

  
<div className="card">
        <img src={image} width="250px" height="250px"  alt="image" />
        <br />
        <h3>Dell Laptop </h3>
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Buy</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ display: 'block', margin: '0 auto' }} className='w-50 md-2 bg-green-300 px-2 py-1 rounded focus-within:outline-blue-300 '  >Add to Cart</button>
      </div>
      
</td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</tr>
      </table>
    </div>
  )
}
