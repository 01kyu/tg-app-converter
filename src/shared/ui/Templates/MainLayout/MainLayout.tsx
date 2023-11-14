//region import libs
import React, { FC, useEffect } from 'react';
import { observer } from "mobx-react-lite";
//endregion

//region components, utils imports
import { Input, Select } from "../../Molecules";

import { useInput } from "../../../hooks";
import { updateInterval, useStores } from "../../../../features";
import classNames from "classnames";
//endregion

import styles from './style.module.css';

interface IMainLayoutProps {
  //children: React.ReactNode;
  className?: string;
}

export const MainLayout: FC<IMainLayoutProps> = observer(({ className }) => {
	const usdInput = useInput('');
	//const [selectOptions, setSelectOptions] = useState<never[] | [{value: string, label: string}]>([]);
	const { coins: { coinList, getCoins, coinOptions } } = useStores();
	const timer = setInterval(() => {
		getCoins();
	}, updateInterval);

	useEffect(() => {
		return () => {
			clearInterval(timer);
		}
	}, [coinList])

	console.log(coinOptions);

	return (
		<div className={classNames(className, styles.mainLayout)}>
			<div>
				<Input value={usdInput.value} setValue={usdInput.handleInputChange} />
				<Select options={[{value: 'option1', label: 'this some option'}, {value: 'this someoption2', label: 'yessss'}]} />
			</div>
		</div>
	);
});
