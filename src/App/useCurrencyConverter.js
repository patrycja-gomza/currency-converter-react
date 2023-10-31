import axios from 'axios';

const takeRatesFromJSON = (async () => {
    try {
        const response = await axios.get("currencyRates.json");
        return response.data;
    } catch (error) {
        console.error("Błąd podczas pobierania danych z pliku JSON", error);
    }
})();

const takeRatesFromAPI = (async () => {
    try {
        const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_KQwImW9dizpQDU9CU4gRlOol4ox1vumKqwQWNRq1");
        return {
            rates: response.data.rates,
            date: response.data.date,
        };
    } catch (error) {
        console.error("Błąd podczas pobierania kursów walut z API", error);
    }
})();
