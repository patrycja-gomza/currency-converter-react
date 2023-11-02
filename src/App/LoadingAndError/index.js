import { Header, Message } from "./styled";

const LoadingAndError = ({ ratesData, children }) => {

    return (
        <>
            {(ratesData.loading || ratesData.error) ? (
                <>
                    <Header>Kalkulator walut</Header>

                    {ratesData.loading === true ? (
                        <Message $loading>
                            Sekundka...
                            <br />
                            Ładuję kursy walut z Europejskiego Banku Centralnego 😎
                        </Message>
                    ) : ratesData.error === true ? (
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