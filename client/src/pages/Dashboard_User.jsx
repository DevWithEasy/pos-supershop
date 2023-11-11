import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineBarChart, AiOutlineLineChart, AiOutlineUserSwitch } from 'react-icons/ai';
import { GiMedicines } from 'react-icons/gi';
import { MdOutlineSell } from 'react-icons/md';
import { RxAvatar, RxHeart, RxHome } from 'react-icons/rx';
import { TbMoneybag } from 'react-icons/tb';
import Dashboard_skeleton from '../components/Dashboard_skeleton';
import Heading from '../components/Heading';
import ReportChart from '../components/ReportChart';
import baseUrl from '../utils/baseUrl';
import get_fixed_num from '../utils/get_fixed_num';

const UserDashboard = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const getDashboardData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/api/auth/dashboard`, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            if (res.data.status === 200) {
                setLoading(false)
                setData(res.data.data)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const { users, companies, generics, customers, current_month, product, total } = data

    const benifits = (product?.stock_value + total?.sale) - total?.purchase

    const benifits_percent = (benifits / total?.purchase
    ) * 100
    useEffect(() => {
        getDashboardData()
    }, [])


    return (
        <>
            {loading ?
                <Dashboard_skeleton />
                :
                <div className='p-4'>
                    <Heading>Dashborad</Heading>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-3'>
                        <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                            <div
                                className='p-2 w-12 h-12 flex justify-center items-center bg-pink-50 shrink-0 rounded-full'
                            >
                                <RxAvatar size={25} className='shrink-0 text-pink-500' />
                            </div>

                            <div>
                                <p>Total Users : </p>
                                <p className='text-2xl font-bold text-center'>{users}</p>
                            </div>
                        </div>
                        <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                            <div
                                className='p-2 w-12 h-12 flex justify-center items-center bg-green-50 shrink-0 rounded-full'
                            >
                                <RxAvatar size={25} className='shrink-0 text-green-500' />
                            </div>
                            <div>
                                <p>Total Users : </p>
                                <p className='text-2xl font-bold text-center'>{users}</p>
                            </div>
                        </div>
                        <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                            <div
                                className='p-2 w-12 h-12 flex justify-center items-center bg-blue-50 shrink-0 rounded-full'
                            >
                                <RxAvatar size={25} className='shrink-0 text-blue-500' />
                            </div>
                            <div>
                                <p>Total Users : </p>
                                <p className='text-2xl font-bold text-center'>{users}</p>
                            </div>
                        </div>
                        <div className='bg-white flex items-center rounded-md p-4 space-x-4 border'>
                            <div
                                className='p-2 w-12 h-12 flex justify-center items-center bg-yellow-50 shrink-0 rounded-full'
                            >
                                <RxAvatar size={25} className='shrink-0 text-yellow-500' />
                            </div>
                            <div>
                                <p>Total Users : </p>
                                <p className='text-2xl font-bold text-center'>{users}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='w-full grid grid-cols-2 gap-3 mt-5'
                    >
                        {data.reports &&
                            <ReportChart
                                {...{
                                    reports: data.reports
                                }}
                            />
                        }
                        <div
                            className='w-full flex flex-col  items-center space-y-3 bg-white border rounded p-2'
                        >
                            <p
                                className='text-center text-xl font-bold border-b-2'
                            >
                                Profit (%)
                            </p>
                            <div
                                className='h-40 w-40 flex justify-center items-center border-[10px] border-sky-500 rounded-full'
                            >
                                <span
                                    className='font-bold text-2xl text-sky-500'
                                >
                                    {
                                        benifits_percent ? get_fixed_num(benifits_percent) : 0
                                    }%
                                </span>
                            </div>
                            <p
                                className=''
                            >
                                This profit % generate by total purchase value,current stock value and total sale value.
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default UserDashboard;