import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEditSquare, MdInfo } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Delete_data from '../../components/Delete_data';
import Heading from '../../components/Heading';
import Loading_request from '../../components/Loding_request';
import useUserStore from '../../store/userStore';
import baseUrl from '../../utils/baseUrl';
import toast_alert from '../../utils/toast_alert';

const Employees = () => {
    const { addEmployees, employees } = useUserStore()
    const toast = useToast()
    const navigate = useNavigate()
    const [remove, setRemove] = useState(false)
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const getAllEmployee = async () => {
            setLoading(true)
        try {
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
            <Heading>All Employees</Heading>
            <input
                type="search"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                placeholder='Search by invoice id'
                className='mb-2 w-[350px] py-1 px-4 border border-gray-300 focus:outline-none placeholder:text-gray-300 placeholder:text-sm rounded-full'
            />
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Designation
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Salary
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees &&
                            employees.filter(employee => employee._id.toLowerCase().includes(query) || employee.name.toLowerCase().includes(query) || employee.phone.toLowerCase().includes(query))
                                .map((employee) => <tr
                                    key={employee._id}
                                    className='bg-white cursor-pointer border-b'
                                >
                                    <td className="px-6 py-3 text-center">
                                        <img
                                            src={`${baseUrl}/image/${employee?.image}`}
                                            className='w-10'
                                        />
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {employee?.name}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {employee?.phone}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {employee?.salary}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {employee?.designation}
                                    </td>
                                    <td className="px-6 py-3 text-center space-x-2">
                                        <button
                                            onClick={() => {
                                                navigate(`/admin/employee/${employee._id}`)
                                            }}
                                            className='p-1.5 bg-sky-400 text-white rounded-md'
                                        >
                                            <MdInfo />
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate(`/admin/employee/update/${employee._id}`)
                                            }}
                                            className='p-1.5 bg-green-400 text-white rounded-md'
                                        >
                                            <MdEditSquare />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setRemove(true)
                                            }}
                                            className='p-1.5 bg-red-500 text-white rounded-md'
                                        >
                                            <MdDelete />
                                        </button>
                                        {remove && <Delete_data {...{
                                            id: employee._id,
                                            path: 'employee',
                                            remove,
                                            setRemove
                                        }} />}
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            {loading &&
                <Loading_request/>
            }
        </div>
    );
};

export default Employees;