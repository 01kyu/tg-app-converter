//region import libs
import React, { FC } from 'react';
//endregion

//region components imports
//endregion

import styles from './style.module.css';
import classNames from "classnames";

interface IInputProps extends Partial<HTMLInputElement> {
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({
	placeholder,
	className,
	value,
	setValue,
	type,
	onfocus
}) => {
	return (
		<input
			placeholder={placeholder}
			className={classNames(className, styles.input)}
			value={value}
			onChange={setValue}
			type={type}
			//@ts-ignore
			onFocus={onfocus}
		/>
	);
};
