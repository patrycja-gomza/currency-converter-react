import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { useState } from "react";
import { StyledContainer, StyledInfo } from "./styled";
import { useCurrencyConverter } from "./useCurrencyConverter";

function App() {
  const ratesData = useCurrencyConverter();

  const [result, setResult] = useState(0);

  const calculateResult = (currency, amount) => {
    const selectedCurrency = ratesData.data[currency];
    const conversionRate = selectedCurrency.value;

    setResult({
      from: selectedCurrency,
      to: "PLN",
      resultElement: +amount * conversionRate,
    });
  };

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
            - Kursy pochodzą z dnia 06.05.2023 -
          </StyledInfo>
        </>
      )}
    </StyledContainer>
  );
};

export default App;
