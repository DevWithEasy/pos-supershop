import React from 'react';
import SidebarAdmin from '../components/SidebarAdmin';
import { Link } from 'react-router-dom';

const LayoutAdmin = ({ children }) => {
    return (
        <div className='relative h-screen w-full flex justify-between'>
            <div className='absolute w-full top-0 left-0 flex justify-between bg-white text-3xl text-blue-500 border-b'>
                <div className='w-2/12 py-2 text-center border-r'>
                    <Link 
                        to='/'
                        className=''
                    >
                        POS
                    </Link>
                </div>
                <h1 className='w-10/12 py-2 text-center font-bold uppercase'>
                    Admin DashBoad
                </h1>
            </div>
            <SidebarAdmin/>
            <div className=' h-screen w-10/12 pt-12'>
                <div className='bg-slate-50 h-full overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;