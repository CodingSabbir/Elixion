import React from 'react';
import founder1 from "../../src/assets/img/founder1.png"
import founder2 from "../../src/assets/img/founder2.png"
import founder3 from "../../src/assets/img/founder3.png"

const FounderCard = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5 py-20 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
        <div>
        <article class="rounded-xl border border-gray-700 bg-[#15F5BA] p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src={founder1}
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Kuranok</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-black font-roboto">  Social Activities </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-white">Maintenance: </strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        Conducting routine maintenance tasks such as repairing equipment, fixing  
        </p>
      </a>
    </li>

    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-white">Financial Management:</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        Overseeing the financial health of the hostel, including budgeting, forecasting, and financial reporting.
        </p>
      </a>
    </li>
  </ul>
</article>
        </div>
        <div>
        <article class="rounded-xl border border-gray-700 bg-[#15F5BA] p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src={founder2}
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Claire Mac</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-black font-roboto"> Founder &  </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-black font-roboto"> CEO </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-white">Strategic Planning:</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        Developing and implementing long-term strategies to drive the growth and success of the hostel. 
        </p>
      </a>
    </li>

    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-white">Financial Management:</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        Overseeing the financial health of the hostel, including budgeting, forecasting, and financial reporting.
        </p>
      </a>
    </li>
  </ul>
</article>
        </div>
        <div>
        <article class="rounded-xl border border-gray-700 bg-[#15F5BA] p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src={founder3}
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Jacks</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-black font-roboto"> Administration </a>
          </li>

          

         
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-white">Front Desk Duties:</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        Developing and implementing long-term strategies to drive the growth and success of the hostel. 
        </p>
      </a>
    </li>

    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-white">Financial Management:</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        Overseeing the financial health of the hostel, including budgeting, forecasting, and financial reporting.
        </p>
      </a>
    </li>
  </ul>
</article>
        </div>
        </div>
    );
};

export default FounderCard;