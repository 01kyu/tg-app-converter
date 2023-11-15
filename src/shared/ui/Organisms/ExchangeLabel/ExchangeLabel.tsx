//region import libs
import { FC, useEffect, useState } from 'react';
//endregion

//region components, utils imports
import {Image, Label} from "../../Atoms";
import { Input } from "../../Molecules";

import { useInput } from "../../../hooks";

import { ICoin } from "../../../../entities";
//endregion

import styles from './style.module.css';

interface IExchangeLabelProps {
    coin: ICoin;
}

export const ExchangeLabel: FC<IExchangeLabelProps> = ({ coin }) => {
    const [result, setResult] = useState<number>(0);
    const exchangeInput = useInput('');
    const exchangeConst = +coin.price;

    useEffect(() => {
        if (exchangeInput.value) {
            setResult(+exchangeInput.value*exchangeConst);
        }
    }, [exchangeInput.value, coin.price])

    return (
        <div className={styles.exchangeLabel}>
            <Image
                src={coin.iconUrl}
                alt={coin.name}
            />
            <Input
                value={exchangeInput.value}
                setValue={exchangeInput.handleInputChange}
                placeholder={'Введите usd'}
            />
            <Label >{result}</Label>
        </div>
    )
}
