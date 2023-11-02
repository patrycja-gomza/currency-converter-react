import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { StyledContainer, StyledInfo } from "./styled";
import { useRatesData } from "./useRatesData";
import { useRatesDay } from "./useRatesDay";
import { useResult } from "./useResult";

function App() {
  const ratesData = useRatesData();
  const formattedRatesDay = useRatesDay(ratesData);
  const { result, calculateResult } = useResult(ratesData);

  return (
    <StyledContainer>
      <Clock />
      {(ratesData.loading || ratesData.error) ? (
        <>
          <h1>Kalkulator walut</h1>
          {ratesData.loading === true ? (
            <p>Sekundka... Ładuję kursy walut z Europejskiego Banku Centralnego...😎</p>
          ) : ratesData.error === true ? (
            <p>Hmm... Coś poszło nie tak ☹ Sprawdź, czy masz połączenie z internetem. <br />Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj później? 😉</p>
          ) : null}
        </>
      ) : (
        <>
          <Form calculateResult={calculateResult} ratesData={ratesData} />
          <Result result={result} />
          <StyledInfo>
            Kursy walut pobierane są z Europejskiego Banku Centralnego
            <br />
            Aktualne na dzień: <strong>{formattedRatesDay}</strong>
          </StyledInfo>
        </>
      )}
    </StyledContainer>
  );
};

export default App;
