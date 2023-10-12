import "./style.css";
import currencies from "../currencies";
import { useState } from "react";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState("CHF");
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>

                <p>
                    <label>
                        <span className="form__label"> Wybierz walutę </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>

                <p>
                    <label>
                        <span className="form__label"> Wpisz kwotę * </span>
                        <input
                            className="form__field"
                            required type="number"
                            min="1"
                            step="any"
                            placeholder="Wpisz kwotę w wybranej przez siebie walucie"
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </label>
                </p>
            </fieldset>

            <p className="form__container">
                <button className="form__button">
                    Przelicz!
                </button>
            </p>
        </form>
    );
};

export default Form;