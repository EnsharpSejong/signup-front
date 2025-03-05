import { useEffect, useReducer } from "react";
import { signupReducer, initialState } from "./reducer";
import useEmailValidation from "../../hooks/useEmailValidation";
import useSignupApi from "../../hooks/useSignupApi";
import { Button, Form, InputBox, Space, Loader } from "../../components";
import * as S from "./SignupStyled";

const Signup = () => {
    const [userInfo, dispatch] = useReducer(signupReducer, initialState);
    const { emailHelpText, handleEmailValidation } = useEmailValidation(userInfo.email, dispatch);
    const { handleSignup, handleSendVerification, isLoading, isSent, verificationHelpText, isVerificationHelpText } =
        useSignupApi(userInfo);

    const handleChange = (field) => (value) => dispatch({ type: "SET_FIELD", field, value });
    const handleValidation = (field) => (isValid) => dispatch({ type: "SET_IS_VALID", field, isValid });

    useEffect(() => {
        handleEmailValidation();
    }, [userInfo.email.value]);

    return (
        <Form formStyles={{ width: "516px" }} innerStyles={{ gap: "8px" }}>
            <S.TitleText>회원가입</S.TitleText>
            <Space size={7} />

            <S.FlexRow>
                <InputBox
                    value={userInfo.email.value}
                    setValue={handleChange("email")}
                    setIsValid={handleValidation("email")}
                    label="이메일"
                    inputType="email"
                    placeholder="이메일"
                    validCheck
                    customValidCheck={handleEmailValidation}
                    customHelpText={emailHelpText}
                    customHelpTextValid={userInfo.email.isUnique}
                    showHelpText={userInfo.email.value}
                />
                <S.ButtonContainer>
                    <Button
                        disabled={!userInfo.email.isUnique}
                        styleVariant="semi-rounded"
                        onClick={handleSendVerification}
                    >
                        {isSent ? "재전송" : "전송"}
                    </Button>
                </S.ButtonContainer>
            </S.FlexRow>

            <InputBox
                value={userInfo.verificationNumber.value}
                setValue={handleChange("verificationNumber")}
                setIsValid={handleValidation("verificationNumber")}
                inputType="string"
                placeholder="인증번호"
                customHelpText={verificationHelpText}
                customHelpTextValid={isVerificationHelpText}
                showHelpText
            />

            <Space size={4} />
            <InputBox
                value={userInfo.password.value}
                setValue={handleChange("password")}
                setIsValid={handleValidation("password")}
                label="비밀번호"
                inputType="password"
                placeholder="비밀번호"
                validCheck
            />
            <InputBox
                value={userInfo.passwordCheck.value}
                setValue={handleChange("passwordCheck")}
                setIsValid={handleValidation("passwordCheck")}
                inputType="password"
                placeholder="비밀번호 확인"
                validCheck
                customValidCheck={() => userInfo.password.value === userInfo.passwordCheck.value}
                customHelpText="비밀번호가 일치하지 않습니다."
            />
            <Space size={4} />
            <InputBox
                value={userInfo.name.value}
                setValue={handleChange("name")}
                setIsValid={handleValidation("name")}
                label="이름"
                placeholder="이름"
            />
            <Space size={4} />
            <InputBox
                value={userInfo.address.value}
                setValue={handleChange("address")}
                setIsValid={handleValidation("address")}
                label="주소"
                inputType="address"
                placeholder="주소"
                validCheck
            />
            <InputBox
                value={userInfo.detailAddress.value}
                setValue={handleChange("detailAddress")}
                setIsValid={handleValidation("detailAddress")}
                placeholder="상세주소"
            />
            <Space size={7} />
            <Button
                disabled={!Object.values(userInfo).every(({ isValid }) => isValid) || isLoading}
                onClick={handleSignup}
            >
                제출하기
            </Button>
            {isLoading && <Loader />}
        </Form>
    );
};

export default Signup;
