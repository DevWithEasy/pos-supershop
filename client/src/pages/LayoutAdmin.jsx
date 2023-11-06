import React from 'react';
import SidebarAdmin from '../components/SidebarAdmin';

const LayoutAdmin = ({ children }) => {
    return (
        <div className='relative h-screen w-full flex justify-between'>
            <h1 className='absolute w-full py-2 top-0 left-0 bg-white text-3xl text-center text-blue-500 font-bold uppercase border-b'>
                Admin Dashboard
            </h1>
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