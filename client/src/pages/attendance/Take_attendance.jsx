import React, { useRef, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import { useToast } from '@chakra-ui/react';
import Scanner_Attendance from '../../components/attendance/Scanner_attendance';
import Heading from '../../components/Heading';
import axios from 'axios'

const Take_attendance = () => {
    const toast = useToast()
    const [scaneSearch, setScaneSearch] = useState('')
    const audioRef = useRef(null)

    const handleScanSearch = async (result) => {
        if (!scaneSearch.length === 24) {
            return toast({
                id: result,
                title: 'QR not accurate againt our policy',
                status: 'error',
                isClosable: true,
            })
        } else {
            if(audioRef.current){
                audioRef?.current?.play();
            }
        }
        console.log(result)

        try {
            const res = await axios.post(`${baseUrl}/api/attendance/create/${result}`,{},{
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div
            className='p-2'
        >
            <Heading>Taking Daily Attendance</Heading>
            <div>
                <h2
                    className='text-3xl font-bold text-center p-2 text-sky-500'
                >
                    Auto Attendence By Employee ID Card
                </h2>
            <div
                className='flex space-x-4'
            >
                <div
                    className='w-4/12'
                >
                    <Scanner_Attendance {...{ handleScanSearch,setScaneSearch,audioRef }}/>
                </div>
                <div>
                    We are waiting
                </div>
            </div>
            </div>
        </div>
    );
};

export default Take_attendance;