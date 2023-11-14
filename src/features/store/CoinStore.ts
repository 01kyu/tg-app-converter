import { action, flow, makeAutoObservable, observable } from "mobx";
import { CoinApi, ICoin } from "../../entities";
import { RootStore } from "./RootStore";

interface ICoinOption {
    value: string;
    label: string;
}

export class CoinStore {
    @observable coinList: ICoin[] | null = null;
    @observable coinOptions: ICoinOption[] | never[] = [];
    @observable isLoading: boolean = false;
    @observable error: string | null | unknown = null;

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }


    @action
    getCoins() {
        this.getCoinList();
    }

    @action
    updateCoins(updatedArray: ICoin[]) {
        this.coinList = null;
        if (updatedArray) {
            this.coinList = updatedArray;
            updatedArray.map((element) => {
                const curLabel = element.name;
                const curValue = element.price;

                const option: { value: string, label: string } = { value: 'nothing', label: 'nothing'};

                option['value'] = curValue;
                option['label'] = curLabel;

                //@ts-ignore
                this.coinOptions.push(option);
                const unique = new Set(this.coinOptions);
                // @ts-ignore
                this.coinOptions = [...unique];
            })
        }
    }

    /*@action
    getCoinOptions(coinList: ICoinList[]) {
        if (coinList) {
        }
    }*/

    @flow
    *getCoinList(/*limit: number, page: number*/) {
        this.isLoading = true;
        this.error = null;

        try {
            CoinApi.getCoins().then(result =>  this.updateCoins(result.data.data.coins));
            this.isLoading = false;
            this.error = null;
        }
        catch (e) {
            console.log(e);
            this.error = e;
        }
    }
}