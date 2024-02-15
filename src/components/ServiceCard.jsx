import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({text,image}) => {
    
    return (
      
             <div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img alt="" src={image} className="h-56 w-full object-cover cursor-pointer" />

                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-medium font-serif cursor-pointer'>{text}</h2>
                    </div>
                    <div>
                        <FaArrowRight className='cursor-pointer' />
                    </div>
                </div>
            </article>
        </div>
       
    );
};

export default ServiceCard;