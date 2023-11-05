import { Header, Message } from "./styled";

const LoadingAndError = ({ ratesData, children }) => {

    if (ratesData.status !== "loading" && ratesData.status !== "error") {
        return children;
    }

    return (
        <>
            <Header>Kalkulator walut</Header>

            {ratesData.status === "loading" ? (
                <Message $loading>
                    Sekundka...
                    <br />
                    Ładuję kursy walut z Europejskiego Banku Centralnego 😎
                </Message>
            ) : (
                <Message $error>
                    Hmm... Coś poszło nie tak ☹️ Sprawdź, czy masz połączenie z internetem.
                    <br />
                    Jeśli masz... to wygląda na to, że to nasza wina.
                    <br />
                    Może spróbuj później? 😉
                </Message>
            )}
        </>
    );
};

export default LoadingAndError;