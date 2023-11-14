import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import useUserStore from '../../store/userStore';
import { useToast } from '@chakra-ui/react';
import baseUrl from '../../utils/baseUrl';
import toast_alert from '../../utils/toast_alert';
import axios from 'axios';

const Monthly_attendance = () => {
    const { addEmployees, employees } = useUserStore()
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    
    const getAllEmployee = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${baseUrl}/api/employee/`, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                setLoading(false)
                addEmployees(res.data.data)
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


    return (
        <div
            className='p-2'
        >
            <Heading>Monthly Attendance</Heading>

            {employees &&
                <select
                    className=''
                    onChange={(e) => setQuery(e.target.value)}
                >
                    {
                        employees.map(employee =>
                            <option key={employee?._id} value={employee?._id}>{employee?.name}</option>
                        )
                    }
                </select>
            }
        </div>
    );
};

export default Monthly_attendance;