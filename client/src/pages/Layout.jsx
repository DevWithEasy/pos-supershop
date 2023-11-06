import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
    return (
        <div className='relative h-screen w-full flex justify-between bg-sky-500'>
            <Sidebar/>
                <div className=' h-screen w-10/12 p-4 pt-14'>
                    <div className='bg-gray-50 h-full rounded-lg overflow-y-auto'>
                        <Header/>
                        {children}
                    </div>
                </div>
        </div>
    );
};

export default Layout;