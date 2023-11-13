import { httpCoinsInstance } from "../../../features";

/*interface ICoinsParams {
    limit?: number;
    page?: number;
}*/

export class CoinApi {
    static async getCoins() {
        return httpCoinsInstance.get('/', /*{ params }*/)
    }
}