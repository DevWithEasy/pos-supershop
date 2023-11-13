import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Auto_attendance from '../../components/attendance/Auto_attendance';
import Manual_attendance from '../../components/attendance/Manual_attendance';
import { Link } from 'react-router-dom';

const Take_attendance = () => {
    const [manual,setManual] = useState(false)
    return (
        <div
            className='p-2'
        >
            <Heading>Taking Daily Attendance</Heading>
            
            <Auto_attendance/>

            <div
                className='mt-5'
            >
                <Link 
                    to='/admin/take_attendance/manual'
                    className='px-4 py-2 bg-sky-500 text-white rounded-md'
                >
                    Take Manually Attendance
                </Link>
            </div>
        </div>
    );
};

export default Take_attendance;