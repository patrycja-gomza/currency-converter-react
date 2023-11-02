const LoadingAndError = ({ ratesData, children }) => {
    const { loading, error } = ratesData;

    return (
        <>
            {(ratesData.loading || ratesData.error) ? (
                <>
                    <h1>Kalkulator walut</h1>

                    {ratesData.loading === true ? (
                        <p>
                            Sekundka... Ładuję kursy walut z Europejskiego Banku Centralnego...😎
                        </p>
                    ) : ratesData.error === true ? (
                        <p>
                            Hmm... Coś poszło nie tak ☹ Sprawdź, czy masz połączenie z internetem.
                            <br />
                            Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj później? 😉
                        </p>
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