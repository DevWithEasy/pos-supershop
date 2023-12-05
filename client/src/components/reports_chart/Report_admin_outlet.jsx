import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import ReportChart from './ReportChart';

const Report_admin_outlet = ({outlets}) => {
    const [outletID,setOutletID] = useState(outlets ? outlets[0]._id : undefined)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const getDashboardData = async (id) => {
        setLoading(true)
        try {
            const res = await axios.get(`${baseUrl}/api/auth/dashboard/outlet/${id}`, {
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

    const { employees, categories, current_month, product, total } = data

    useEffect(() => {
        outletID && getDashboardData(outletID)
    }, [outletID])

    console.log(data.reports)
    return (
        <div
        className='mt-5 w-full flex justify-between space-x-3'
    >
        <div
            className='w-8/12 p-2 bg-white rounded'
        >
            <div>
                <p>Total Emplyees : {employees}</p>
            </div>
            {data.reports &&
                            <ReportChart
                                {...{
                                    reports: data.reports
                                }}
                            />
                        }
        </div>
        <div
            className='w-4/12 p-2 bg-white space-y-2 rounded'
        >
            <h2
                className='p-2 font-semibold'
            >
                Outlets List : 
            </h2>
            {outlets &&
                outlets.map((outlet,i)=>
                    <div
                        key={outlet?._id}
                        onClick={()=>setOutletID(outlet._id)}
                        className={`p-2 flex items-center space-x-2 border rounded cursor-pointer ${outlet._id == outletID ? 'bg-sky-500 text-white' : ''}`}
                    >
                        <div
                            className='w-8 h-8 flex justify-center items-center rounded-full border'
                        >
                            <span>{String(i+1).padStart(2,'0')}</span>
                        </div>
                        <div>
                            <p>
                                {outlet?.name}
                            </p>
                            <p
                                className={`text-sm ${outlet._id == outletID ? 'text-white' : 'text-gray-500'}`}
                            >
                                {outlet?.address}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default Report_admin_outlet;