import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
    return (
        <p className='flex items-center'>
            <span><CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
            </span>
            {props.benefit}
        </p>
    );
};

export default Benefit;