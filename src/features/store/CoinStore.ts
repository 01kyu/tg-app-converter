import {action, flow, makeAutoObservable, observable} from "mobx";
import { CoinApi, ICoinList } from "../../entities";
import { RootStore } from "./RootStore";

export class CoinStore {
    @observable coinList: ICoinList | null = null;
    @observable isLoading: boolean = false;
    @observable error: string | null = null;

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    @flow
    *getCoinList(/*limit: number, page: number*/) {
        this.isLoading = true;
        this.error = null;

        try {
            console.log(CoinApi.getCoins())
        }
        catch (e) {
            console.log(e);
        }
    }

    @action
    getCoins(/*limit: number, page: number*/) {
        this.getCoinList();
    }
}