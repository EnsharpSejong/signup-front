import { useState } from "react";
import CheckIcon from "../../assets/check.svg?react";
import FailIcon from "../../assets/fail.svg?react";
import EyeIcon from "../../assets/eye.svg?react";
import EyeOffIcon from "../../assets/eye-off.svg?react";
import { isValidInput } from "../../utils/regex";
import { helpTextMap } from "../../constant";
import * as S from "./InputBoxStyled";

/**
 * InputBox 컴포넌트
 *
 * 사용자가 입력할 수 있는 인풋 필드를 제공하며, 유효성 검사 및 비밀번호 표시/숨김 기능을 지원함.
 *
 * @param {string} value - 현재 입력값
 * @param {function} setValue - 입력값을 변경하는 함수
 * @param {string} label - 입력 필드의 라벨 (옵션)
 * @param {string} placeholder - 입력 필드의 플레이스홀더 (옵션)
 * @param {string} inputType - 입력 타입 ("string" | "password" 등, 기본값: "string")
 * @param {boolean} validCheck - 유효성 검사 여부 (기본값: false)
 * @param {React.ElementType} icon - 인풋 필드 우측 아이콘 (옵션)
 * @param {string} customHelpText - 커스텀 도움말 텍스트 (옵션)
 * @param {boolean} customHelpTextValid - 커스텀 도움말이 유효한지 여부 - 색상 변화 (옵션)
 * @param {function} customValidCheck - 커스텀 유효성 검사 함수 (옵션)
 * @param {boolean} showHelpText - 도움말을 항상 표시할지 여부 (기본값: false)
 *
 * @returns {JSX.Element} 입력 필드 UI
 */
const InputBox = ({
    value,
    setValue,
    label,
    placeholder,
    inputType = "string",
    validCheck = false,
    icon: Icon = null,
    customHelpText,
    customHelpTextValid,
    customValidCheck,
    showHelpText = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isValid = customValidCheck ? customValidCheck() : isValidInput(inputType, value);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.InputWrapper value={value} isValid={isValid} validCheck={validCheck}>
                <S.StyledInput
                    type={inputType === "password" ? (showPassword ? "text" : "password") : "text"}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <S.IconWrapper>
                    {value === "" && Icon && <Icon />}
                    {inputType === "password" &&
                        value &&
                        (showPassword ? (
                            <EyeOffIcon onClick={togglePasswordVisibility} style={{ cursor: "pointer" }} />
                        ) : (
                            <EyeIcon onClick={togglePasswordVisibility} style={{ cursor: "pointer" }} />
                        ))}
                    {validCheck && value && (isValid ? <CheckIcon /> : <FailIcon />)}
                </S.IconWrapper>
            </S.InputWrapper>
            {showHelpText || (value && validCheck && !isValid) ? (
                <S.HelpText isValid={customHelpTextValid !== undefined ? customHelpTextValid : isValid}>
                    {customHelpText || helpTextMap[inputType]}
                </S.HelpText>
            ) : null}
        </S.Container>
    );
};

export default InputBox;
