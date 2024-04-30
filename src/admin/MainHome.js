import React from 'react';
import iphone13 from './images2/iphone13.jpg';
import iphone14 from './images2/iphone14(a).jpg';
import ip15max from './images2/ip15max.jpg';
import s23 from './images2/s23ultra.webp';
import Apple from './images2/Apple.jpeg';
import image from './images2/image.png';
import canona from './images2/canona.jpeg';
import canonb from './images2/canonb.webp';
import applepods from './images2/applepods.webp';
import apple3 from './images2/apple3.jpg';
import applevp from './images2/applevp.jpeg';
import crocs1 from './images2/crocs1.avif';
import crocs2 from './images2/crocs2.avif';
import  ICON from './images2/ICON.jpg';
import icon2 from './images2/icon2.webp';
import jfsd1 from './images2/jfsd1.jpg';
import jfsd2 from './images2/jfsd2.jpg';
import MERN1 from './images2/MERN1.jpg';
import MERN2 from './images2/MERN2.jpg';
import lamp1 from './images2/lamp1.webp';
import lamp2 from './images2/lamp2.jpg';
import mug1 from './images2/mug1.jpeg';
import mug2 from './images2/mug2.jpeg';
import mug3 from './images2/mug3.jpg';
import oneplus11r from './images2/oneplus11r.jpg';
import s23ultra from './images2/s23ultra.webp';
import s24ultra from './images2/s24ultra.avif';
import Recommend from './Recommend.js';
import './images.css';
import { useNavigate } from 'react-router-dom';

