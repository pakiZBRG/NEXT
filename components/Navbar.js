import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full pb-3 pt-3 pr-5 pl-5 block sm:flex '>
            <div className='w-1/3 flex items-center'>
                <span className='text-red-500 font-black pb-5 sm:pb-0'>windbnb</span>
            </div>
            <div className='sm:w-2/3 w-full flex sm:justify-end justify-center items-center'>
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