import React from 'react'
import Card from './Card';
import { appartments } from '../data';

const Cards = () => {
    return (
        <div className='pt-5 mx-auto w-10/12'>
            <h1 className='py-10 font-black text-2xl'>Stays in Findland</h1>
            <div className='flex justify-around flex-wrap'>
                {appartments.map(flat => 
                    <Card 
                        key={flat.id} 
                        title={flat.title} 
                        desc={flat.desc} 
                        imageUrl={flat.imageUrl}
                    />
                )}
            </div>
        </div>
    );
}

export default Cards;