import React from 'react';
import SidebarAdmin from '../components/SidebarAdmin';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LayoutAdmin = ({ children }) => {
    return (
        <div className='h-screen w-full flex justify-between'>
            <SidebarAdmin/>
            <div className='h-screen w-10/12'>
                <div className='bg-slate-50 h-full overflow-y-auto'>
                    <Header/>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;