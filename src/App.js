import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Info from "./Info";
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
      <Form calculateResult={calculateResult} />
      <Result result={result} />
      <Info />
    </Container>
  );
};

export default App;