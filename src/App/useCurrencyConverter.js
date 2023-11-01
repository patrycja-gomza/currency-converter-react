import axios from 'axios';
import { useState, useEffect } from "react";

export const useCurrencyConverter = () => {
    const [ratesData, setRatesData] = useState();

    const urlJson = "https://raw.githubusercontent.com/patrycja-gomza/currency-converter-react/main/src/App/currencyRates.json";
    //const urlApi = "https://api.currencyapi.com/v3/latest?apikey=cur_live_KQwImW9dizpQDU9CU4gRlOol4ox1vumKqwQWNRq1&currencies=EUR%2CUSD%2CCAD&base_currency=PLN";

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(urlJson);
                setRatesData(response.data);
            } catch (error) {
                setRatesData({ error: true });
            }
        })();
    }, []);
    return ratesData;
};