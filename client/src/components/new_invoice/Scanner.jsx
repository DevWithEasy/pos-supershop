import React, { useEffect } from 'react';
import Quagga from 'quagga';

function BarcodeScanner() {
    useEffect(() => {
        Quagga.init(
            {
                inputStream: {
                    name: 'Live',
                    type: 'LiveStream',
                    target: document.querySelector('#barcode-scanner'), // The target HTML element for the video stream
                    constraints: {
                        facingMode: 'environment', // Use the rear camera for mobile devices
                    },
                },
                decoder: {
                    readers: ['code_128_reader'], // You can specify the barcode formats you want to scan
                },
            },
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                Quagga.start();
            }
        );

        Quagga.onDetected((data) => {
            console.log('Barcode detected:', data.codeResult.code);
            // Handle the detected barcode here, e.g., send it to an API or update the UI.
        });

        return () => {
            Quagga.stop();
        };
    }, []);

    return <div id="barcode-scanner"></div>;
}

export default BarcodeScanner;
