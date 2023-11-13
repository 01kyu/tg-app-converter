import { CoinStore } from "./CoinStore";
import { storeNames } from "../constants";

export class RootStore {
    [storeNames.COINS]: CoinStore;

    constructor() {
        Object.assign(this, {
            [storeNames.COINS]: new CoinStore(this),
        })
    }
}