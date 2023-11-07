import React, { useState } from 'react';
import BarcodeScanner from '../components/Scanner';

const New_Invoice = () => {
    const [data, setData] = React.useState("Not Found");
    console.log(data)
    return (
        <div>
            <BarcodeScanner/>
        </div>
    );
};

export default New_Invoice;