import styled, { css } from "styled-components";

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.crimson};
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
`;

export const Message = styled.p`
    text-align: center;
    font-size: 20px;
    padding: 10px;
    margin: 0;
    line-height: 1.5;

    ${({ $loading }) => $loading && css`
        color: ${({ theme }) => theme.color.black};
        `};

    ${({ $error }) => $error && css`
        color: ${({ theme }) => theme.color.crimson};
        `};
`;

