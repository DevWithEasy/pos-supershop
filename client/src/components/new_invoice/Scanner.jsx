import React, { useEffect, useState } from 'react';
import {Html5QrcodeScanner} from "html5-qrcode";


function BarcodeScanner() {
    const [data, setData] = useState('No result');
    
    const success =(result)=>{
        scanner.clear()
        console.log(result)
    }

    const error =(error)=>{
        console.log(error)
    }
    useEffect(() =>{
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 650,
                height: 650,
            },
            fps: 5
        })
    
        scanner.render(success,error)
    },[])

    return (
        <div id="reader" width="600px" height="600px"></div>
    );
}

export default BarcodeScanner;
