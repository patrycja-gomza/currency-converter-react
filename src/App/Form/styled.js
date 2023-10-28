import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 20px;
    border-radius: 10px;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.color.crimson};
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
`;

export const LabelTitle = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 150px;
    margin-right: 5px;
`;

export const StyledField = styled.select`
    width: 100%;
    max-width: 400px;
    border: 1px solid ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.color.concrete};

        &.select {
        as="select";
        }
`;

export const Container = styled.p`
    text-align: center;
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.crimson};
    border: 1px solid ${({ theme }) => theme.color.silver};
    border-radius: 10px;
    text-align: center;
    padding: 10px 30px;
    cursor: pointer;
`;