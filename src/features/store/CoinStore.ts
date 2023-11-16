import { action, flow, makeAutoObservable, observable } from "mobx";
import { CoinApi, ICoin } from "../../entities";
import { RootStore } from "./RootStore";

/*interface ICoinOption {
    value: string;
    label: string;
}*/

export class CoinStore {
    @observable coinList: ICoin[] | null = null;
    @observable activeCurrency: string | null = null; //fix
    @observable currentUsdPrice: string  = '0';
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
    setActivePrice(price: number) {
        this.currentUsdPrice = price.toString();
    }

    @action
    setActiveCurrency(currency: string) {
        this.activeCurrency = currency;
    }

    @action
    updateCoins(updatedArray: ICoin[]) {
        if (updatedArray) {
            this.coinList = updatedArray;
            /*updatedArray.map((element) => {
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
            })*/
        }
    }

    //todo pagination (limit as const, page as argument)
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