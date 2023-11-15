//region import libs
import React, { FC } from 'react'
//endregion

//region fsd imports

//endregion

import styles from "./style.module.css"
import classNames from "classnames";

interface ILabelProps {
    children: React.ReactNode;
    className?: string;
}

export const Label: FC<ILabelProps> = ({ children, className }) => {
    return (
        <label className={classNames(styles.label, className)}>
            {children}
        </label>
    )
}
