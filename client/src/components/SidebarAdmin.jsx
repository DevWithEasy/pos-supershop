import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategoryAlt, BiLogOutCircle } from 'react-icons/bi';
import { PiBarcode } from 'react-icons/pi';
import { RiProductHuntLine } from 'react-icons/ri';
import { RxDashboard, } from 'react-icons/rx';
import { RiAddBoxLine } from 'react-icons/ri';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';

const SidebarAdmin = () => {
    const { isAuth, user, removeUser } = useUserStore()
    const navigate = useNavigate()
    const [path,setPath] = useState('/admin')

    const data = [
        {
            title: 'Main',
            links: [
                {
                    path: '/admin',
                    title: 'Dashboard',
                    icon: <RxDashboard size={16} />
                }
            ]
        },
        {
            title: 'Product',
            links: [
                {
                    path: '/product/new',
                    title: 'Create Product',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/products',
                    title: 'Products',
                    icon: <RiProductHuntLine size={16} />
                },
                {
                    path: '/categories/new',
                    title: 'Create Category',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/categories',
                    title: 'Categories',
                    icon: <BiCategoryAlt size={16} />
                },
                {
                    path: '/printbarcode',
                    title: 'Print Barcode',
                    icon: <PiBarcode size={16} />
                },
            ]
        },

    ]

    return (
        <div className='h-screen sm:w-2/12 px-2 pt-12 border-r'>
            {
                data.map((d,i)=><div>
                    <p className='py-2 border-b'>{d.title}</p>
                    <div
                        className='pl-2 py-2'
                    >
                        {
                            d.links.map((link,i)=>
                                <Link 
                                    to={link.path}
                                    onClick={()=>setPath(link.path)}
                                    className={`w-full p-2 flex items-center space-x-2  hover:text-blue-500 ${link.path == path ? 'bg-blue-50 text-blue-500 rounded-md' : 'text-gray-600'}`}
                                >
                                    {link.icon}
                                    <span>{link.title}</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default SidebarAdmin;