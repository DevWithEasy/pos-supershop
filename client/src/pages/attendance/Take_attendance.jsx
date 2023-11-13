import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Auto_attendance from '../../components/attendance/Auto_attendance';
import { Link } from 'react-router-dom';

const Take_attendance = () => {
    return (
        <div
            className='p-2'
        >
            <Heading>Taking Daily Attendance</Heading>
            
            <Auto_attendance/>
            
        </div>
    );
};

export default Take_attendance;