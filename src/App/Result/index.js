import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {result ? (
            <>
                {result.prevElement.toFixed(2)} {result.from} =
                {" "}
                <strong>
                    {result.resultElement.toFixed(2)} {result.to}
                </strong>
            </>
        ) : (
            null
        )}
    </StyledResult>
);

export default Result;