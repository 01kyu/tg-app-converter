//region import libs
import React, { FC, useEffect } from 'react';
//endregion

//region components, utils imports
import { Image, Label } from "../../Atoms";
import { Input } from "../../Molecules";

import { ICoin } from "../../../../entities";
import { useInput } from "../../../hooks";

import { useStores } from "../../../../features";
import { observer } from "mobx-react-lite";
//endregion

import styles from './style.module.css';


interface IExchangeLabelProps {
    coin: ICoin;
}

export const ExchangeLabel: FC<IExchangeLabelProps> = observer(({ coin }) => {
    const { coins : { setActivePrice, setActiveCurrency, currentUsdPrice, activeCurrency }} = useStores();
    const incomingInput = useInput(currentUsdPrice);
    const exchangeConst = +coin.price;

    useEffect(() => {
        if (incomingInput.value && incomingInput.value !== '0') {
            setActivePrice(+incomingInput.value*exchangeConst);
        }
    }, [incomingInput.value, coin.price])

    useEffect(() => {
        if (activeCurrency && activeCurrency !== coin.name) {
            incomingInput.setValue((+currentUsdPrice/+coin.price).toString())
            console.log(currentUsdPrice, coin.price)
        }
    }, [activeCurrency, currentUsdPrice])

    const handleInputChange = () => {
        setActiveCurrency(coin.name);
        incomingInput.setValue('');
    }


    return (
        <div className={styles.exchangeLabel}>
            <Image
                src={coin.iconUrl}
                alt={coin.name}
            />
            <Input
                onfocus={handleInputChange}
                value={incomingInput.value}
                setValue={incomingInput.handleInputChange}
                placeholder={'Введите число'}
                type={'number'}
            />
            {activeCurrency && <span>(in {activeCurrency})</span>}
            <Label>${currentUsdPrice}</Label>
        </div>
    )
});