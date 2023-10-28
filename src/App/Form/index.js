import currencies from "../currencies";
import { useState } from "react";
import { Fieldset, Legend, LabelTitle, StyledField, Container, Button } from "./styled";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState("CHF");
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
                                onChange={(event) => setCurrency(event.target.value)}
                            >
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.description}
                                        value={currency.name}
                                    >
                                        {currency.name}
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