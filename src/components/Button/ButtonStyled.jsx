import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 10px 16px;
    font-family: ${fontFamily.medium};
    font-size: ${fontSize.body1};
    font-weight: ${fontWeight.medium};

    color: var(--black);
    border: 1px solid ${({ colorVariant }) => (colorVariant === "primary" ? "var(--blue200)" : "var(--gray300)")};
    background-color: ${({ colorVariant }) => (colorVariant === "primary" ? "var(--blue300)" : "var(--gray400)")};
    border-radius: ${({ styleVariant }) => (styleVariant === "rounded" ? "57px" : "10px")};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ colorVariant }) => (colorVariant === "primary" ? "var(--blue200)" : "var(--gray300)")};
    }

    &:disabled {
        background-color: var(--gray400);
        border: 1px solid var(--gray200);
        cursor: not-allowed;
    }
`;
