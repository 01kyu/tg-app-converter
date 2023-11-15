//region import libs
import React, { FC, useEffect, useState } from 'react';
//endregion

//region components, utils imports
import { Image, Label } from "../../Atoms";
import { Input } from "../../Molecules";

import { ICoin } from "../../../../entities";
//endregion

import styles from './style.module.css';

interface IExchangeLabelProps {
    coin: ICoin;
    inputValue: string;
    setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ExchangeLabel: FC<IExchangeLabelProps> = ({ coin, inputValue, setInputValue }) => {
    const [result, setResult] = useState<number>(0);
    const exchangeConst = +coin.price;

    useEffect(() => {
        if (inputValue) {
            setResult(+inputValue*exchangeConst);
        }
    }, [inputValue, coin.price])

    return (
        <div className={styles.exchangeLabel}>
            <Image
                src={coin.iconUrl}
                alt={coin.name}
            />
            <Input
                value={inputValue}
                setValue={setInputValue}
                placeholder={'Введите usd'}
                type={'number'}
            />
            <Label >{result}</Label>
        </div>
    )
}
