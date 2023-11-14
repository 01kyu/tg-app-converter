//region import libs
import React, { FC } from 'react';
//endregion

//region components imports
//endregion

import styles from './style.module.css';
import classNames from "classnames";

interface IInputProps {
	placeholder?: string;
	className?: string;
	value: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({
	placeholder,
	className,
	value,
	setValue
}) => {
	return (
		<input
			placeholder={placeholder}
			className={classNames(className, styles.input)}
			value={value}
			onChange={setValue}
		/>
	);
};
