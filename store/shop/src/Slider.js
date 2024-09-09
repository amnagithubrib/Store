import React from 'react';
import Marquee from 'react-fast-marquee';
 // You need to import the 'react-fast-marquee' component
 import brand1 from './img/brand1.png';
 import brand2 from './img/brand2.png';
 import brand3 from './img/brand3.png';
 import brand4 from './img/brand4.png';
 import brand5 from './img/brand5.png';
 import brand6 from './img/brand6.png';
 import brand7 from './img/brand7.png';
 import brand8 from './img/brand8.png';
 
function MarqueeSection() {
  return (
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrappe'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'><img src={brand1} alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand2} alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand3} alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand4} alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand5} alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand6}alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand7} alt='brand'/></div>
                <div className='mx-4 w-25'><img src={brand8} alt='brand'/></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarqueeSection;