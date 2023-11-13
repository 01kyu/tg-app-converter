import axios from 'axios';

export const httpBaseClient = axios.create({
    baseURL: process.env.API,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const httpCoinsInstance = axios.create({
    baseURL: `https://api.coinranking.com/v2/coins/`
})