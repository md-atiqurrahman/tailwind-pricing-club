import React from 'react';
import Benefit from '../Benefit/Benefit';
import { ArrowRightIcon } from '@heroicons/react/solid';


const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white rounded-xl px-10 pt-5 pb-10'>
            <h2 className='bg-indigo-300 rounded p-2 text-2xl font-bold'>
                {name}
            </h2>
            <p className='text-5xl font-bold mt-3'>
                ${price}
                <span className='text-2xl text-gray-500'>/mo</span>
            </p>
            <div className='mt-5'>
                <h2 className='text-2xl text-left'>Benefits:</h2>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='flex items-center bg-green-500 text-white  p-2 rounded text-xl font-bold w-full justify-center mt-3 hover:text-black'>
                    Buy now
                    <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>

    );
};

export default PricingOption;