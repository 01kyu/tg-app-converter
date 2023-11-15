//region import libs
import { FC } from 'react';
//endregion

//region components, utils imports

//endregion

import styles from "./style.module.css";
import classNames from "classnames";

interface IImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const Image: FC<IImageProps> = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={classNames(styles.image, className)}
        />
    )
}
