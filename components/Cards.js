import React from 'react'
import Card from './Card';
import { appartments } from '../data';

const Cards = () => {
    return (
        <div className='pt-5 mx-auto sm:w-10/12 full'>
            <h1 className='py-10 font-black sm:text-2xl text-xl'>Stays in Findland</h1>
            <div className='flex justify-around flex-wrap'>
                {appartments.map(flat => 
                    <Card 
                        key={flat.id}
                        flat={flat}
                    />
                )}
            </div>
        </div>
    );
}

export default Cards;