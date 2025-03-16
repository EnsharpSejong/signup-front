import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const TitleText = styled.div`
    font-family: ${fontFamily.semiBold};
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.title};
    line-height: 43px;
`;

export const MyInfoList = styled.ul`
    font-family: ${fontFamily.regular};
    font-weight: ${fontWeight.medium};
    font-size: ${fontSize.caption1};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
