import { Header, Message } from "./styled";

const LoadingAndError = ({ ratesData, children }) => {

    return (
        <>
            {(ratesData.status === "loading" || ratesData.status === "error") ? (
                <>
                    <Header>Kalkulator walut</Header>

                    {ratesData.status === "loading" ? (
                        <Message $loading>
                            Sekundka...
                            <br />
                            Ładuję kursy walut z Europejskiego Banku Centralnego 😎
                        </Message>
                    ) : ratesData.status === "error" ? (
                        <Message $error>
                            Hmm... Coś poszło nie tak ☹️ Sprawdź, czy masz połączenie z internetem.
                            <br />
                            Jeśli masz... to wygląda na to, że to nasza wina.
                            <br />
                            Może spróbuj później? 😉
                        </Message>
                    ) : null}
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </>
    );
};

export default LoadingAndError;