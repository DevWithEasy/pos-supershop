import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../../components/Heading';
import EmployeeCard from '../../components/employee/EmployeeCard';
import useUserStore from '../../store/userStore';
import EmployeeDetails from '../../components/employee/employeeDetails';

const Employee = () => {
    const { employees } = useUserStore();
    const { id } = useParams()
    const employee = employees.find(u => u._id === id)

    return (
        <div
            className='p-2'
        >
            <Heading>Employee Details</Heading>
            <div
                className='flex justify-between gap-x-4'
            >
                <EmployeeDetails {...{ employee }} />
                <div
                    className='w-1/2 flex justify-center'
                >
                    <EmployeeCard {...{ employee}} />
                </div>
            </div>
        </div>
    );
};

export default Employee;