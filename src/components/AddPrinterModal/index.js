import React, {useState} from 'react';
import {TextInput} from "../TextInput";
import {IpInput} from "../IpInput";

import styles from './styles.module.scss'

export const AddPrinterModal = ({addPrinter, setModalState, modalState}) => {
    const [name, setName] = useState()
    const [ip, setIp] = useState()

    const onSubmit = () => {
        addPrinter({name, ip})
    }

    return modalState ? (
        <div className={styles.overlay}>
            <div className={styles.modalBody}>
                <div className={styles.inputs}>
                    <div className={styles.title}>
                        Printer
                    </div>
                    <TextInput onChange={(e) => setName(e)}/>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.title}>
                        Ip Address
                    </div>
                    <IpInput onChange={setIp}/>
                </div>

                <button className={styles.button} onClick={onSubmit}>Add printer</button>
                <button className={styles.button} onClick={() => setModalState(false)}>Close</button>
            </div>
        </div>
    ) : null
}