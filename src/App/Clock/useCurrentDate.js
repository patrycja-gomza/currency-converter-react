import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [currentDay, setCurrentDay] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentDay(() => new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return currentDay;
};