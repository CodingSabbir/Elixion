import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import CountUp from 'react-countup';
const HeroSection = () => {
return (
<div>
    <section
        className="relative max-w-screen-2xl py-20 bg-[url('../../src/assets/img/heroSectionBg.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Opacity Overlay */}
        <div
            className="absolute inset-0 bg-white bg-opacity-75 sm:bg-transparent sm:from-white/95 sm:to-white/25 bg-gradient-to-r sm:bg-gradient-to-r from-white/95 to-white/25">
        </div>

        <div
            className="relative mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left ">
                <h1
                    class="bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    Elevate Your Stay at Our

                    <span class="sm:block"> Premier Hostel Destination. </span>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                    Elevate Your Stay at Our Premier Hostel Destination! Immerse yourself in a world where luxury meets
                    affordability
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="#"
                        class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto">
                        Get Started
                    </a>

                    <a href="#"
                        class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none active:text-rose-500 sm:w-auto  items-center flex gap-2 justify-center">
                        Learn More <span className='inline-flex '>
                            <FaAngleRight />
                        </span>
                    </a>
                </div>
            </div>
        </div>

    </section>
    {/* customer review */}
    <div
        className='px-4 sm:px-6 lg:-px-8 mx-auto max-w-screen-2xl grid  sm:grid-cols-3  justify-evenly items-center py-10'>
        <div className='flex gap-5 items-center  md:justify-center'>

            <h2 className='text-[40px] sm:text-[35px] md:text-[40px] font-roboto font-bold px-2'>2M+</h2>
            <p className=' md:text-[16px] text-gray-400'>Staying at this hostel was an </p>
        </div>
        <div className='flex gap-5 items-center md:justify-center '>
            <h2 className='text-[40px] sm:text-[35px] md:text-[40px] font-roboto font-bold px-2'>
                <CountUp end={81} />%
            </h2>
            <p className='text-[16px] text-gray-400'>my stay was comfortable </p>
        </div>
        <div className='flex gap-5 items-center md:justify-center'>
            <h2 className='text-[40px] sm:text-[35px] md:text-[40px] font-roboto font-bold px-2'>
                <CountUp end={3} />.9
            </h2>
            <p className='text-[16px] text-gray-400 '>The facilities were clean </p>
        </div>
    </div>

</div>
);
};

export default HeroSection;
