import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(610px, auto);
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0 0 30px #000000;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const StyledInfo = styled.p`
    text-align: center;
    color: #a6a6a6;
    font-size: small;
    font-style: italic;
`;