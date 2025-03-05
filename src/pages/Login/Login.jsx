import { ERROR_STATUS, loginErrorText } from "../../constant";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../apis";
import EmailIcon from "../../assets/email.svg?react";
import PasswordIcon from "../../assets/password.svg?react";
import { Button, Form, InputBox, Space, Loader } from "../../components";
import * as S from "./LoginStyled";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailHelpText, setEmailHelpText] = useState("이메일을 입력해주세요");
    const [passwordHelpText, setPasswordHelpText] = useState("비밀번호를 입력해주세요");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleErrorText = (status) => {
        switch (status) {
            case ERROR_STATUS.BAD_REQUEST:
            case ERROR_STATUS.NOT_FOUND:
                setEmailHelpText(loginErrorText[status]);
                setEmailError(true);
                setPasswordError(false);
                break;
            case ERROR_STATUS.UNAUTHORIZED:
                setPasswordHelpText(loginErrorText[status]);
                setPasswordError(true);
                setEmailError(false);
                break;
            default:
                alert(loginErrorText[status]);
                break;
        }
    };

    const handleLogin = () => {
        if (!email) {
            setEmailHelpText("이메일을 입력해주세요");
            setEmailError(true);
            emailRef.current?.focus();
            return;
        }

        if (!password) {
            setPasswordError(true);
            setPasswordHelpText("비밀번호를 입력해주세요");
            passwordRef.current?.focus();
            return;
        }

        setIsLoading(true);
        userApi
            .login({ email, password })
            .then(() => {
                if (rememberMe) {
                    localStorage.setItem("storedEmail", email);
                } else {
                    localStorage.removeItem("storedEmail");
                }
                localStorage.setItem("loginedEmail", email);
                navigate("/my-info");
            })
            .catch((error) => {
                handleErrorText(error.response.status);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem("storedEmail");
        if (storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true);
        }
    }, []);

    useEffect(() => {
        if (email) {
            setEmailError(false);
        }
    }, [email]);

    useEffect(() => {
        if (password) {
            setPasswordError(false);
        }
    }, [password]);

    return (
        <Form formStyles={{ width: "496px", position: "relative" }}>
            <S.TitleText>En# SignUp!!</S.TitleText>
            <Space size={-1} />
            <InputBox
                ref={emailRef}
                value={email}
                setValue={setEmail}
                inputType="email"
                placeholder="E-mail"
                icon={EmailIcon}
                showHelpText={emailError}
                customHelpTextValid={!emailError}
                customHelpText={emailHelpText}
            />
            <InputBox
                ref={passwordRef}
                value={password}
                setValue={setPassword}
                inputType="password"
                placeholder="Password"
                icon={PasswordIcon}
                onKeyDown={handleKeyDown}
                showHelpText={passwordError}
                customHelpTextValid={!passwordError}
                customHelpText={passwordHelpText}
            />
            <S.OptionsContainer>
                <S.CheckboxWrapper>
                    <S.StyledCheckbox
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={handleCheckboxChange}
                    />
                    <S.StyledLabel htmlFor="remember-me">아이디 저장</S.StyledLabel>
                </S.CheckboxWrapper>
                <S.StyledLink href="/find-password">비밀번호 찾기</S.StyledLink>
            </S.OptionsContainer>
            <Space size={-1} />
            <Button onClick={handleLogin} disabled={isLoading}>
                Login
            </Button>
            <S.SignupText>
                계정이 없으신가요? <S.StyledLink href="/signup">회원가입</S.StyledLink>
            </S.SignupText>
            {isLoading && <Loader />}
        </Form>
    );
};

export default Login;
