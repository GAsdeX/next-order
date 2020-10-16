import React, { useEffect, useRef, useState } from "react";

export const PrinterContext = React.createContext({})



const epson = window.epson
var ePosDev = new epson.ePOSDevice();
var builder = new epson.ePOSBuilder();


export const PrinterProvider = ({ children }) => {
    // const [[deviceIP, devicePort], setDevice] = useState([])
    const [printer, setPrinter] = useState(null)
    const [status, setStatus] = useState(null)
    const ref = useRef(null)

    // var printer = null;


    // var address = 'http://192.168.1.162/cgi-bin/epos/service.cgi?devid=local_printer&time&out=9100';
    var address = 'http://192.168.1.162:9100/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000';



    //Create ePOSPrint object
    var epos = new epson.ePOSPrint(address);
    //Create ePOSBuilder object
    var builder = new epson.ePOSBuilder();
    //Register the event
    epos.onreceive = function (res) { alert(res.success); };
    //Create the printing data 
    
    builder.addText('Hello\n');
    //Send the printing data 
    
    builder.addFeed();
    builder.addFeed();
    builder.addFeed();
    builder.addTextSize(1, 2);
    builder.addTextAlign(builder.ALIGN_CENTER);
    builder.addText('Town and Country Pizza\n');
    builder.addTextSize(1, 1);
    builder.addText('406/173-199 Pioneer Rd\n');
    builder.addText('Geelong, VIC 3216\n');
    builder.addFeed();
    builder.addText('*** Kitchen ***\n');
    builder.addText('==========================================\n');
    builder.addTextSize(1, 2);
    builder.addTextFont(builder.FONT_SPECIAL_A);
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Online Pre-order Delivery\n');
    builder.addText('Code: 703944\n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addTextSize(1, 1);
    builder.addTextAlign(builder.ALIGN_CENTER);
    builder.addTextFont(builder.FONT_A);
    builder.addText('Placed                   Tue 13th 05:12:PM\n');
    builder.addText('Expected                             06:30\n');
    builder.addTextFont(builder.FONT_A);
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addText('==========================================\n');
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Customer                                  \n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addText('Will Richards - 0419371396                \n');
    builder.addText('6 Bexley Court, Highton                   \n');
    builder.addText('==========================================\n');
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Notes                                     \n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addText('N/A                                       \n');
    builder.addText('==========================================\n');
    builder.addTextSize(1, 2);
    builder.addText('3 Large Hawaiian                          \n');
    builder.addText('2 Large Country Special                   \n');
    builder.addFeed();
    builder.addText('                        Delivery Fee: 5.00\n');
    builder.addText('                    Total (Inc GST): 95.00\n');
    builder.addText('                     *ORDER NOT PAID-CASH*\n');
    builder.addTextSize(1, 1);
    builder.addText('==========================================\n');
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Specials                                  \n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addTextSize(1, 2);
    builder.addText('2 Large Pizzas                       -8.10\n');
    builder.addText('2 Large Pizzas                       -8.10\n');
    builder.addText('2 Large Pizzas                       -8.10\n');
    builder.addText('******************************************\n');


    epos.send(builder.toString());

    const print = () => {epos.send(builder.toString());}


    return <PrinterContext.Provider value={{ connect:()=>{}, print}}>
        {children}
    </PrinterContext.Provider>
}