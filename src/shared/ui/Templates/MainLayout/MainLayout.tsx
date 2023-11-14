//region import libs
import React, { FC, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
//endregion

//region components, utils imports
/*import { Input, Select } from "../../Molecules";

import { useInput } from "../../../hooks";*/
import { updateInterval, useStores } from "../../../../features";
import { ICoin } from "../../../../entities";

import { toJS } from "mobx";
import classNames from "classnames";
//endregion

import styles from './style.module.css';

interface IMainLayoutProps {
  className?: string;
}

export const MainLayout: FC<IMainLayoutProps> = observer(({ className }) => {
	const { coins: { coinList, getCoins } } = useStores();
	const [coins, setCoins] = useState<ICoin[] | null>(null);

	useEffect(() => {
		getCoins();
	}, [])

	useEffect(() => {
		const timer = setInterval(() => {
			getCoins();
		}, updateInterval);


		return () => {
			clearInterval(timer);
		}
	}, [])

	useEffect(() => {
		const currentCoins = coinList ? toJS(coinList) : null;
		setCoins(currentCoins);

	}, [coinList])

	/*
	todo ?useManyInputs hook for resolving coin exchanges, pagination component, implement pagination
	  todo create some resulting component
	*/

	return (
		<div className={classNames(className, styles.mainLayout)}>
			<div>
				{coins ? coins.map((coin) => (
					<div>
						<img src={coin.iconUrl} alt={coin.name} />
						<input />
						<label> `here would be your exchange value` </label>
						<label> 1usd = {coin.price}</label>
					</div>
					))
					:
					<></>
				}
			</div>
		</div>
	);
});
