import React from 'react'

const Card = ({flat: {title, desc, imageUrl, rating}}) => {
    return (
        <div className='p-3 mb-6'>
            <img className='rounded-3xl w-96 sm:h-96 h-64 object-cover cursor-pointer' src={imageUrl} alt={title}/>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-extrabold text-xl py-2'>{title}</h1>
                    <p className='text-gray-400'>{desc}</p>
                </div>
                <span className='font-bold'><i className="text-red-500 fa fa-star"></i> {rating}</span>
            </div>
        </div>
    );
}

export default Card;