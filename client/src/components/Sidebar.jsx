import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { RiProductHuntLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbFileInvoice } from 'react-icons/tb';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';
import Header from '../components/Header'

const Sidebar = () => {
    const {isAuth,user,removeUser} = useUserStore()
    const navigate= useNavigate()

    const logout=()=>{
        removeUser()
        navigate('/signin')
    }

    const data=[
        {
            path : '/',
            title : 'Home',
            icon : <AiOutlineHome size={16}/>
        },
        {
            path : '/products/',
            title : 'Products',
            icon : <RiProductHuntLine size={16}/>
        },
        {
            path : '/invoice/new',
            title : 'Create Invoices',
            icon : <TbFileInvoice size={16}/>
        },
        {
            path : '/invoices/',
            title : 'Invoices',
            icon : <TbFileInvoice size={16}/>
        },
        {
            path : '/dashboard',
            title : 'Dashboard',
            icon : <RxDashboard size={16}/>
        }
    ]

    return (
        <div className='relative h-screen sm:w-2/12 px-2 border-r overflow-y-auto'>
            <Link 
                to='/' 
                className='flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 mx-auto my-3 bg-blue-500 text-white rounded-full'>
                <span className='text-2xl sm:text-4xl'>POS</span>
            </Link>
            {
                isAuth ? 
                <div className='w-full flex flex-col items-center justify-center space-y-2 mt-5'>
                    {
                        data.map((d,i)=><NavLink 
                            key={i} 
                            to={d?.path}
                            className='p-2 w-10 sm:w-full flex justify-center items-center sm:justify-start space-x-2 bg-white rounded-md overflow-hidden'
                            >
                                <span className='shrink-0'>{d?.icon}</span>
                                <span className='hidden sm:block'>{d?.title}</span>
                            </NavLink>
                        )
                    }

                    {user.isAdmin && 
                    <NavLink
                        to='/admin/dashboard'
                        className='p-2 w-10 sm:w-full flex justify-center items-center sm:justify-start space-x-2 bg-white rounded-md overflow-hidden'
                    >
                        <span className='shrink-0'>
                            <MdOutlineAdminPanelSettings size={16}/>
                        </span>
                        <span className='hidden sm:block'>Admin</span>
                    </NavLink>}

                    <button
                        onClick={()=>logout()}
                        className='p-2 w-10 sm:w-full flex justify-center items-center sm:justify-start space-x-2 bg-white rounded-md overflow-hidden hover:bg-red-500 hover:text-white transition-all duration-500'
                    >
                        <span className='shrink-0'>
                            <BiLogOutCircle size={16}/>
                        </span>
                        <span className='hidden sm:block'>Logout</span>
                    </button>
                </div>
                :
                <NavLink
                    to='/signin'
                    className='p-2 w-10 sm:w-full flex justify-center items-center sm:justify-start space-x-2 bg-white rounded-md overflow-hidden'
                >
                    <span className='shrink-0'>
                        <BiLogInCircle size={16}/>
                    </span>
                    <span className='hidden sm:block'>Signin</span>
                </NavLink>
            }

        </div>
    );
};

export default Sidebar;