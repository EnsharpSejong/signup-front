import { useState, useEffect } from "react";
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
 * @param {string} value - 현재 입력값
 * @param {function} setValue - 입력값 변경 함수
 * @param {function} setIsValid - 유효성 상태 업데이트 함수
 * @param {string} label - 라벨
 * @param {string} placeholder - 플레이스홀더
 * @param {string} inputType - 입력 타입 (기본값: "string")
 * @param {boolean} validCheck - 유효성 검사 여부
 * @param {React.ElementType} icon - 아이콘 (옵션)
 * @param {string} customHelpText - 커스텀 도움말 (옵션)
 * @param {boolean} customHelpTextValid - 도움말 유효성 여부
 * @param {function} customValidCheck - 커스텀 유효성 검사 함수
 * @param {boolean} showHelpText - 도움말 표시 여부
 *
 * @returns {JSX.Element} 입력 필드 UI
 */
const InputBox = ({
    value,
    setValue,
    setIsValid,
    label,
    placeholder,
    inputType = "string",
    validCheck = false,
    icon: Icon = null,
    customHelpText,
    customHelpTextValid,
    customValidCheck,
    showHelpText = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isValid = customValidCheck ? customValidCheck() : isValidInput(inputType, value);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        validCheck && setIsValid && setIsValid(isValid);
    }, [value]);

    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}
            <S.InputWrapper value={value} $isValid={isValid} $validCheck={validCheck}>
                <S.StyledInput
                    type={inputType === "password" ? (showPassword ? "text" : "password") : "text"}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    {...props}
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
                <S.HelpText $isValid={customHelpTextValid !== undefined ? customHelpTextValid : isValid}>
                    {customHelpText || helpTextMap[inputType]}
                </S.HelpText>
            ) : null}
        </S.Container>
    );
};

export default InputBox;
