import React from 'react';
import pricing from "../../src/assets/img/low-price.png"
import PricingCard from './PricingCard';

const Pricing = () => {
return (
<div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg-px-8 bg-[#ECF2F7] py-10'>
    <div>
        <h1 className='text-center text-[28px] md:text-[40px] font-roboto text-[#161C2D] py-2'>Pricing & Plans</h1>
        <div className='flex justify-center border-t-2'>
            <img className='h-16 ' src={pricing} alt="" />
        </div>
    </div>

    <div class="w-full py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">

        <PricingCard quality='Starter' money='11' time='Day' billed='Billed dayly' perTime='Per Day only'
            service1='rooms available (e.g., single, double, dormitory) '
            service2=' plan, such as Wi-Fi, breakfast, laundry services' button='Create Starter Listing' bgColor='bg-gray-400 hover:bg-gray-500'/>

        <PricingCard quality='Standard' money='30' time='Month' billed='Billed monthly' perTime=' Per Month only'
            service1=' rooms available (e.g., single, double, dormitory)'
            service2=' plan, such as Wi-Fi, breakfast, laundry services' button='Create Standard Listing' bgColor='bg-[#15F5BA]'/>

        <PricingCard quality='Premium' money='1500' time='Year' billed='   Billed yearly' perTime='  Per Year only'
            service1=' rooms available (e.g., single, double, dormitory)'
            service2=' plan, such as Wi-Fi, breakfast, laundry services' button='Create Premium Listing' bgColor='bg-gray-400 hover:bg-gray-500' />
    </div>
</div>
);
};

export default Pricing;
