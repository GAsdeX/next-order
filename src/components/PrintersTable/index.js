import React from "react";

import styles from "./styles.module.scss"

export const PrintersTable = ({printers, print}) => {
    return printers ? (
        <table className={styles.Table}>
            <thead>
            <tr>
                <th>Printer Description</th>
                <th>IP Address</th>
                <th>Print receipt</th>
                <th>Open Drawer</th>
                <th>Print Dockets</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {
                printers.map(({name, ip}) => {

                    return (
                        <tr>
                            <td>{name}</td>
                            <td>{ip}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                                <button onClick={() => print(ip)}>Test Print</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    ) : null
}