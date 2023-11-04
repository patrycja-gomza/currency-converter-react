import axios from 'axios';
import { useState, useEffect } from "react";

//const JSON_URL = "https://raw.githubusercontent.com/patrycja-gomza/currency-converter-react/main/src/App/currencyRates.json";
const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_KQwImW9dizpQDU9CU4gRlOol4ox1vumKqwQWNRq1&currencies=EUR%2CUSD%2CCAD&base_currency=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState(
        { loading: true }
    );

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await axios.get(API_URL);
                    setRatesData({ ...response.data });
                } catch (error) {
                    setRatesData({ error: true });
                }
            })();
        }, 3000);
    }, []);

    return ratesData;
};
