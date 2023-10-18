import { useState } from "react";

const Clock = () => {
    const [currentDay, setCurrentDay] = useState(new Date());

    const formattedDate = currentDay.toLocaleDateString(
        undefined,
        { weekday: "long", day: "numeric", month: "long", year: "numeric" }
    );

    const formattedTime = currentDay.toLocaleTimeString();

    return (
        <div>
            <p>Dzisiaj jest {formattedDate}, {formattedTime}</p>
        </div>
    );
};

export default Clock;