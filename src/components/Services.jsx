import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../../src/assets/img/conference-room.jpg'
import img2 from '../../src/assets/img/furniture-modern-room.jpg'
import img3 from '../../src/assets/img/interior-bedroom-design.jpg'
import img4 from '../../src/assets/img/living-room.jpg'
const Services = () => {
return (
<div className='mx auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
    <div className='py-8'>
        <h1 className='text-center text-[28px] md:text-[40px] font-roboto text-[#161C2D] py-2'>Services we offer for you</h1>
        <p className='text-center text-[14px] md:text-[16px] text-[#161C2D]'>In our residential center, you can
            experience a complete sense of relaxation, where you can surely unwind just like being at home.</p>
    </div>
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
        <div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img alt="" src={img1} className="h-56 w-full object-cover cursor-pointer" />

                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-medium font-serif cursor-pointer'>Conferenc-Room</h2>
                    </div>
                    <div>
                        <FaArrowRight className='cursor-pointer' />
                    </div>
                </div>
            </article>
        </div>
        <div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img alt="" src={img2} className="h-56 w-full object-cover cursor-pointer" />

                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-medium font-serif cursor-pointer'>Furniture-Room</h2>
                    </div>
                    <div>
                        <FaArrowRight className='cursor-pointer' />
                    </div>
                </div>
            </article>
        </div>
        <div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img alt="" src={img3} className="h-56 w-full object-cover cursor-pointer" />

                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-medium font-serif cursor-pointer'>Bedroom-Room</h2>
                    </div>
                    <div>
                        <FaArrowRight className='cursor-pointer' />
                    </div>
                </div>
            </article>
        </div>
        <div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img alt="" src={img4} className="h-56 w-full object-cover cursor-pointer" />

                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-medium font-serif cursor-pointer'>Living-Room</h2>
                    </div>
                    <div>
                        <FaArrowRight className='cursor-pointer' />
                    </div>
                </div>
            </article>
        </div>

    </div>
</div>
);
};

export default Services;
