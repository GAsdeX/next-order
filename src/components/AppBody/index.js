import React, {useContext, useEffect, useState} from 'react';

import {PrinterContext} from "../../context/PrinterContext"

import styles from "./styles.module.scss"
import {UnderLineAction} from "../UnderlineAction";
import {PrintersTable} from "../PrintersTable";
import {AddPrinterModal} from "../AddPrinterModal";

export const AppBody = () => {
    const [modalState, setModalState] = useState()
    const input = useState()
    const {print, setDevice, connect, setDeviceIp, deviceIP, printers, addPrinter, isTcp, useTcp} = useContext(PrinterContext)

    return (
        <>
            <AddPrinterModal addPrinter={addPrinter} {...{modalState, setModalState}}/>
            <div className={styles.AppBody}>
                <PrintersTable printers={printers} print={print}/>

                <UnderLineAction onClick={useTcp}>
                    <input type="checkbox" checked={isTcp}/>Use TCP server?
                </UnderLineAction>

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