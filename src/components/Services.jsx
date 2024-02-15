import React from 'react';
import img1 from '../../src/assets/img/conference-room.jpg'
import img2 from '../../src/assets/img/furniture-modern-room.jpg'
import img3 from '../../src/assets/img/interior-bedroom-design.jpg'
import img4 from '../../src/assets/img/living-room.jpg'
import ServiceCard from './ServiceCard';
const Services = () => {
return (
<div className='mx auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
    <div className='py-8'>
        <h1 className='text-center text-[28px] md:text-[40px] font-roboto text-[#161C2D] py-2'>Services we offer for you</h1>
        <p className='text-center text-[14px] md:text-[16px] text-[#161C2D]'>In our residential center, you can
            experience a complete sense of relaxation, where you can surely unwind just like being at home.</p>
    </div>
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>    
        <ServiceCard image={img1} text='Conferenc-Room'/>
        <ServiceCard image={img2} text='Furniture-Room'/>
        <ServiceCard image={img3} text='Bedroom-Room'/>
        <ServiceCard image={img4} text='Living-Room'/>

    </div>
</div>
);
};

export default Services;
