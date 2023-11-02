import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { StyledContainer, StyledInfo } from "./styled";
import { useRatesData } from "./useRatesData";
import { useRatesDay } from "./useRatesDay";
import { useResult } from "./useResult";
import LoadingAndError from "./LoadingAndError";

function App() {
  const ratesData = useRatesData();
  const formattedRatesDay = useRatesDay(ratesData);
  const { result, calculateResult } = useResult(ratesData);

  return (
    <StyledContainer>
      <Clock />
      <LoadingAndError ratesData={ratesData}>
        <Form calculateResult={calculateResult} ratesData={ratesData} />
        <Result result={result} />
        <StyledInfo>
          Kursy walut pobierane są z Europejskiego Banku Centralnego
          <br />
          Aktualne na dzień: <strong>{formattedRatesDay}</strong>
        </StyledInfo>
      </LoadingAndError>
    </StyledContainer>
  );
};

export default App;
