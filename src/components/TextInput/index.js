import React from "react";

import inputStyles from "../../assets/scss/modules/Input/input.module.scss"

export const TextInput = ({onChange}) => {


    return (
        <div className={inputStyles.InputWrapper}>
            <div>
                <input type="text" onChange={(e) => {
                    onChange(e.target.value)
                }}/>
            </div>
        </div>
    )
}