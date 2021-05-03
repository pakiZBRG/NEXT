import React from 'react'

const Card = ({title, desc, imageUrl}) => {
    return (
        <div className=''>
            <img className='rounded-3xl w-96 h-96 object-cover' src={imageUrl} alt={title}/>
            <h1 className='font-extrabold text-2xl py-2'>{title}</h1>
            <p className='text-gray-400'>{desc}</p>
        </div>
    );
}

export default Card;