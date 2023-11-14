import axios from 'axios';
import { API_COINS, API_NAME, API_VERSION } from "../constants";

export const httpBaseClient = axios.create({
    baseURL: `${API_NAME}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const httpCoinsInstance = axios.create({
    baseURL: `${API_NAME}${API_VERSION}${API_COINS}`
})