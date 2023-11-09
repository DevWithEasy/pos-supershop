import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Heading = ({children}) => {
    const navigate = useNavigate()
    return (
        <div className='relative flex items-center border-b mb-2'>
            <BsArrowLeft 
                size={20}
                onClick={()=>{
                    navigate(-1)
                }}
                className=' cursor-pointer text-red-500'
            />
            <span className='text-center text-xl p-2 uppercase'>{children}</span>
        </div>
    );
};

export default Heading;