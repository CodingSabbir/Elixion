import React from 'react';

const FounderCard = ({image,name,position,heading1,text1,heading2,text2}) => {
    return (
        <div>
        <article class="rounded-xl border border-gray-700 bg-[#F4F7FA] p-4">
  <div class="flex items-center gap-4">
    <img
      alt=""
      src={image}
      class="size-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-[#BE123C]">{name}</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-black font-roboto"> {position} </a>
          </li>

          

         
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-[#BE123C]">{heading1}</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
       {text1}
        </p>
      </a>
    </li>

    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 ">
        <strong class="font-medium text-[#BE123C] ">{heading2}</strong>

        <p class="mt-1 text-xs font-medium text-black font-roboto">
        {text2}
        </p>
      </a>
    </li>
  </ul>
</article>
        </div>
    );
};

export default FounderCard;