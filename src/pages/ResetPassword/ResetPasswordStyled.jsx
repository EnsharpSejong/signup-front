import styled from "styled-components";
import CheckIcon from "../../assets/check.svg?react";
import { fontFamily, fontSize, fontWeight } from "../../styles/theme";

export const TitleText = styled.div`
    font-family: ${fontFamily.semiBold};
    font-weight: ${fontWeight.semiBold};
    font-size: ${fontSize.title};
    line-height: 43px;
`;

export const StyledCheckIcon = styled(CheckIcon)`
    width: 72px;
    height: 72px;
    stroke-width: 1px;
`;

export const CompleteText = styled.span`
    font-family: ${fontFamily.medium};
    font-weight: ${fontWeight.light};
    font-size: ${fontSize.caption1};
`;
