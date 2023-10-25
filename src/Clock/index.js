import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate.js";

const Clock = () => {
    const currentDay = useCurrentDate();

    const formattedDate = currentDay.toLocaleDateString(
        undefined,
        { weekday: "long", day: "numeric", month: "long", year: "numeric" }
    );

    const formattedTime = currentDay.toLocaleTimeString();

    return (
        <StyledClock>
            <p>Dzisiaj jest {formattedDate}, {formattedTime}</p>
        </StyledClock>
    );
};

export default Clock;