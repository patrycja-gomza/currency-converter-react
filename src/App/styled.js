import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(610px, auto);
    padding: 10px 20px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 30px ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 20px;
    }
`;

export const StyledInfo = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.color.silverChalice};
    font-size: small;
    font-style: italic;
`;