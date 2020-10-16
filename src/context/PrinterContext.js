import React, { useEffect, useRef, useState } from "react";

export const PrinterContext = React.createContext({})



const epson = window.epson
console.log(epson);
var ePosDev = new epson.ePOSDevice(); 
var builder = new epson.ePOSBuilder(); 

builder.addText("qrqwerq").addText("qrqwerq")

console.log(builder); 



export const PrinterProvider = ({children}) => {
    // const [[deviceIP, devicePort], setDevice] = useState([])
    const [printer, setPrinter] = useState(null)
    const [status, setStatus] = useState(null)
    const ref = useRef(null)
    
    // var printer = null;
    
    useEffect(() => {
        ref.current.html = builder.message
    })

    function connect(deviceIP, devicePort) {
        //Connect to device
        console.log(deviceIP, devicePort);
        ePosDev.connect(deviceIP, devicePort, callback_connect);
    }
    function callback_connect(data) {
        const deviceID = 'local_printer';
        var options  = {'crypto' : false, 'buffer' : false};

        if (data == 'OK') {
			console.log("connected to ePOS Device Service Interface.", true);
			ePosDev.createDevice(deviceID, ePosDev.DEVICE_TYPE_PRINTER, options, callbackCreateDevice_printer);
		}
		else if (data == 'SSL_CONNECT_OK') {
			console.log("connected to ePOS Device Service Interface with SSL.", true);
			ePosDev.createDevice(deviceID, ePosDev.DEVICE_TYPE_PRINTER, options, callbackCreateDevice_printer);
		}
		else {
			console.log("connected to ePOS Device Service Interface is failed. [" + data + "]", true);
		}
    }


    function callbackCreateDevice_printer(data, code) {
		if (data == null) {
			console.log(code);
			return;
		}

        console.log("you can use printer.");
    }



    return <PrinterContext.Provider value={{connect}}>
        {children}
    </PrinterContext.Provider>
}