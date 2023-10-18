import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import currencies from "./currencies";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (currency, amount) => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);
    const conversionRate = selectedCurrency.rate;

    setResult({
      from: selectedCurrency,
      to: "PLN",
      resultElement: +amount * conversionRate,
    });
  };

  return (
    <Container>
      <Clock />
      <Form calculateResult={calculateResult} />
      <Result result={result} />
      <p className="container__info">
        - Kursy pochodzą z dnia 06.05.2023 -
      </p>
    </Container>
  );
};

export default App;
