import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        Kwota po przeliczeniu: <strong>
            {result ? result.resultElement.toFixed(2) : "0.00"} PLN
        </strong>
    </p>
);

export default Result;