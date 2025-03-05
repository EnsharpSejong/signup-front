import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const TitleText = styled.div`
    font-family: ${fontFamily.semiBold};
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.title};
    line-height: 43px;
`;

export const FlexRow = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 124px;
    height: 83px;
    padding-top: 29px;
`;
