import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const Layout = ({children}) => {
    return (
        <div className='h-screen w-full flex justify-between'>
            <Sidebar/>
                <div className='h-screen w-10/12'>
                    <div className='bg-slate-50 h-full overflow-y-auto'>
                        <Header/>
                        {children}
                        <Cart/>
                    </div>
                </div>
        </div>
    );
};

export default Layout;