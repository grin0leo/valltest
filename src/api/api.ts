import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://103.88.242.151:7777/dstu', // можно сделать динамическим через env-переменные
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});