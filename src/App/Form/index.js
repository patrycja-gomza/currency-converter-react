import { useState } from "react";
import { Fieldset, Legend, LabelTitle, StyledField, Container, Button } from "./styled";

const Form = ({ calculateResult, ratesData }) => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <p>
                    <label>
                        <LabelTitle> Wybierz walutę </LabelTitle>
                        <StyledField
                            as="select"
                            value={currency}
                            onChange={(event) => setCurrency(event.target.value)}
                        >
                            {ratesData.data && Object.keys(ratesData.data.data).map((currency) => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            ))}
                        </StyledField>
                    </label>
                </p>

                <p>
                    <label>
                        <LabelTitle> Wpisz kwotę * </LabelTitle>
                        <StyledField
                            as="input"
                            required type="number"
                            min="1"
                            step="any"
                            placeholder="Wpisz kwotę w wybranej przez siebie walucie"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </label>
                </p>
            </Fieldset>

            <Container>
                <Button>
                    Przelicz!
                </Button>
            </Container>
        </form>
    );
};

export default Form;