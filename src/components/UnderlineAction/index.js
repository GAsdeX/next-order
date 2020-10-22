import React from "react";

import styles from "./UnderLineAction.module.scss"

export const UnderLineAction = ({onClick, children}) => {

    return (
        <div onClick={onClick && onClick} className={styles.UnderLineAction}>
            {children}
        </div>
    )
}