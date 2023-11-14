//region import libs
import React, {FC, useState} from 'react';
//endregion

//region components imports
//endregion

//import styles from './style.module.css';

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  options: IOption[];
  className?: string;
}

export const Select: FC<ISelectProps> = ({ options/*, className*/ }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0].label);
	return (
		<select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
		</select>
	);
};
