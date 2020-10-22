import React, {useContext, useEffect, useState} from 'react';

import {PrinterContext} from "../../context/PrinterContext"
import {IpInput} from "../IpInput"
import {TextInput} from "../TextInput";

import styles from "./styles.module.scss"
import {UnderLineAction} from "../UnderlineAction";
import {PrintersTable} from "../PrintersTable";
import {AddPrinterModal} from "../AddPrinterModal";

export const AppBody = () => {
    const [modalState, setModalState] = useState()
    const input = useState()
    const {print, setDevice, connect, setDeviceIp, deviceIP, printers, addPrinter} = useContext(PrinterContext)

    useEffect(() => {
        connect('192.168.1.162', '9100')
    }, [])

    return (
        <>
            <AddPrinterModal addPrinter={addPrinter} {...{modalState, setModalState}}/>
            <div className={styles.AppBody}>
                <PrintersTable printers={printers} print={print}/>

                <UnderLineAction>
                    Use help setting up a Bluetooth printing?
                </UnderLineAction>

                <UnderLineAction onClick={() => setModalState(true)}>
                    Add a printer manually
                </UnderLineAction>
            </div>
        </>

    )
}