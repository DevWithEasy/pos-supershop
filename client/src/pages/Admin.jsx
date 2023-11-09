import React from 'react';
import { GiMedicines } from 'react-icons/gi';
import { RxAvatar, RxHeart, RxHome } from 'react-icons/rx';
import Heading from './../components/Heading'

const Admin = () => {

    return (
        <div className='p-2'>
            <Heading>Admin Dashboard</Heading>
            <div
                className='grid grid-cols-4 gap-4'
            >
                <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                    <div
                        className='p-2 w-12 h-12 flex justify-center items-center bg-pink-50 shrink-0 rounded-full'
                    >
                        <RxAvatar size={25} className='shrink-0 text-pink-500' />
                    </div>

                    <div>
                        <p>Total Users : </p>
                        <p className='text-2xl font-bold text-center'>
                            20
                        </p>
                    </div>
                </div>
                <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                    <div
                        className='p-2 w-12 h-12 flex justify-center items-center bg-blue-50 shrink-0 rounded-full'
                    >
                        <RxHome size={25} className='shrink-0 text-blue-500' />
                    </div>
                    <div>
                        <p>Total Company : </p>
                        <p className='text-2xl font-bold text-center'>

                        </p>
                    </div>
                </div>
                <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                <div
                        className='p-2 w-12 h-12 flex justify-center items-center bg-red-50 shrink-0 rounded-full'
                    >
                        <RxHeart size={25} className='shrink-0 text-red-500' />
                    </div>
                    <div>
                        <p>Total Generics : </p>
                        <p className='text-2xl font-bold text-center'>

                        </p>
                    </div>
                </div>
                <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                <div
                        className='p-2 w-12 h-12 flex justify-center items-center bg-green-50 shrink-0 rounded-full'
                    >
                        <GiMedicines size={25} className='shrink-0 text-green-500' />
                    </div>
                    <div>
                        <p>Total Products : </p>
                        <p className='text-2xl font-bold text-center'>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;