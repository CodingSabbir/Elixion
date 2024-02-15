import React from 'react';
import founder1 from "../../src/assets/img/founder1.png"
import founder2 from "../../src/assets/img/founder2.png"
import founder3 from "../../src/assets/img/founder3.png"
import FounderCard from './FounderCard';

const Founder = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-20 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
        <FounderCard 
        image={founder1}
        name='Kuranok'
        position='Social Activities'
        heading1='Maintenance:'
        text1=' Conducting routine maintenance tasks such as repairing equipment, fixing '
        heading2='Financial Management:'
        text2=' Overseeing the financial health of the hostel, including budgeting, forecasting, and financial reporting.'
        />
         <FounderCard 
        image={founder2}
        name='Jacks'
        position='Administration'
        heading1='Front Desk Duties:'
        text1=' Developing and implementing long-term strategies to drive the growth and success of the hostel.'
        heading2='Financial Management:'
        text2=' Overseeing the financial health of the hostel, including budgeting, forecasting, and financial reporting.'
        />
          <FounderCard 
        image={founder3}
        name='Claire Mac'
        position='Founder & CEO'
        heading1='Strategic Planning:'
        text1=' Developing and implementing long-term strategies to drive the growth and success of the hostel.'
        heading2='Financial Management:'
        text2=' Overseeing the financial health of the hostel, including budgeting, forecasting, and financial reporting.'
        />
        </div>
    );
};

export default Founder;