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

    // const getAllEmployee = async () => {
    //     try {
    //         setLoading(true)
    //         const res = await axios.get(`${baseUrl}/api/employee/attendance`, {
    //             headers: {
    //                 authorization: localStorage.getItem('token')
    //             }
    //         })
    //         if (res.data.success) {
    //             setLoading(false)
    //             setEmployees(res.data.data)
    //         }

    //     } catch (error) {
    //         setLoading(false)
    //         toast_alert(
    //             toast,
    //             error?.response?.data?.message,
    //             'error'
    //         )
    //     }
    // }

    // useEffect(() => {
    //     getAllEmployee()
    // }, [])


    return (
        <div
            className='p-2'
        >
            <Heading>Update Daily Attendance</Heading>
            <div>
                <input
                    type='date'
                    onChange={(e)=>setDate(e.target.value)}
                    className='w-full p-2 rounded-md border border-gray-300 focus:outline-sky-500'
                />
                <table
                    className='w-1/2'
                >
                    <thead>
                        <tr>
                            <td>ID No</td>
                            <td>Name</td>
                            <td>Action</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {employees &&
                            employees.map(employee=>
                                <tr
                                    key={employee._id}
                                    className=''
                                >
                                    <td>{getID(employee?.IDNo)}</td>
                                    <td>{employee?.name}</td>
                                    <td></td>
                                    <td></td>
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