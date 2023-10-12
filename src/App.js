import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Info from "./Info";
import currencies from "../currencies";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (selectedCurrency, amount) => {
    const selectedCurrency = currencies.find(({ name }) => name === selectedCurrency);
    const conversionRate = selectedCurrency.rate;

    setResult({
      from: selectedCurrency,
      to: "PLN",
      result: +amount * conversionRate,
    });
  };

  return (
    <Container>
      <Form calculateResult={calculateResult} />
      <Result />
      <Info />
    </Container>
  );
};

export default App;
