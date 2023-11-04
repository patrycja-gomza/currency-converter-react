import { useState, useEffect } from "react";

export const useRatesDay = (ratesData) => {
    const [ratesDay, setRatesDay] = useState(new Date());

    useEffect(() => {
        if (ratesData?.meta?.last_updated_at) {
            setRatesDay(
                new Date(ratesData.meta.last_updated_at)
            );
        }
    }, [ratesData]);

    const formattedRatesDay = ratesDay.toLocaleDateString(
        undefined,
        { month: "numeric", day: "numeric", year: "numeric" }
    );
    return formattedRatesDay;
};