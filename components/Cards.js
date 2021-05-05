import React from 'react'
import Card from './Card';
import { appartments } from '../data';

const Cards = () => {
    return (
        <div className='flex justify-around'>
            {appartments.map(flat => 
                <Card 
                    key={flat.id} 
                    title={flat.title} 
                    desc={flat.desc} 
                    imageUrl={flat.imageUrl}
                />
            )}
        </div>
    );
}

export default Cards;