import { useState } from 'react';
import { useZxing } from "react-zxing";

const BarcodeScanner = ({handleScanSearch}) => {
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onDecodeResult(result) {
            handleScanSearch(result.getText());
            console.log(result.getText())
        },
    });

    // console.log(result.length)

    return (
        <div
            className='absolute right-0 top-0 w-2/12 h-[150px] z-10 overflow-hidden opacity-20'
        >
            <video 
                ref={ref} 
                className='w-[100%] bg-cover'
            />
        </div>
    );
};

export default BarcodeScanner;
