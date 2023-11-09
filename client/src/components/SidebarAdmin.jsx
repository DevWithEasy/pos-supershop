import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategoryAlt, BiPurchaseTag } from 'react-icons/bi';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { PiBarcode, PiKeyReturnLight, PiUsersBold, PiUsersDuotone } from 'react-icons/pi';
import { RiAddBoxLine, RiProductHuntLine } from 'react-icons/ri';
import { RxDashboard, } from 'react-icons/rx';
import { TbReportSearch } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';

const SidebarAdmin = () => {

    const data = [
        {
            title: 'Main',
            links: [
                {
                    path: '/',
                    title: 'Home',
                    icon: <AiOutlineHome size={16} />
                },
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
        <div className='relative h-screen sm:w-2/12 px-2 border-r overflow-y-auto'>
            <Link 
                to='/' 
                className='flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 mx-auto my-3 bg-blue-500 text-white rounded-full'>
                <span className='text-2xl sm:text-4xl'>POS</span>
            </Link>
            {
                data.map((d,i)=><div key={i}>
                    <p className='py-2 border-b'>{d.title}</p>
                    <div
                        className='pl-2 py-2'
                    >
                        {
                            d.links.map((link,i)=>
                                <NavLink 
                                    key={i}
                                    to={link.path}
                                    className={`w-full p-2 flex items-center space-x-2`}
                                >
                                    {link.icon}
                                    <span>{link.title}</span>
                                </NavLink>
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