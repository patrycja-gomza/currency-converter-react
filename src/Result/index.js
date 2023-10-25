import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        Kwota po przeliczeniu: <strong>
            {result ? result.resultElement.toFixed(2) : "0.00"} PLN
        </strong>
    </StyledResult>
);

export default Result;