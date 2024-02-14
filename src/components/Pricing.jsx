import React from 'react';
import pricing from "../../src/assets/img/low-price.png"

const Pricing = () => {
    return (
        <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg-px-8 bg-[#ECF2F7] py-10'>
            <div>
            <h1 className='text-center text-[28px] md:text-[40px] font-roboto text-[#161C2D] py-2'>Pricing & Plans</h1>
            <div className='flex justify-center border-t-2'>
            <img className='h-16 ' src={pricing} alt="" />
            </div>
            </div>

            <div class="w-full py-5 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
  <div class="shadow p-5 rounded-lg border-t-4 border-[#15F5BA] bg-white">
    <p class="uppercase text-sm font-medium text-gray-500">
      Starter
    </p>

    <p class="mt-4 text-3xl text-gray-700 font-medium">
     $11 <span class="text-base  font-roboto font-semibold text-[#ECF2F7]">/Month</span>
    </p>

    <p class="mt-4 font-medium text-gray-700">
      Up to 5 listing monthly
    </p>

    <div class="mt-8">
      <ul class="grid grid-cols-1 gap-4">
        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          20 days only
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Weekly email newsletter
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Quota renewed monthly
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <button class="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
        Create Free Listing
      </button>
    </div>
  </div>

  <div class="shadow p-5 rounded-lg border-t-4 border-[#15F5BA] bg-white">
    <p class="uppercase text-sm font-medium text-gray-500">
      Standard
    </p>

    <p class="mt-4 text-3xl text-gray-700 font-medium">
      $30 <span class="text-base font-normal">/listing</span>
    </p>

    <p class="mt-4 font-medium text-gray-700">
      When free quota fully used
    </p>

    <div class="mt-8">
      <ul class="grid grid-cols-1 gap-4">
        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          30 days only
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Twice weekly email newsletter
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Social feed share (3 platforms)
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <button class="bg-[#15F5BA] px-3 py-2 rounded-lg w-full text-white">
        Create Standard Listing
      </button>
    </div>
  </div>
  <div class="shadow p-5 rounded-lg border-t-4 border-[#15F5BA] bg-white">
    <p class="uppercase text-sm font-medium text-gray-500">
      Standard
    </p>

    <p class="mt-4 text-3xl text-gray-700 font-medium">
      $30 <span class="text-base font-normal">/listing</span>
    </p>

    <p class="mt-4 font-medium text-gray-700">
      When free quota fully used
    </p>

    <div class="mt-8">
      <ul class="grid grid-cols-1 gap-4">
        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          30 days only
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Twice weekly email newsletter
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-[#15F5BA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Social feed share (3 platforms)
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <button class="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-lg w-full text-white">
        Create Standard Listing
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Pricing;