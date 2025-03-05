import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidInput } from "../../utils/regex";
import { Button, Form, InputBox, Space, Loader } from "../../components";
import * as S from "./FindPasswordStyled";
import { verificationApi } from "../../apis";
import { ROUTE_RESET_PASSWORD_PAGE } from "../../constant";

const FindPassword = () => {
    const [email, setEmail] = useState("");
    const [verificationNumber, setVerificationNumber] = useState("");
    const [verificationHelpText, setVerificationHelpText] = useState("");
    const [verificationHelpTextValid, setVerificationHelpTextValid] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSendVerification = () => {
        setVerificationHelpText(isSent ? "인증번호를 재전송했습니다." : "인증번호를 전송했습니다.");
        setIsSent(true);
        setVerificationHelpTextValid(true);
        verificationApi.request(email);
    };

    const handleSubmit = () => {
        if (verificationNumber === "") {
            setVerificationHelpText("인증번호를 입력해주세요");
            setVerificationHelpTextValid(false);
            return;
        }

        setIsLoading(true);
        verificationApi
            .confirm({ email: email, code: verificationNumber })
            .then(() => {
                navigate(ROUTE_RESET_PASSWORD_PAGE, { state: { email } });
            })
            .catch(() => {
                setVerificationHelpTextValid(false);
                setVerificationHelpText("인증번호가 올바르지 않습니다.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Form formStyles={{ width: "496px" }} innerStyles={{ gap: "8px" }}>
            <S.TitleText>비밀번호 찾기</S.TitleText>
            <Space size={7} />
            <S.FlexRow>
                <InputBox
                    value={email}
                    setValue={setEmail}
                    setIsValid={() => true}
                    label="이메일"
                    inputType="email"
                    placeholder="이메일"
                    validCheck
                />
                <S.ButtonContainer>
                    <Button
                        disabled={!isValidInput("email", email)}
                        styleVariant="semi-rounded"
                        onClick={handleSendVerification}
                    >
                        {isSent ? "재전송" : "전송"}
                    </Button>
                </S.ButtonContainer>
            </S.FlexRow>
            <InputBox
                value={verificationNumber}
                setValue={setVerificationNumber}
                inputType="string"
                placeholder="인증번호"
                customHelpText={verificationHelpText}
                customHelpTextValid={verificationHelpTextValid}
                showHelpText
            />
            <Space size={7} />
            <Button disabled={isLoading} onClick={handleSubmit}>
                인증하기
            </Button>
            {isLoading && <Loader />}
        </Form>
    );
};

export default FindPassword;
