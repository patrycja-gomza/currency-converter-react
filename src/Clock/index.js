import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
    const [currentDay, setCurrentDay] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentDay(() => new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const formattedDate = currentDay.toLocaleDateString(
        undefined,
        { weekday: "long", day: "numeric", month: "long", year: "numeric" }
    );

    const formattedTime = currentDay.toLocaleTimeString();

    return (
        <div className="clock">
            <p>Dzisiaj jest {formattedDate}, {formattedTime}</p>
        </div>
    );
};

export default Clock;