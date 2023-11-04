import axios from 'axios';
import { useState, useEffect } from "react";

const JSON_URL = "https://raw.githubusercontent.com/patrycja-gomza/currency-converter-react/main/src/App/currencyRates.json";
//const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_KQwImW9dizpQDU9CU4gRlOol4ox1vumKqwQWNRq1&currencies=EUR%2CUSD%2CCAD&base_currency=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState(
        { status: "loading" }
    );

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await axios.get(JSON_URL);
                    setRatesData({
                        status: "success",
                        data: response.data,
                        meta: response.data.meta
                    });
                } catch (error) {
                    setRatesData({ status: "error" });
                }
            })();
        }, 3000);
    }, []);

    return ratesData;
};
