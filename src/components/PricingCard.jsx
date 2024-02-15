import React from 'react';

const PricingCard = ({quality,money,time,billed,perTime,service1,service2,button,bgColor}) => {
    return (
        <div class="shadow p-5 rounded-lg border-t-4 border-[#15F5BA] bg-white">
        <p class="uppercase text-sm font-medium text-gray-500">
       {quality}
        </p>
    
        <div className='flex  items-center gap-5 py-2'>
         <div> <img src="../../src/assets/img/dollar.png" alt="" /></div>
          <div><p class="text-3xl text-gray-700 font-medium font-roboto">{money}</p></div>
          <div><p class="text-xl font-roboto font-semibold text-[#BBE2EC]">{time}</p></div>
        </div>
    
        <p class="mt-4 font-medium text-gray-700">
        {billed}
        </p>
    
        <div class="mt-8">
          <ul class="grid grid-cols-1 gap-4">
            <li class="inline-flex items-center text-gray-600">
              <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
    
              {perTime}
            </li>
    
            <li class="inline-flex items-center text-gray-600">
              <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
    
              {service1}
            </li>
    
            <li class="inline-flex items-center text-gray-600">
              <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
    
           {service2}
            </li>
          </ul>
        </div>
    
        <div class="mt-8">
          <button class={`${bgColor} px-3 py-2 rounded-lg w-full text-white`}>
            {button}
          </button>
        </div>
      </div>
    );
};

export default PricingCard;