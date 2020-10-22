import React, { useEffect, useRef, useState } from "react";
import { Order } from "../parsers/ParseOrder";
import {addIP, getIPs} from "./actions";

export const PrinterContext = React.createContext({})

const epson = window.epson

export const PrinterProvider = ({ children }) => {
    const [deviceIP, setDeviceIp] = useState(null)
    const [printer, setPrinter] = useState(null)
    const [order, setOrder] = useState(null)
    const [status, setStatus] = useState(null)
    const [printers, setPrinters] = useState([])
    const [counts, setCounts] = useState();

    const address = (ip) =>
        `http://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`;

    useEffect(() => {
        setPrinters(getIPs());
    }, [])

    const onReceive = (epos) => (res) => {
        // Obtain the print result and error code
        var msg = 'Print' + (res.success ? 'Success' : 'Failure') + '\nCode:' + res.code
            + '\nStatus:\n';
        // Obtain the printer status
        var asb = res.status;
        if (asb & epos.ASB_NO_RESPONSE) {
            msg += ' No printer response\n';
        }
        if (asb & epos.ASB_PRINT_SUCCESS) {
            msg += ' Print complete\n';
        }
        if (asb & epos.ASB_DRAWER_KICK) {
            msg += ' Status of the drawer kick number 3 connector pin = "H"\n';
        }
        if (asb & epos.ASB_OFF_LINE) {
            msg += ' Offline status\n';
        }
        if (asb & epos.ASB_COVER_OPEN) {
            msg += ' Cover is open\n';
        }
        if (asb & epos.ASB_PAPER_FEED) {
            msg += ' Paper feed switch is feeding paper\n';
        }
        if (asb & epos.ASB_WAIT_ON_LINE) {
            msg += ' Waiting for online recovery\n';
        }
        if (asb & epos.ASB_PANEL_SWITCH) {
            msg += ' Panel switch is ON\n';
        }
        if (asb & epos.ASB_MECHANICAL_ERR) {
            msg += ' Mechanical error generated\n';
        }
        if (asb & epos.ASB_AUTOCUTTER_ERR) {
            msg += ' Auto cutter error generated\n';
        }
        if (asb & epos.ASB_UNRECOVER_ERR) {
            msg += ' Unrecoverable error generated\n';
        }
        if (asb & epos.ASB_AUTORECOVER_ERR) {
            msg += ' Auto recovery error generated\n';
        }
        if (asb & epos.ASB_RECEIPT_NEAR_END) {
            msg += ' No paper in the roll paper near end detector\n';
        }
        if (asb & epos.ASB_RECEIPT_END) {
            msg += ' No paper in the roll paper end detector\n';
        }
        if (asb & epos.ASB_BUZZER) {
            msg += ' Sounding the buzzer (limited model)\n';
        }
        if (asb & epos.ASB_SPOOLER_IS_STOPPED) {
            msg += ' Stop the spooler\n';
        }
        //Display in the dialog box
        alert(msg);
    }

    const print = (deviceIP) => {
        const epos = new epson.ePOSPrint(address(deviceIP))
        const builder = new epson.ePOSBuilder();

        const builtOrder = new Order(builder, order, 46)

        setPrinter([epos, builtOrder.printer]);

        epos.onreceive = onReceive(epos);
        epos.onerror = function (res) {
            alert("Job failed with status: ");

            if (window.confirm("Retry?")) {
                epos.send(builder.toString());
            }
        };

        epos.send(builder.toString());
    }

    const addPrinter = (printer) => {
        addIP(printer);
        const printers = getIPs()

        if (printers instanceof Array) {
            setPrinters(printers);
        } else {
            setPrinters([printer]);
        }
    }

    return <PrinterContext.Provider value={{ connect: () => { }, print, setDeviceIp, deviceIP, setPrinters, addPrinter, printers }}>
        {children}
    </PrinterContext.Provider>
}

// useEffect(() => {
//     const epos = new epson.ePOSPrint(address(deviceIP))
//     const builder = new epson.ePOSBuilder();
//
//     const builtOrder = new Order(builder, order, 46)
//
//     setPrinter([epos, builtOrder.printer]);
//
//     epos.onreceive = onReceive;
//     epos.onerror = function (res) {
//         alert("Job failed");
//     };
//
// }, [deviceIP])