import { useState } from "react";

export const useResult = (ratesData) => {
    const [result, setResult] = useState(0);

    const calculateResult = (currency, amount) => {
        const selectedCurrency = ratesData.data.data[currency];
        const conversionRate = selectedCurrency.value;

        setResult({
            from: selectedCurrency.code,
            to: "PLN",
            prevElement: +amount,
            resultElement: +amount / conversionRate,
        });
    };
    return { result, calculateResult };
};
