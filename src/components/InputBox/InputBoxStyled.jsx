import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    font-family: ${fontFamily.regular};
    font-weight: ${fontWeight.regular};
    gap: 8px;
`;

export const Label = styled.label`
    font-family: ${fontFamily.medium};
    font-weight: ${fontWeight.medium};
    font-size: ${fontSize.caption1};
    color: var(--black);
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid
        ${({ validCheck, isValid, value }) =>
            value ? (validCheck ? (isValid ? "var(--blue100)" : "var(--red)") : "var(--gray500)") : "var(--gray500)"};
    border-radius: 10px;
    padding: 14px 18px;
`;

export const StyledInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: ${fontSize.body2};
    line-height: 24px;
    display: flex;
    align-items: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    height: "24px";
    width: "24px";
`;

export const HelpText = styled.span`
    font-size: ${fontSize.caption2};
    color: ${({ isValid }) => (isValid === undefined ? "var(--gray500)" : isValid ? "var(--blue100)" : "var(--red)")};
`;
