import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isValidInput } from "../../utils/regex";
import { Button, Form, InputBox, Space, Loader } from "../../components";
import * as S from "./ResetPasswordStyled";
import { userApi } from "../../apis";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const email = location.state?.email || "";

    const navigate = useNavigate();

    const isEveryFieldValid = () => {
        return isValidInput("password", password) && password === passwordCheck;
    };

    const handleSubmit = () => {
        if (!isEveryFieldValid()) {
            alert("비밀번호를 올바르게 입력해주세요.");
            return;
        }

        setIsLoading(true);
        userApi
            .resetPassword({ email, password })
            .then(() => {
                setIsFinished(true);
            })
            .catch(() => {
                alert("비밀번호 재설정에 실패했습니다.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (!email) {
            navigate("/find-password");
        }
    }, [email, navigate]);

    return (
        <Form formStyles={{ width: "496px" }} innerStyles={{ gap: "8px" }}>
            {isFinished ? (
                <>
                    <S.TitleText>안내</S.TitleText>
                    <Space size={7} />
                    <S.StyledCheckIcon />
                    <S.CompleteText>비밀번호 재설정 완료</S.CompleteText>
                    <Space size={7} />
                    <Button onClick={() => navigate("/")}>로그인 하기</Button>
                </>
            ) : (
                <>
                    <S.TitleText>비밀번호 재설정</S.TitleText>
                    <Space size={7} />
                    <InputBox value={email} label="이메일" inputType="email" placeholder="이메일" disabled />
                    <Space size={7} />
                    <InputBox
                        value={password}
                        setValue={setPassword}
                        label="비밀번호"
                        inputType="password"
                        placeholder="비밀번호"
                        validCheck
                        customValidCheck={() => isValidInput("password", password)}
                    />
                    <InputBox
                        value={passwordCheck}
                        setValue={setPasswordCheck}
                        inputType="password"
                        placeholder="비밀번호 확인"
                        validCheck
                        customValidCheck={() => password === passwordCheck}
                        customHelpText="비밀번호가 일치하지 않습니다."
                    />
                    <Space size={7} />
                    <Button disabled={isLoading} onClick={handleSubmit}>
                        재설정
                    </Button>
                    {isLoading && <Loader />}
                </>
            )}
        </Form>
    );
};

export default ResetPassword;
