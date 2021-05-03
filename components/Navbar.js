import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full pb-3 pt-3 pr-5 pl-5 flex'>
            <div className='w-1/3 flex items-center'>
                <span className='text-red-500 font-black'>windbnb</span>
            </div>
            <div className='w-2/3 flex justify-end items-center'>
                <div className='border rounded-3xl shadow flex flex-row'>
                    <p className='p-4 border-r'>Helsinki, Findland</p>
                    <p className='p-4 text-gray-400'>Add Guests</p>
                    <i className="p-4 border-l fa fa-md fa-search text-red-500"></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar;