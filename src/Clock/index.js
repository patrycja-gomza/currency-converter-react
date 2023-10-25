import "./style.css";
import { useCurrentDate } from "./useCurrentDate.js";

const Clock = () => {
    const currentDay = useCurrentDate();

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