import React from 'react'
import Card from './Card';

const Cards = () => {
    return (
        <div className='flex justify-around'>
            <Card title='Appartment#1' desc="Not so good appartment" imageUrl="http://cdn.home-designing.com/wp-content/uploads/2019/01/Small-apartment-design.jpg"/>
        </div>
    );
}

export default Cards;