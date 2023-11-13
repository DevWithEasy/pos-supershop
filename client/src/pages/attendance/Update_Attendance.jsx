import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import baseUrl from '../../utils/baseUrl';
import Heading from '../../components/Heading';
import getID from '../../utils/getID';


const Update_Attendance = () => {
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const [employees,setEmployees] = useState([])
    const [date,setDate] = useState('')

    const getAllEmployee = async (date) => {
        try {
            setLoading(true)
            const res = await axios.get(`${baseUrl}/api/attendance/update?date=${date}`, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                setLoading(false)
                setEmployees(res.data.data)
            }

        } catch (error) {
            setLoading(false)
            toast_alert(
                toast,
                error?.response?.data?.message,
                'error'
            )
        }
    }

    useEffect(() => {
        getAllEmployee(date)
    }, [date])


    return (
        <div
            className='p-2'
        >
            <Heading>Update Daily Attendance</Heading>
            <div>
                <input
                    type='date'
                    onChange={(e)=>setDate(e.target.value)}
                    className='w-1/4 p-2 rounded-md border border-gray-300 focus:outline-sky-500'
                />
                <table
                    className='w-1/2'
                >
                    <thead
                        className='bg-slate-200'
                    >
                        <tr>
                            <td className='px-4 py-2'>ID No</td>
                            <td className='px-4 py-2'>Name</td>
                            <td className='px-4 py-2'>Action</td>
                            <td className='px-4 py-2'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {employees &&
                            employees.map(employee=>
                                <tr
                                    key={employee._id}
                                    className='bg-white border-b'
                                >
                                    <td
                                        className='px-4 py-2'
                                    >
                                        {getID(employee?.IDNo)}
                                    </td>
                                    <td
                                        className='px-4 py-2'
                                    >
                                        {employee?.name}
                                    </td>
                                    <td
                                        className='px-4 py-2 space-x-2'
                                    >
                                        <button
                                            onClick={()=>{}}
                                            className='h-7 w-7 bg-sky-50 text-sky-500 rounded-full'
                                        >
                                            P
                                        </button>
                                        <button
                                            onClick={()=>{}}
                                            className='h-7 w-7 bg-red-50 text-red-500 rounded-full'
                                        >
                                            A
                                        </button>
                                        <button
                                            onClick={()=>{}}
                                            className='h-7 w-7 bg-yellow-50 text-yellow-500 rounded-full'
                                        >
                                            L
                                        </button>
                                        <button
                                            onClick={()=>{}}
                                            className='h-7 w-7 bg-green-50 text-green-500 rounded-full'
                                        >
                                            H
                                        </button>
                                    </td>
                                    <td
                                        className='px-4 py-2'
                                    >

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Update_Attendance;