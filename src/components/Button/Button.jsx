import { StyledButton } from "./ButtonStyled";

/**
 * Button 컴포넌트
 *
 * @param {string} colorVariant - 버튼의 색상 종류 ("primary" | "secondary" 기본값: "primary")
 * @param {string} styleVariant - 버튼의 스타일 종류 ("rounded" | "semi-rounded" 기본값: "rounded")
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - 기본 HTML 버튼 속성들 (예: onClick, disabled 등)
 *
 * @returns {React.Element} 버튼 요소
 */
const Button = ({ colorVariant = "primary", styleVariant = "rounded", ...props }) => {
    return <StyledButton $colorVariant={colorVariant} $styleVariant={styleVariant} {...props} />;
};

export default Button;