export default function MainHome() {
  const recommend= () => {
    window.location.href = '/Recommend'; 
  };

  



  return (
    <div className='scrollable-container'>
      <div>
        <table align='center'>
          <tbody>
            <tr>
              <td>
                <div className='box'>
                  <img src={iphone13} width='350px' height='350px' alt='iphone13' />  
                  <h3>Iphone 13</h3> 
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>&nbsp;
                  
                <p > <b>Description: The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).</b></p>
                <h3>Price Comparison:</h3>
                <a href="https://www.google.com/url?url=https://www.apple.com/in/shop/go/product/MLPK3%3Fcid%3Daos-in-seo-pla-iphone-iphone&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwjex9fP5OCFAxU1k1YBHbcPBDQQguUECNwM&usg=AOvVaw23k_DY9TVTWegj_mwPUYx4"> iPhone 13 on Apple Store</a><br></br>
                <a href="https://www.google.com/aclk?sa=L&ai=DChcSEwiKksep5uCFAxWrXQ8CHRdCAVMYABABGgJ0Yg&gclid=CjwKCAjwoa2xBhACEiwA1sb1BEYC9lCRr1pjhETEDkRszuH_AXXUBC2Zg0W2pBdJVF2H1gBlU0TfIBoCwpUQAvD_BwE&sig=AOD64_3iHREEp4YZBc2wd_J3l2fN9hUA9A&ctype=5&q=&ved=0ahUKEwiHycKp5uCFAxWOsVYBHbcWBlgQww8Isww&adurl="> iphone13 on Amazon</a>
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={iphone14} width='350px' height='350px' alt='iphone14' />
                  <br />
                  <h3>Iphone 14 pro max</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description: iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. Crash Detection, a new safety feature, calls for help when you can't.</b></p>
                <h3>Price Comparison:</h3>
                <a href="https://www.apple.com/in/iphone/compare/?modelList=iphone-14,iphone-14-pro"> iPhone 14 pro max on Apple Store</a><br></br>
                <a href="https://www.amazon.in/Apple-iPhone-13-128GB-Pink/dp/B09G9FPGTN/ref=sr_1_5?adgrpid=65705824533&dib=eyJ2IjoiMSJ9.OCoJgZ8ghdguKvc7Ozmt3Lsua8FLjHkgudzmYiS71BK5Gz9e2PbRJTLGIEpMmwndSW58PHJ-7oclpyCSwzTOOdSa9QFPaZlXqPAuy9G3kp2pN1rLlPWZXv-HxpR57uayMqOeppB9S7GrCKiqi-eHa01oEQOUOQvtEBflsS9CP972aMjR1bsXtT3XYygFTEQjVtIZk7QSS690BEi8fhImqz_pHo51qMXyf-6xApXZcAw.MMkOz0GHFNbQug7V0V7dBl_XSIsRFFIi113awi84bYE&dib_tag=se&ext_vrnc=hi&gclid=CjwKCAjwoa2xBhACEiwA1sb1BP3ci9P8pZ2LJuUOLHMxYxWepepUrugp-_Ne4f14UJXXgzWbRDKizhoCHoAQAvD_BwE&hvadid=590713723589&hvdev=c&hvlocphy=9040204&hvnetw=g&hvqmt=e&hvrand=8316397273319386342&hvtargid=kwd-927610098870&hydadcr=24567_2265462&keywords=iphone+13+amazon&qid=1714166064&sr=8-5"> iphone13 on Amazon</a>
                  

                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={ip15max} width='350px' height='350px' alt='iphone15' />
                  <br />
                  <h3>Iphone 15</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description: The iPhone 15 series boasts advanced features such as a powerful A16 and A17 Bionic chip, enhanced camera systems with improved low-light performance, and 5G connectivity for faster data speeds. The Pro models come with additional features like ProMotion display technology and enhanced photography capabilities.8 Dec 2023</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.apple.com/in/shop/buy-iphone/iphone-15-pro/6.7%22-display-256gb-white-titanium"> iPhone 15 on Apple Store</a><br></br>
                <a href="https://www.amazon.in/Apple-iPhone-Pro-Max-256/dp/B0CHX1K2ZC"> iphone13 on Amazon</a>
                  


                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='box'>
                  <img src={s23} width='350px' height='350px' alt='samsungs23' />
                  <br />
                  <h3>Samsung s23 ultra</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>

                  <p > <b>Description: Measured diagonally, Galaxy S23's screen size is 6.1" in the full rectangle and 5.9" with accounting for the rounded corners, Galaxy S23+'s screen size is 6.6" in the full rectangle and 6.4" with accounting for the rounded corners and Galaxy S23 Ultra's screen size is 6.8" in the full rectangle and 6.8</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-cream-256-gb/p/itm322ed1a040dec?pid=MOBGMFFX44FGHNHV&lid=LSTMOBGMFFX44FGHNHVKDIBNL&marketplace=FLIPKART&q=samsung+s23+ultra&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_14_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_14_na_na_na&fm=organic&iid=d79a40e7-9308-48cf-94a1-a0d501a8610b.MOBGMFFX44FGHNHV.SEARCH&ppt=hp&ppn=homepage&ssid=5wlnwxveeo0000001714166765215&qH=7f515a0e0499d18d"> iPhone 15 on Flipkart</a><br></br>
                <a href="https://www.amazon.in/s?k=samsung+s23+ultra&crid=1R8PXFVVUILA5&sprefix=samsung+s23+ultr%2Caps%2C483&ref=nb_sb_noss_2"> iphone13 on Amazon</a>
                  


                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={Apple} width='350px' height='350px' alt='Apple' />
                  <br />
                  <h3>Apple MacBook</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description: MacBook is a brand of Mac notebook computers designed and marketed by Apple that use Apple's macOS operating system since 2006. The MacBook brand replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.apple.com/in/shop/buy-mac?afid=p238%7CsRDLJsENM-dc_mtid_187079nc38483_pcrid_694334137344_pgrid_113271655607_pntwk_g_pchan__pexid__ptid_kwd-335670223_&cid=aos-IN-kwgo-mac--slid---product-"> MacBook on Amozon</a><br></br>
                <a href="https://www.apple.com/in/shop/buy-mac?afid=p238%7CsRDLJsENM-dc_mtid_187079nc38483_pcrid_694334137344_pgrid_113271655607_pntwk_g_pchan__pexid__ptid_kwd-335670223_&cid=aos-IN-kwgo-mac--slid---product-"> MacBook on AppleStore</a>
                  

                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={image} width='350px' height='350px' alt='laptop' />
                  <br />
                  <h3>Dell Laptop</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description: Dell customizable laptops include a selection of pre-configured models with a variety of processors, graphics cards, hard drives, RAM, storage drives, touchscreen technology, and more. With a choice of screen resolution, you can configure an HD laptop or a 4K laptop.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Dell-Inspiron-i5-1335U-Processor-Platinum/dp/B0CCSQ62CT/ref=sr_1_4?dib=eyJ2IjoiMSJ9.go720PhKZEmRADiXz3tOi8seHGG698A9vPwDcyEHAR3c4iWS-eci8HOFbzSgtPKqcTqtxPKodotHZN74SvMtUg1w0iDXv-woMezaazXnWSNWaLz3zOTQFDlY0Fe3VWhbFAvQexLVlzkH8UH7t0BobFqG4dYdrTSLgCK7Gm9pe_Has0mUFRlrtqDZCbd3RRkYwCUJFKEzyaHCAautHfaREwzh0-_ML9_3fzb5wh-J94Y.6pe7KJjn5u84rJLzmvhLK_KzKN1FAiF1VgrEE-YS-v8&dib_tag=se&keywords=dell+laptop+touch&qid=1714167809&sr=8-4"> Dell Laptop on Amazon</a><br></br>
                <a href="https://www.dell.com/en-in/shop/laptops-2-in-1-pcs/new-inspiron-14-2-in-1-laptop/spd/inspiron-14-7440-2-in-1-laptop/oic7440100601rinu1"> Dell Laptop on DellStore</a>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='box'>
                  <img src={canona} width='350px' height='350px' alt='camera' />
                  <br />
                  <h3>Canon Digital Camera SX160</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description: It's video capabilities are better than Nikon which is the nearest competitor. Dual pixel auto focus invented and patented by Canon. Good for videos and fast action photography. Camera buffer is much larger than other brands</b></p>

<h3>Price Comparison:</h3>
<a href="https://in.canon/en/consumer/eos-r50-rf-s18-45mm-f-4-5-6-3-is-stm-amp-rf-s55-210mm-f-5-7-1-is-stm/product?category=photography&subCategory=interchangeable-lens-cameras"> Dell Laptop on Flipkart</a><br></br>
<a href="https://www.amazon.in/Canon-Mirrorless-Digital-RF-S18-45mm-Stabilisation/dp/B0B2KV35NX/ref=sr_1_4?crid=1SHYUH1Y615IL&dib=eyJ2IjoiMSJ9.Hx5n231VPQkR96KEhdv1ATDU9I_5M1qMfwAucfSpvNt7dxZBQ0agNeXvsnjok3WrFdyk0UTj3QZZtR3y9lsyKBNYKKrfqbBNEV8RmN25jBgMT5rYCYzGN4C9Kvm_MZNl4VJbbVaywzHwxRgv9bwd_aetABKIj5_zjx_PV39kh4_aLC8qCQLlvC1CtKU4_1VrJXMyujr4F68Tnc2sBoaiX2DfBPqodyQORESESzVmedI.Td7z1hr4w6VvHXX7FXm_GJ2rs43BC1o0ZGGCL4BulDE&dib_tag=se&keywords=canon+camera&qid=1714167943&sprefix=canon+camera%2Caps%2C440&sr=8-4"> Canon Digital Camera on Amazon  </a>

                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={canonb} width='350px' height='350px' alt='canon' />
                  <br />
                  <h3>Canon Digital Camera XUS </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description: It's video capabilities are better than Nikon which is the nearest competitor. Dual pixel auto focus invented and patented by Canon. Good for videos and fast action photography. Camera buffer is much larger than other brands</b></p>

<h3>Price Comparison:</h3>
<a href="https://in.canon/en/consumer/eos-r50-rf-s18-45mm-f-4-5-6-3-is-stm-amp-rf-s55-210mm-f-5-7-1-is-stm/product?category=photography&subCategory=interchangeable-lens-cameras"> Dell Laptop on Flipkart</a><br></br>
<a href="https://www.amazon.in/Canon-Mirrorless-Digital-RF-S18-45mm-Stabilisation/dp/B0B2KV35NX/ref=sr_1_4?crid=1SHYUH1Y615IL&dib=eyJ2IjoiMSJ9.Hx5n231VPQkR96KEhdv1ATDU9I_5M1qMfwAucfSpvNt7dxZBQ0agNeXvsnjok3WrFdyk0UTj3QZZtR3y9lsyKBNYKKrfqbBNEV8RmN25jBgMT5rYCYzGN4C9Kvm_MZNl4VJbbVaywzHwxRgv9bwd_aetABKIj5_zjx_PV39kh4_aLC8qCQLlvC1CtKU4_1VrJXMyujr4F68Tnc2sBoaiX2DfBPqodyQORESESzVmedI.Td7z1hr4w6VvHXX7FXm_GJ2rs43BC1o0ZGGCL4BulDE&dib_tag=se&keywords=canon+camera&qid=1714167943&sprefix=canon+camera%2Caps%2C440&sr=8-4"> Canon Digital Camera on Amazon  </a>

                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={applepods} width='350px' height='350px' alt='apple' />
                  <br />
                  <h3>APPLE GEN 3 </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:Updated design. AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear. The stem is 33 per cent shorter than AirPods (3nd generation) and includes a force sensor to easily control music and calls </b></p>

<h3>Price Comparison:</h3>
<a href="https://www.apple.com/in/shop/product/MTJV3HN/A/airpods-pro?fnode=6f5aea67e8e7b75d5e26e2656659049101cb8208a2d1aa3f7a51c35c4a2130e68996297117f369c6ccf192bee18350f7d8b6a98f47d02a8a4720a74dd4d37d06eb3045b498d0f09ba4e4f673175da1e554637eb215d982e1587ea2cba5092c68d4664b17ea10102cae8c69ab05a238600450976e99b307927886a08c5e2518be"> Air Pods on Apple Store</a><br></br>
<a href="https://www.amazon.in/Apple-AirPods-Generation-MagSafe-USB%E2%80%91C/dp/B0CHX719JD/ref=sr_1_2_sspa?crid=3BVCI9YENKV1D&dib=eyJ2IjoiMSJ9.eNh5-tRTJTQhfbDIdIsRZuPYPcW0E6GN_EBysQytY0Oodwd_sMQJ3iq13kQOKPHbpCckPCock5iEGCsrYAt09EU6J8eEBfQoif2chYyExhtGI60z-BOR1W1uYsSYHya1mkXPPAjcmOEU067mt6cZRlSkk6gwxUfAl863kqZquRMdPj9n_BWtmtx8PIEv398MLSKNbsok6JW_VfMLZip17EptXAyitWesiD27x0GnDHQ.hyWRtdJxo81Mar354aQ9oeetK31gNVua982wGd5rlQk&dib_tag=se&keywords=earpods&qid=1714168079&sprefix=earpods%2Caps%2C452&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">  AirPods Camera on Amazon  </a>

                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='box'>
                  <img src={apple3} width='350px' height='350px' alt='apple' />
                  <br />
                  <h3>APPLE GEN 2</h3>
                
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:Updated design. AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear. The stem is 33 per cent shorter than AirPods (2nd generation) and includes a force sensor to easily control music and calls </b></p>

<h3>Price Comparison:</h3>
<a href="https://www.apple.com/in/shop/product/MTJV3HN/A/airpods-pro?fnode=6f5aea67e8e7b75d5e26e2656659049101cb8208a2d1aa3f7a51c35c4a2130e68996297117f369c6ccf192bee18350f7d8b6a98f47d02a8a4720a74dd4d37d06eb3045b498d0f09ba4e4f673175da1e554637eb215d982e1587ea2cba5092c68d4664b17ea10102cae8c69ab05a238600450976e99b307927886a08c5e2518be"> Air Pods on Apple Store</a><br></br>
<a href="https://www.amazon.in/Apple-AirPods-Generation-MagSafe-USB%E2%80%91C/dp/B0CHX719JD/ref=sr_1_2_sspa?crid=3BVCI9YENKV1D&dib=eyJ2IjoiMSJ9.eNh5-tRTJTQhfbDIdIsRZuPYPcW0E6GN_EBysQytY0Oodwd_sMQJ3iq13kQOKPHbpCckPCock5iEGCsrYAt09EU6J8eEBfQoif2chYyExhtGI60z-BOR1W1uYsSYHya1mkXPPAjcmOEU067mt6cZRlSkk6gwxUfAl863kqZquRMdPj9n_BWtmtx8PIEv398MLSKNbsok6JW_VfMLZip17EptXAyitWesiD27x0GnDHQ.hyWRtdJxo81Mar354aQ9oeetK31gNVua982wGd5rlQk&dib_tag=se&keywords=earpods&qid=1714168079&sprefix=earpods%2Caps%2C452&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">  AirPods Camera on Amazon  </a>

                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={applevp} width='350px' height='350px' alt='apple' />
                  <br />
                  <h3>APPLE VISION PRO  </h3>
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:The device runs visionOS, a mixed-reality operating system derived from iOS frameworks using a 3D user interface; it supports multitasking via windows that appear to float within the user's surroundings, as seen by cameras built into the headset </b></p>

<h3>Price Comparison:</h3>
<a href="https://www.apple.com/shop/buy-vision/apple-vision-pro"> Apple Vision Pro on Apple Store</a><br></br>

                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={crocs1} width='350px' height='350px' alt='crocs' />
                  <br />
                  <h3>WHITE CROCS </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:All Crocs™ shoes are uniquely designed and manufactured using the company's proprietary closed-cell resin, Croslite™, a technology that gives each pair of shoes the soft, comfortable, lightweight, non-marking and odor-resistant qualities that Crocs wearers know and love.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.flipkart.com/crocs-bayaband-men-white-clogs/p/itmfgpmtwf4uznzh?pid=SNDFYEZSR6ZECEXR&lid=LSTSNDFYEZSR6ZECEXRKCAMVW&marketplace=FLIPKART&q=hite+crocs&store=osp&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=87d89779-7e3b-413b-b15a-b06a942d2b01.SNDFYEZSR6ZECEXR.SEARCH&ppt=sp&ppn=sp&ssid=6ptjfwf5bk0000001714168641661&qH=b0b075fed523cfa8"> White Crocs on Flipkart</a><br></br>
                <a href="https://www.crocs.in/bayaband-white-navy-unisex-clog.html?utm_source=google&utm_medium=cpc&utm_campaign=PmaxP0+P1&gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BFshTRMg5gKNVc78-DL9kQ_wx7VjjfS_8D-Ai5Cl5ij7VD-_o9_l5RoCLQ0QAvD_BwE"> White Crocs on Amazon</a>
                  

                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='box'>
                  <img src={crocs2} width='350px' height='350px' alt='crocs' />
                  <br />
                  <h3>BLACK CROCS</h3>
                
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:All Crocs™ shoes are uniquely designed and manufactured using the company's proprietary closed-cell resin, Croslite™, a technology that gives each pair of shoes the soft, comfortable, lightweight, non-marking and odor-resistant qualities that Crocs wearers know and love.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.flipkart.com/crocs-bayaband-men-white-clogs/p/itmfgpmtwf4uznzh?pid=SNDFYEZSR6ZECEXR&lid=LSTSNDFYEZSR6ZECEXRKCAMVW&marketplace=FLIPKART&q=hite+crocs&store=osp&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=87d89779-7e3b-413b-b15a-b06a942d2b01.SNDFYEZSR6ZECEXR.SEARCH&ppt=sp&ppn=sp&ssid=6ptjfwf5bk0000001714168641661&qH=b0b075fed523cfa8"> White Crocs on Flipkart</a><br></br>
                <a href="https://www.crocs.in/bayaband-black-white-unisex-clog.html"> Black Crocs on Crocs Store</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={ICON} width='350px' height='350px' alt='perfume' />
                  <br />
                  <h3>ICON PERFUME  </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:The Icon The Perfume, a formula for success. The essence of success: a combination of black pepper, suede and amber accord. Ingredients that each have a distinct intensity, coming together to create an intense and lasting fragrance. Spritz onto pulse points.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Antonio-Banderas-Icon-Toilette-100ml/dp/B08Z95THYV"> Icon perfume on Amazon</a><br></br>
                <a href="https://www.shoppersstop.com/antonio-banderas-the-icon-the-perfume-eau-de-parfum-for-men/p-SS22ANTON999332_base"> Icon Perfume on lifestyle</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={icon2} width='350px' height='350px' alt='perfume' />
                  <br />
                  <h3>ICON PERFUME  </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:The Icon The Perfume, a formula for success. The essence of success: a combination of black pepper, suede and amber accord. Ingredients that each have a distinct intensity, coming together to create an intense and lasting fragrance. Spritz onto pulse points.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.houseofem5.com/products/em5%E2%84%A2-icon-perfume-for-men-aromatic-citrus-fresh-spicy-edp-spray-strong-and-long-lasting-spray-luxury-gift-for-him"> Icon perfume on Flipkart</a><br></br>
                  
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='box'>
                  <img src={jfsd2} width='350px' height='350px' alt='book' />
                  <br />
                  <h3>JAVA FOR WEB DEVELOPMENT</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>

                  <p > <b>Description:Full-Stack Java Handbook fully updated for Java, Spring Boot, JSF, JSP, and servlet. The book will show you how to create modern web applications with real-world examples. And starting with the Java installation and ending with the Restful microservice with database connectivity.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Development-Spring-Hibernate-jQuery-Bootstrap/dp/8126519916">  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/full-stack-java-development-spring-mvc-hibernate-jquery-bootstrap-1/p/itm53b1352e5d1a3">  on Flipkart</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={jfsd1} width='350px' height='350px' alt='book' />
                  <br />
                  <h3>FULL STACK DEVELOPMENT BOOK </h3>
                 
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  
                  <p > <b>Description:Full-Stack Java Handbook fully updated for Java, Spring Boot, JSF, JSP, and servlet. The book will show you how to create modern web applications with real-world examples. And starting with the Java installation and ending with the Restful microservice with database connectivity.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Development-Spring-Hibernate-jQuery-Bootstrap/dp/8126519916">  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/full-stack-java-development-spring-mvc-hibernate-jquery-bootstrap-1/p/itm53b1352e5d1a3">  on Flipkart</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={MERN1} width='350px' height='350px' alt='book' />
                  <br />
                  <h3>MERN STACK DEVEPOLMENT BOOK </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  
                  <p > <b>Description:Full-Stack Java Handbook fully updated for Java, Spring Boot, JSF, JSP, and servlet. The book will show you how to create modern web applications with real-world examples. And starting with the Java installation and ending with the Restful microservice with database connectivity.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Development-Spring-Hibernate-jQuery-Bootstrap/dp/8126519916">  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/full-stack-java-development-spring-mvc-hibernate-jquery-bootstrap-1/p/itm53b1352e5d1a3">  on Flipkart</a>
                  
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='box'>
                  <img src={MERN2} width='350px' height='350px' alt='book' />
                  <br />
                  <h3>PRO MERN STACK </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  
                  <p > <b>Description:Full-Stack Java Handbook fully updated for Java, Spring Boot, JSF, JSP, and servlet. The book will show you how to create modern web applications with real-world examples. And starting with the Java installation and ending with the Restful microservice with database connectivity.</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Pro-MERN-Stack-Development-Express/dp/1484226526">  on Amazon</a><br></br>
                <a href="https://bookstation.in/products/9781484252758?variant=48073757491492&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoofIsxlrrFTHmc7iIW1td1NfhTP0ujXRmbspCAuk1vM5CB_DLuQ6T0">  on Flipkart</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={lamp1} width='350px' height='350px' alt='lamp' />
                  <br />
                  <h3>STUDY LAMP </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:A lamp is a small appliance that holds an electric bulb and produces light. Your desk lamp might provide enough light for you to read by at night, or you may have to turn on a floor lamp too after the sun goes down</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/WEIRD-WOLF-Plastic-Rechargeable-Warranty/dp/B0BXT1HKF4/ref=sr_1_2_sspa?crid=3KAAAM5P2O3D0&dib=eyJ2IjoiMSJ9.kv_FNthrUk1kzeNFsmf8IScBIGLBj9TVmu4ozIhw4Bb9i_N90WHcJ4ag42jVpJQdVy34r0qnU5IqWu8VseHJ66qIEyVsQoa7eKSSPuiJfgb1zF82Rsxg_cHb1Kssg6tpfOYJq1JDSHwzX_fXA2JzyTtgH9sXVuJQT61PY4gkcu_TEd4q_HtdVP-RcZ6xzGWxt3VM6WGuJGxhUpHHVaVB7WsZM1T-OJH2OsRqbRzUu1SNNfYjhY6zgB7wL80MlGZLYMEqNAALwKqw0U-AANf5QZ9_OovZewMJAMz6oNypH8U.AkBwn7BI2vuWd8trixLCGFNWzW5_sC2foThw7sX115s&dib_tag=se&keywords=study+lamp&qid=1714170225&sprefix=study+lamp%2Caps%2C483&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">study Lamp  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/weird-wolf-3-colour-mode-light-white-warm-warm-white-table-study-lamp/p/itme37a2832a6220?pid=TLPGNM8FR2GGCW4J&lid=LSTTLPGNM8FR2GGCW4JZNXUBK&marketplace=FLIPKART&q=study+lamp&store=jhg%2Fyqn%2Fk5y&spotlightTagId=BestsellerId_jhg%2Fyqn%2Fk5y&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=2d161e81-6adb-4ae7-97a3-0d4c76ad14f4.TLPGNM8FR2GGCW4J.SEARCH&ppt=sp&ppn=sp&ssid=pdrjf917mo0000001714170205898&qH=6507311c3b3fdf77"> study Lamp on Flipkart</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={lamp2} width='350px' height='350px' alt='lamp' />
                  <br />
                  <h3> BED LAMP </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  <p > <b>Description:A lamp is a small appliance that holds an electric bulb and produces light. Your desk lamp might provide enough light for you to read by at night, or you may have to turn on a floor lamp too after the sun goes down</b></p>

                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Homesake%C2%AE-Decoration-Bedroom-Balcony-Outdoor/dp/B09Z2Y9SR7/ref=sr_1_10?crid=16G62FH57PSYQ&dib=eyJ2IjoiMSJ9.voStKZOV3vxAx3OGyOrYguxbW_8bKHW9rn-poAuxpB4ImAXMpsaTiWLuqQEOLMtqH9BlYSzevP3yZf6tqMU1xM8bhZdRvTbl0vLcZirDplKSBia2I9IDVj3c1OYgzPl007mNg7LXfW-154giVXmtuk6ycvNqhrZqG-J1nNcMrT9G5kspksF1gmVM8BDe4rhV9yh3dMbGXFSagpY5vVWe8dK9Xo_Owm9YdIZsgVE6R0SeSo3SdUQxpMAmnomWr0qbbQGdSXBUxKDZn7pWnBAjmSwDSBHs3EYTcq0hmz0a4dw.X-srOIE_v7uPcoHP0Kfk5Jv6jmFDT-gAIRimujjXKeU&dib_tag=se&keywords=bed+lamp&qid=1714170354&sprefix=bed+lamp%2Caps%2C313&sr=8-10">Bed Lamp  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/aswal-handicraft-white-metal-base-silk-fabric-table-lamp-night-light-bedroom-decoration-bedside-living-room-hall-lighting-home-decor/p/itma6c8594ac1025?pid=TLPG66FYETYYFXYX&lid=LSTTLPG66FYETYYFXYXITNF7O&marketplace=FLIPKART&q=bed+lamp&store=jhg%2F6w8&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_PHCCbetvkmem9Dov8Lw4jV1WEAHTAoBZuKw9XdbUt0SZVXUOzZeHj_P3dgYhAPrtQA_oxbRbOWVSQfUQP8NGwQ%3D%3D&ppt=sp&ppn=sp&ssid=4pnc3l4fio0000001714170290810&qH=b7e4f16cef31283e"> Bed Lamp on Flipkart</a>
                  
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='box'>
                  <img src={mug1} width='350px' height='350px' alt='mug' />
                  <br />
                  <h3>FRIENDS MUG </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                 < p > <b>Description: Coffee cups and mugs may be made of glazed ceramic, porcelain, plastic, glass, insulated or uninsulated metal, and other materials. In the past, coffee cups have also been made of bone, clay, and wood. Disposable coffee cups may be made out of paper or polystyrene foam (often mistakenly called Styrofoam).</b></p>
                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Dravizon-Stainless-Insulated-Reusable-Thermal/dp/B09Z8BY3DY/ref=sr_1_8?crid=1RX8YI21T2O5V&dib=eyJ2IjoiMSJ9.v9TdvjHfc8D_tX8Ee6OZCrRE1VWenyyK1M0D_Af6Ypcco4PITNvSq6XEV618IqqerQQfkAt4r7GcqqNEBl-2cy7xIfBtBbPUULr_CWFMwPiCMAdCkTupyVa3UcIcSEfZXkhyupbV_TjpyU_kw199z9wzezE3WP6O4UtsN24WOPucx7F8WepwuThuY1Mp5DuX23flVnMNxU9xIgxBKZp2Iv_OBPJB10syT15LttXZS2T-T2QLiq7cHHD5NPTepJHml1B1GGAQjVf_ofheBbPTjIagYX0T1TSnuvtxvJzf8JY.5Q4SLvI5OuV3JtS1Pp0wrHa4hMRc7a9horj_zwuRoYM&dib_tag=se&keywords=mug+for+coffee&qid=1714170512&sprefix=mug+for+%2Caps%2C418&sr=8-8">  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/nirvaana-double-wall-vacuum-insulated-tea-coffee-thermos-flask-travel-stainless-steel-bath-mug/p/itm3a4635e03fb89?pid=MUGGGB4FRWFPNFBD&lid=LSTMUGGGB4FRWFPNFBDRMZSXG&marketplace=FLIPKART&q=coffee+mug&store=upp%2Fi7t%2Fmsi&srno=s_1_10&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&fm=Search&iid=7d23babf-7f19-4c22-b5d6-8a42fe24a37c.MUGGGB4FRWFPNFBD.SEARCH&ppt=pp&ppn=pp&ssid=nx4hngtjhc0000001714170546161&qH=8c8dd5f243fb4cfd">  on Flipkart</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={mug2} width='350px' height='350px' alt='flask' />
                  <br />
                  <h3>COFFEE FLASK</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  < p > <b>Description: Coffee cups and mugs may be made of glazed ceramic, porcelain, plastic, glass, insulated or uninsulated metal, and other materials. In the past, coffee cups have also been made of bone, clay, and wood. Disposable coffee cups may be made out of paper or polystyrene foam (often mistakenly called Styrofoam).</b></p>
                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Dravizon-Stainless-Insulated-Reusable-Thermal/dp/B09Z8BY3DY/ref=sr_1_8?crid=1RX8YI21T2O5V&dib=eyJ2IjoiMSJ9.v9TdvjHfc8D_tX8Ee6OZCrRE1VWenyyK1M0D_Af6Ypcco4PITNvSq6XEV618IqqerQQfkAt4r7GcqqNEBl-2cy7xIfBtBbPUULr_CWFMwPiCMAdCkTupyVa3UcIcSEfZXkhyupbV_TjpyU_kw199z9wzezE3WP6O4UtsN24WOPucx7F8WepwuThuY1Mp5DuX23flVnMNxU9xIgxBKZp2Iv_OBPJB10syT15LttXZS2T-T2QLiq7cHHD5NPTepJHml1B1GGAQjVf_ofheBbPTjIagYX0T1TSnuvtxvJzf8JY.5Q4SLvI5OuV3JtS1Pp0wrHa4hMRc7a9horj_zwuRoYM&dib_tag=se&keywords=mug+for+coffee&qid=1714170512&sprefix=mug+for+%2Caps%2C418&sr=8-8">  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/nirvaana-double-wall-vacuum-insulated-tea-coffee-thermos-flask-travel-stainless-steel-bath-mug/p/itm3a4635e03fb89?pid=MUGGGB4FRWFPNFBD&lid=LSTMUGGGB4FRWFPNFBDRMZSXG&marketplace=FLIPKART&q=coffee+mug&store=upp%2Fi7t%2Fmsi&srno=s_1_10&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&fm=Search&iid=7d23babf-7f19-4c22-b5d6-8a42fe24a37c.MUGGGB4FRWFPNFBD.SEARCH&ppt=pp&ppn=pp&ssid=nx4hngtjhc0000001714170546161&qH=8c8dd5f243fb4cfd">  on Flipkart</a>
                  
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={mug3} width='350px' height='350px' alt='mug' />
                  <br />
                  <h3>MUG </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                  < p > <b>Description: Coffee cups and mugs may be made of glazed ceramic, porcelain, plastic, glass, insulated or uninsulated metal, and other materials. In the past, coffee cups have also been made of bone, clay, and wood. Disposable coffee cups may be made out of paper or polystyrene foam (often mistakenly called Styrofoam).</b></p>
                  <h3>Price Comparison:</h3>
                <a href="https://www.amazon.in/Dravizon-Stainless-Insulated-Reusable-Thermal/dp/B09Z8BY3DY/ref=sr_1_8?crid=1RX8YI21T2O5V&dib=eyJ2IjoiMSJ9.v9TdvjHfc8D_tX8Ee6OZCrRE1VWenyyK1M0D_Af6Ypcco4PITNvSq6XEV618IqqerQQfkAt4r7GcqqNEBl-2cy7xIfBtBbPUULr_CWFMwPiCMAdCkTupyVa3UcIcSEfZXkhyupbV_TjpyU_kw199z9wzezE3WP6O4UtsN24WOPucx7F8WepwuThuY1Mp5DuX23flVnMNxU9xIgxBKZp2Iv_OBPJB10syT15LttXZS2T-T2QLiq7cHHD5NPTepJHml1B1GGAQjVf_ofheBbPTjIagYX0T1TSnuvtxvJzf8JY.5Q4SLvI5OuV3JtS1Pp0wrHa4hMRc7a9horj_zwuRoYM&dib_tag=se&keywords=mug+for+coffee&qid=1714170512&sprefix=mug+for+%2Caps%2C418&sr=8-8">  on Amazon</a><br></br>
                <a href="https://www.flipkart.com/nirvaana-double-wall-vacuum-insulated-tea-coffee-thermos-flask-travel-stainless-steel-bath-mug/p/itm3a4635e03fb89?pid=MUGGGB4FRWFPNFBD&lid=LSTMUGGGB4FRWFPNFBDRMZSXG&marketplace=FLIPKART&q=coffee+mug&store=upp%2Fi7t%2Fmsi&srno=s_1_10&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&fm=Search&iid=7d23babf-7f19-4c22-b5d6-8a42fe24a37c.MUGGGB4FRWFPNFBD.SEARCH&ppt=pp&ppn=pp&ssid=nx4hngtjhc0000001714170546161&qH=8c8dd5f243fb4cfd">  on Flipkart</a>
                  
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className='box'>
                  <img src={s23ultra} width='350px' height='350px' alt='samsung' />
                  <br />
                  <h3>S23 ULTRA </h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={s24ultra} width='350px' height='350px' alt='phone' />
                  <br />
                  <h3>S24 ULTRA</h3>
                  
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                </div>
              </td>
              <td>
                <div className='box'>
                  <img src={oneplus11r} width='350px' height='350px' alt='pods' />
                  <br />
                  <h3>ONEPLUS 11R </h3>
                  <button className='buy-button'>Buy</button>
                  <button onClick={recommend} className='recommend-button'>Recommend</button>
                </div>
              </td>
            </tr>



          </tbody>
        </table>
      </div>
    </div>
  );
}
