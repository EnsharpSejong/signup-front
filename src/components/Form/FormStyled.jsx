import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const FormContainer = styled.div`
    font-family: ${fontFamily.medium};
    font-weight: ${fontWeight.medium};
    font-size: ${fontSize.body2};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.12);
    background-color: white;
    border-radius: 15px;

    ${({ $formStyles }) => $formStyles && { ...$formStyles }};
`;

export const FormInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    padding: 50px 40px;
    gap: 16px;

    ${({ $innerStyles }) => $innerStyles && { ...$innerStyles }};
`;
