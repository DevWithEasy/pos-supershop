import React from 'react';
import { AiOutlineEdit, AiOutlineHome } from 'react-icons/ai';
import { BiCategoryAlt, BiPurchaseTag } from 'react-icons/bi';
import { FaRegAddressBook } from "react-icons/fa";
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { MdAutoAwesomeMosaic } from 'react-icons/md';
import { PiBarcode, PiUsersBold, PiUsersDuotone } from 'react-icons/pi';
import { RiAddBoxLine, RiProductHuntLine } from 'react-icons/ri';
import { RxDashboard, } from 'react-icons/rx';
import { TbReportSearch } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';
import useUserStore from '../store/userStore';

const SidebarAdmin = () => {
    const { user } = useUserStore();

    const userData = [
        {
            title: 'Main',
            links: [
                {
                    path: '/admin/user',
                    title: 'Welcome',
                    icon: <MdAutoAwesomeMosaic size={16} />
                },
                {
                    path: '/',
                    title: 'Home',
                    icon: <AiOutlineHome size={16} />
                },
                {
                    path: '/admin/user/dashboard',
                    title: 'Dashboard',
                    icon: <RxDashboard size={16} />
                }
            ]
        },
        {
            title: 'Product',
            links: [
                {
                    path: '/admin/product/new',
                    title: 'Create Product',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/products',
                    title: 'Products',
                    icon: <RiProductHuntLine size={16} />
                },
                {
                    path: '/admin/categories',
                    title: 'Categories',
                    icon: <BiCategoryAlt size={16} />
                },
                {
                    path: '/admin/printbarcode',
                    title: 'Print Barcode',
                    icon: <PiBarcode size={16} />
                },
            ]
        },
        {
            title: 'Purchases & sales',
            links: [
                {
                    path: '/admin/purchase/new',
                    title: 'Create Purchase',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/purchases',
                    title: 'Purchases',
                    icon: <BiPurchaseTag size={16} />
                },
                {
                    path: '/admin/invoices',
                    title: 'Invoices',
                    icon: <LiaFileInvoiceSolid size={16} />
                },
            ]
        },
        {
            title: 'Report',
            links: [
                {
                    path: '/admin/report/new',
                    title: 'Create Report',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/reports',
                    title: 'Reports',
                    icon: <TbReportSearch size={16} />
                }
            ]
        },
        {
            title: 'Customers',
            links: [
                {
                    path: '/admin/customer/new',
                    title: 'Add New Customer',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/customers',
                    title: 'Customers',
                    icon: <PiUsersDuotone size={16} />
                }
            ]
        },
        {
            title: 'Users & Employees',
            links: [

                {
                    path: '/admin/users',
                    title: 'Users',
                    icon: <PiUsersBold size={16} />
                },
                {
                    path: '/admin/employee/new',
                    title: 'Add New Employee',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/employees',
                    title: 'Employees',
                    icon: <PiUsersDuotone size={16} />
                },
            ]
        },
        {
            title: 'Attendance & Salary',
            links: [
                {
                    path: '/admin/take_attendance',
                    title: 'Take Attendance',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/attendance/update',
                    title: 'Update Attendance',
                    icon: <AiOutlineEdit size={16} />
                },
                {
                    path: '/admin/monthly_attendance',
                    title: 'Monthly Attendance',
                    icon: <PiUsersBold size={16} />
                },
                {
                    path: '/admin/monthly_attendance_book',
                    title: 'Attendance Book',
                    icon: <FaRegAddressBook size={16} />
                },
                {
                    path: '/admin/salary',
                    title: 'Salary',
                    icon: <RiAddBoxLine size={16} />
                }
            ]
        }
    ]

    const adminData = [
        {
            title: 'Main',
            links: [
                {
                    path: '/admin/administration',
                    title: 'Welcome',
                    icon: <MdAutoAwesomeMosaic size={16} />
                },
                {
                    path: '/',
                    title: 'Home',
                    icon: <AiOutlineHome size={16} />
                },
                {
                    path: '/admin/dashboard',
                    title: 'Dashboard',
                    icon: <RxDashboard size={16} />
                }
            ]
        },
        {
            title: 'Product',
            links: [
                {
                    path: '/admin/product/new',
                    title: 'Create Product',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/products',
                    title: 'Products',
                    icon: <RiProductHuntLine size={16} />
                },
                {
                    path: '/admin/category/new',
                    title: 'Create Category',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/categories',
                    title: 'Categories',
                    icon: <BiCategoryAlt size={16} />
                },
                {
                    path: '/admin/printbarcode',
                    title: 'Print Barcode',
                    icon: <PiBarcode size={16} />
                },
            ]
        },
        {
            title: 'Purchases & sales',
            links: [
                {
                    path: '/admin/purchase/new',
                    title: 'Create Purchase',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/purchases',
                    title: 'Purchases',
                    icon: <BiPurchaseTag size={16} />
                },
                {
                    path: '/admin/invoices',
                    title: 'Invoices',
                    icon: <LiaFileInvoiceSolid size={16} />
                },
            ]
        },
        {
            title: 'Report',
            links: [
                {
                    path: '/admin/report/new',
                    title: 'Create Report',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/reports',
                    title: 'Reports',
                    icon: <TbReportSearch size={16} />
                }
            ]
        },
        {
            title: 'Customers',
            links: [
                {
                    path: '/admin/customer/new',
                    title: 'Add New Customer',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/customers',
                    title: 'Customers',
                    icon: <PiUsersDuotone size={16} />
                }
            ]
        },
        {
            title: 'Users & Employee',
            links: [
                {
                    path: '/admin/user/new',
                    title: 'Add New User',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/users',
                    title: 'Users',
                    icon: <PiUsersBold size={16} />
                },
                {
                    path: '/admin/employee/new',
                    title: 'Add New Employee',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/employees',
                    title: 'Employees',
                    icon: <PiUsersDuotone size={16} />
                },
            ]
        },
        {
            title: 'Attendance & Salary',
            links: [
                {
                    path: '/admin/take_attendance',
                    title: 'Take Attendance',
                    icon: <RiAddBoxLine size={16} />
                },
                {
                    path: '/admin/attendance/update',
                    title: 'Update Attendance',
                    icon: <AiOutlineEdit size={16} />
                },
                {
                    path: '/admin/monthly_attendance',
                    title: 'Monthly Attendance',
                    icon: <PiUsersBold size={16} />
                },
                {
                    path: '/admin/monthly_attendance_book',
                    title: 'Attendance Book',
                    icon: <FaRegAddressBook size={16} />
                },
                {
                    path: '/admin/salary',
                    title: 'Salary',
                    icon: <RiAddBoxLine size={16} />
                }
            ]
        }
    ]
    const data = user.isAdmin ? adminData : userData

    return (
        <div className='relative h-screen sm:w-2/12 px-2 pb-5 border-r overflow-y-auto'>
            <Link
                to='/'
                className='flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 mx-auto my-3 bg-blue-500 text-white rounded-full'>
                <span className='text-2xl sm:text-4xl'>POS</span>
            </Link>
            {
                data.map((d, i) => <div
                    key={i}
                >
                    <p className='py-2 border-b font-semibold'>{d.title}</p>
                    <div
                        className='pl-2 py-2'
                    >
                        {
                            d.links.map((link, i) =>
                                <NavLink
                                    key={i}
                                    to={link.path}
                                    className={`w-full p-2 flex items-center space-x-2 hover:bg-sky-50 hover:text-sky-500 hover:rounded-md transition-all duration-300`}
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