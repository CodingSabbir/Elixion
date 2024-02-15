import React from 'react';
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa";
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    return (
        <div className='bg-[#F0FBF3] mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10'>    
         <div className='flex justify-between items-center '>
            <div >
                <h1 className='text-[20px] md:text-[35px] font-roboto'>Hostel during my recent trip, <br /> and I must say it was an unforgettable experience.</h1>
            </div>
            <div className='flex gap-5'>
                <button className='border-2 border-[#BE123C] px-2 py-2 rounded-full'><FaAngleRight  /></button>
                <button className='border-2 border-[#BE123C] px-2 py-2 rounded-full'><FaAngleLeft /></button>
            </div>
        </div>
        <section className="my-8">
	
	<div className=" mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 gap-8 lg:gap-20  lg:grid-cols-2">
		
        <TestimonialCard text='One of the highlights of my stay was the hostels organized activities and tours I had the opportunity to join guided city tours and group outings to nearby attractions.'/>

        <TestimonialCard text='The facilities at XYZ Hostel were top-notch. The rooms were clean and comfortable, providing a cozy space to rest after a day of exploring.The common areas were well-maintained and perfect for socializing.'/>
		
	</div>
</section>
    

        </div>
    );
};

export default Testimonial;