import React, { useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import BarcodeScanner from '../../components/new_invoice/Scanner';

const Take_attendance = () => {
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
            audioRef.current.play();
        }

        try {
            if (result === scaneSearch) {
                return setScaneSearch('')
            }
            const res = await axios.get(`${baseUrl}/api/employee/find/${result}`)
            if (res.data.success) {
                
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <div>
                <div>
                    <BarcodeScanner {...{ handleScanSearch,setScaneSearch,audioRef }}/>
                </div>
            </div>
        </div>
    );
};

export default Take_attendance;