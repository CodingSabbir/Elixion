import React from 'react';
import hostelImg from "../../src/assets/img/hotel.png"
const News = () => {
    return (
        <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 bg-black py-5'>
       <div className='flex justify-center items-center gap-10'>
       <div>
            <img className=' md:h-24 w-24 ' src={hostelImg} alt="" />
        </div>
        <div>
            <p className='text-white md:text-[20px] font-roboto'>Experience the heart of hospitality at our hostel, where every traveler's story finds a cozy corner.</p>
        </div>
       </div>
    </div>
    );
};

export default News;