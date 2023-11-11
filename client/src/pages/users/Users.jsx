import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Delete_data from '../../components/Delete_data';
import Heading from '../../components/Heading';
import Search from '../../components/Search';
import useUserStore from '../../store/userStore';
import baseUrl from '../../utils/baseUrl';

const Users = () => {
    const navigate = useNavigate()
    const {addUsers,users} = useUserStore()
    const [remove,setRemove] = useState(false)
    const [query,setQuery] = useState('')
    const getUsers = async() =>{
        try {
            const res = await axios.get(`${baseUrl}/api/auth`)
            if(res.status === 200){
                addUsers(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
    return (
        <div
            className='p-2'
        >
            <Heading>Users</Heading>
            <input
                type="search"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                placeholder='Search by product,generic or company name'
                className='mb-2 w-[350px] py-1 px-4 border border-gray-300 focus:outline-none placeholder:text-gray-300 placeholder:text-sm rounded-full'
            />
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Sl
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                User Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.filter(user=>user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query) || user.phone.toLowerCase().includes(query))
                            .map((user,i)=><tr 
                                    key={user._id}
                                    className='bg-white'
                                >
                                <td className="px-6 py-3 text-center">{i+1}</td>
                                <td className="px-6 py-3 text-center">{user?.name}</td>
                                <td className="px-6 py-3 text-center">{user?.email}</td>
                                <td className="px-6 py-3 text-center">{user?.phone}</td>
                                <td className="px-6 py-3 text-center">{user?.address}</td>
                                <td className="px-6 py-3 text-center">{user?.isAdmin ? 'Admin' : 'User'}</td>
                                <td className="px-6 py-3 text-center space-x-2">
                                    <button 
                                        onClick={()=>{
                                            navigate(`/admin/user/${user._id}`)
                                        }}
                                        className='p-1.5 bg-green-400 text-white rounded-md'
                                    >
                                        <MdEditSquare/>
                                    </button>
                                    {!user.isAdmin && <button 
                                        onClick={()=>{
                                            setRemove(true)
                                        }}
                                        className='p-1.5 bg-red-500 text-white rounded-md'
                                    >
                                        <MdDelete/>
                                    </button>}
                                    {remove && <Delete_data {...{
                                        id : user._id,
                                        path : 'auth',
                                        remove,
                                        setRemove
                                    }}/>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;