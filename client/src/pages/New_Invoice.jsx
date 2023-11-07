import React, { useState } from 'react';
import BarcodeScanner from '../components/Scanner';

const New_Invoice = () => {
    const [data, setData] = useState("Not Found");
    console.log(data)
    const _onDetected = result => {
        console.log(result)
    }
    return (
        <div>
            <BarcodeScanner onDetected={_onDetected}/>
        </div>
    );
};

export default New_Invoice;