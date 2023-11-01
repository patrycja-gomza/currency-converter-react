import { useState, useEffect } from "react";

export const useRatesDay = (ratesData) => {
    const [ratesDay, setRatesDay] = useState(new Date());

    useEffect(() => {
        setRatesDay(
            new Date(
                !!ratesData.meta && ratesData.meta.last_updated_at
            )
        );
    }, [ratesData]);

    const formattedRatesDay = ratesDay.toLocaleDateString(
        undefined,
        { month: "numeric", day: "numeric", year: "numeric" }
    );
    return formattedRatesDay;
};