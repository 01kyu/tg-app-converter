//region import libs
import React, { FC, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
//endregion

//region components, utils imports
/*import { Input, Select } from "../../Molecules";

import { useInput } from "../../../hooks";*/
import { ExchangeLabel } from "../../Organisms";
import { updateInterval, useStores } from "../../../../features";
import { ICoin } from "../../../../entities";

import { toJS } from "mobx";
import classNames from "classnames";
//endregion

import styles from './style.module.css';
import {useInput} from "../../../hooks";

interface IMainLayoutProps {
  className?: string;
}

//some fixes here?
//@ts-ignore
const tgRef = window.Telegram.WebApp;

export const MainLayout: FC<IMainLayoutProps> = observer(({ className }) => {
	const { coins: { coinList, getCoins } } = useStores();
	const [coins, setCoins] = useState<ICoin[] | null>(null);
	const usd = useInput('');

	useEffect(() => {
		tgRef.ready();
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

	const onClose = () => {
		tgRef.close();
	}

	return (
		<div className={classNames(className, styles.mainLayout)}>
			<div className={styles.mainLayout__header}>
				<h1>Конвертер валют</h1>
				<button className={styles.mainLayout__headerBtn} onClick={onClose}>X</button>
			</div>
			<div className={styles.mainLayout__body}>
				{coins && coins.map((coin) => (
					<ExchangeLabel inputValue={usd.value} setInputValue={usd.handleInputChange} coin={coin} key={coin.uuid} />
					))
				}
			</div>
		</div>
	);
});
