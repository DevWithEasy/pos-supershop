import React, { useEffect, useState } from 'react';
import toast_alert from '../../utils/toast_alert';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import baseUrl from '../../utils/baseUrl';
import Heading from '../Heading';

const Manual_attendance = () => {
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const [employees,setEmployees] = useState([])
    const [statuses,setStatuses] = useState([])

    const getAllEmployee = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${baseUrl}/api/employee/attendance`, {
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
        getAllEmployee()
    }, [])

    console.log(employees[0])
    return (
        <div
            className='p-2'
        >
            <Heading>Taking Daily Attendance</Heading>
            <div>
                <table
                    className='w-full'
                >
                    <thead>
                        <tr>
                            <th>ID No</th>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees &&
                            employees.map(employee=>{
                                <tr
                                    key={employee._id}
                                    className=''
                                >
                                    <td>{employee?.IDNo}</td>
                                    <td>{employee?.name}</td>
                                    <td>{employee?.name}</td>
                                    <td>{employee?.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manual_attendance;