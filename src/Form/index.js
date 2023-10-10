import "./style.css";

const Form = () => (
    <form>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <label>
                    <span className="form__label"> Wybierz walutę </span>
                    <select className="form__field" name="currency">
                        <option value="CHF">CHF</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__label"> Wpisz kwotę * </span>
                    <input className="form__field" required type="number" min="1" step="any"
                        placeholder="Wpisz kwotę w wybranej przez siebie walucie" />
                </label>
            </p>
        </fieldset>
        <p className="form__container">
            <button className="form__button">Przelicz!</button>
        </p>
    </form>
);

export default Form;