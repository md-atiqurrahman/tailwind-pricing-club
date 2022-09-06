import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1,
            name: 'Free',
            price: 0,
            benefits: [
                'Lifetime free',
                'Unlimited deals',
                'Fantastic deals',
                'Localized deals',
                'Crazy deals'
            ]
        },
        {
            id: 1,
            name: 'Regular',
            price: 9.99,
            benefits: [
                'Everything on free',
                'Unlimited deals',
                'Fantastic deals',
                'Localized deals',
                'Crazy deals'
            ]
        },
        {
            id: 1,
            name: 'Premium',
            price: 19.99,
            benefits: [
                'Everything on regular',
                'Unlimited deals',
                'Fantastic deals',
                'Localized deals',
                'Crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-300'>
            <h2 className='text-6xl  text-white mt-5 p-5 font-mono font-bold'>Best deals of the town</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia totam suscipit. Quaerat, sit iusto? Dolor magnam ab vel voluptatum dolorum architecto maxime, sunt vitae.
            </p>
            <div className='grid md:grid-cols-3 gap-5 p-10 mt-5'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >
                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;