import React, { useEffect, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const Scanner_Barcode = () => {
    const videoRef = useRef (null);
    const reader = useRef(new BrowserMultiFormatReader());

    useEffect(() => {
        if (!videoRef.current) return;
        reader.current.decodeFromConstraints(
            {
                audio: false,
                video: {
                    facingMode: 'environment',
                },
            },
            videoRef.current,
            (result, error) => {
                if (result) console.log(result);
                if (error) console.log(error);
            }
        );
        return () => {
            reader.current.reset();
        }
    }, [videoRef]);

    return <video ref={videoRef} />;
};

export default Scanner_Barcode;