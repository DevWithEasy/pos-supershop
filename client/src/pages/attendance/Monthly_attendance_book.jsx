import React, { useState } from 'react';
import month from '../../utils/Month';
import Heading from '../../components/Heading';
import toast_alert from '../../utils/toast_alert';
import handleChange from '../../utils/handleChange';
import MonthlyAttendanceBook from '../../utils/MonthlyAttendanceBook';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const Monthly_attendance_book = () => {
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value, setValue] = useState({
        start: month('', 'first'),
        end: month('', 'last')
    })
    const getMonthlyAttendanceBook = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const res = await axios.post(`${baseUrl}/api/attendance/monthlybook`, value, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                console.log(res.data)
                setLoading(false)
                setData(res.data.data)
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

    const monthlyAttendanceBook = new MonthlyAttendanceBook(value.start, data)
    console.log(data)
    return (
        <div
            className='p-2 text-center border'
        >
            <Heading>Monthly Attendance Book</Heading>
            <div
                className='w-full'
            >
                <form
                    onSubmit={(e) => getMonthlyAttendanceBook(e)}
                    className='w-full p-2 flex space-x-2'
                >
                    <input
                        type='date'
                        name='start'
                        value={value?.start}
                        onChange={(e) => handleChange(e, value, setValue)}
                        className='w-3/12 p-2 border rounded-md border-gray-300 focus:outline-none focus:border-sky-500'
                    />
                    <input
                        type='date'
                        name='end'
                        value={value?.end}
                        onChange={(e) => handleChange(e, value, setValue)}
                        className='w-3/12 p-2 border rounded-md border-gray-300 focus:outline-none focus:border-sky-500'
                    />
                    <button
                        type='submit'
                        className='w-32 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600'
                    >
                        {loading ? 'Finding...' : 'Find'}
                    </button>
                </form>
            </div>
            <div
                    className='bg-white overflow-x-auto'
                >
                    <table
                        className='w-full'
                    >
                        <thead>
                            <tr
                                className='border-b bg-gray-100'
                            >
                                <td className='p-2 text-center border'>ID</td>
                                <td className='p-2 text-center border'>Name</td>
                                <td className='p-2 text-center border'>Salary</td>
                                <td className='p-2 text-center border'>Payable</td>
                                <td className='p-2 text-center border'>P</td>
                                <td className='p-2 text-center border'>L</td>
                                <td className='p-2 text-center border'>H</td>
                                <td className='p-2 text-center border'>A</td>
                                {
                                    monthlyAttendanceBook.
                                    daysWithDay()
                                    .map(day=>
                                        <td
                                            key={day.day}
                                            className='p-2 text-center border text-sm'
                                        >
                                            <span>{day?.day}</span>
                                            <br/>
                                            <span>{day?.name}</span>
                                        </td>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {/* {employees &&
                                employees.map(employee =>
                                    <tr
                                        key={employee._id}
                                        className='border-b'
                                    >
                                        <td className='p-2 text-center border'>{getID(employee?.IDNo)}</td>
                                        <td className='p-2 text-center border'>{employee?.name}</td>
                                    </tr>
                                )
                            } */}
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default Monthly_attendance_book;