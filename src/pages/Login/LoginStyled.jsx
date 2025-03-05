import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const TitleText = styled.div`
    font-family: ${fontFamily.semiBold};
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.title};
    line-height: 43px;
`;

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;

export const StyledCheckbox = styled.input`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 5px;
    vertical-align: middle;
    border: 1px solid var(--gray200);
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;

    &:checked {
        background-color: var(--blue100);
        border: 1px solid var(--blue100);
    }

    &:checked::before {
        content: "✔";
        position: absolute;
        top: 2px;
        left: 3px;
        font-size: 14px;
        color: white;
    }
`;

export const StyledLabel = styled.label`
    line-height: 20px;
    user-select: none;
    cursor: pointer;
`;

export const StyledLink = styled.a`
    color: var(--gray200);
    text-decoration: underline;
`;

export const SignupText = styled.span`
    a {
        text-decoration: underline;
    }
`;
