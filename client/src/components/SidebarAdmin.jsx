import React, { useState } from 'react';
import { BiCategoryAlt,BiPurchaseTag } from 'react-icons/bi';
import { PiBarcode } from 'react-icons/pi';
import { RiProductHuntLine } from 'react-icons/ri';
import { RxDashboard, } from 'react-icons/rx';
import { RiAddBoxLine } from 'react-icons/ri';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import {TbReportSearch} from 'react-icons/tb'
import {PiKeyReturnLight,PiUsersDuotone,PiUsersBold} from 'react-icons/pi'

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
                    path: '/category/new',
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
        {
            title: 'Sales',
            links: [
                {
                    path: '/invoices',
                    title: 'Invoices',
                    icon: <LiaFileInvoiceSolid size={16} />
                },
                {
                    path: '/invoices-return',
                    title: 'Sales Return',
                    icon: <PiKeyReturnLight size={16} />
                },
            ]
        },
        {
            title: 'Purchases',
            links: [
                {
                    path: '/purchase/new',
                    title: 'Create Purchase',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/purchases',
                    title: 'Purchases',
                    icon: <BiPurchaseTag size={16} />
                },
                {
                    path: '/purchases-return',
                    title: 'Purchases Return',
                    icon: <PiKeyReturnLight size={16} />
                },
            ]
        },
        {
            title: 'Customers & Users',
            links: [
                {
                    path: '/customer/new',
                    title: 'Add New Customer',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/customers',
                    title: 'Customers',
                    icon: <PiUsersDuotone size={16} />
                },
                {
                    path: '/user/new',
                    title: 'Add New User',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/users',
                    title: 'Users',
                    icon: <PiUsersBold size={16} />
                },
            ]
        },
        {
            title: 'Report',
            links: [
                {
                    path: '/report/new',
                    title: 'Create Report',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/reports',
                    title: 'Reports',
                    icon: <TbReportSearch size={16} />
                }
            ]
        },
    ]

    return (
        <div className='h-screen sm:w-2/12 px-2 pt-12 border-r overflow-y-auto'>
            {
                data.map((d,i)=><div key={i}>
                    <p className='py-2 border-b'>{d.title}</p>
                    <div
                        className='pl-2 py-2'
                    >
                        {
                            d.links.map((link,i)=>
                                <Link 
                                    key={i}
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