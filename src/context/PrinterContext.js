import React, { useEffect, useState } from "react";

export const PrinterContext = React.createContext({})



const epson = window.epson

export const PrinterProvider = ({children}) => {
    // const [[deviceIP, devicePort], setDevice] = useState([])
    const [printer, setPrinter] = useState(null)
    const [status, setStatus] = useState(null)
    

    var ePosDev = new epson.ePOSDevice(); 
    // var printer = null;
    
    function connect([deviceIP, devicePort]) {
        //Connect to device
        console.log(deviceIP, devicePort);
        ePosDev.connect(deviceIP, devicePort, callback_connect);
    }
    function callback_connect(resultConnect) {
        setStatus(resultConnect)
        if ((resultConnect == 'OK') || (resultConnect == 'SSL_CONNECT_OK')) {
            //Get the Printer object
            ePosDev.createDevice('local_printer', ePosDev.DEVICE_TYPE_PRINTER, {
                'crypto':
                    false, 'buffer': false
            }, callback_createDevice);
        }
        else {
            console.log("error", resultConnect);
            //Display the error message
        }
    }
    function callback_createDevice(deviceObj, retcode) {
        if (retcode == 'OK') {
            console.log(deviceObj);
            setPrinter(deviceObj)
            printer.timeout = 60000;
            //Register the printing complete event
            printer.onreceive = function (res) { alert(res.success); };
        } else {
            alert(retcode);
        }
    }
    function print() {
        //Create the printing data 
        printer.addText('Hello\n');
        //Send the printing data
        printer.send();
    }
    function disconnect() {
        //Discard the Printer object 
        ePosDev.deleteDevice(printer, callback_deleteDevice);
    }
    function callback_deleteDevice(errorCode) { //Disconnect to device 
        ePosDev.disconnect();
    }


    return <PrinterContext.Provider value={{print, connect}}>
        {children}
    </PrinterContext.Provider>
}