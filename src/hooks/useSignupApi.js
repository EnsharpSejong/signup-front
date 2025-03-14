import { useState } from "react";
import { userApi, verificationApi } from "../apis";
import { ROUTE_LOGIN_PAGE, signupErrorText } from "../constant";

const useSignupApi = (userInfo) => {
    const [isLoading, setIsLoading] = useState(false);
    const [verificationHelpText, setVerificationHelpText] = useState("");
    const [isVerificationHelpText, setIsVerificationHelpText] = useState(true);
    const [isSent, setIsSent] = useState(false);

    const handleSendVerification = async () => {
        setIsLoading(true);
        try {
            await verificationApi.request(userInfo.email.value);
            setVerificationHelpText(isSent ? "인증번호를 재전송했습니다." : "인증번호를 전송했습니다.");
            setIsSent(true);
            setIsVerificationHelpText(true);
        } catch {
            setVerificationHelpText("인증번호 전송에 실패했습니다.");
            setIsVerificationHelpText(false);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async () => {
        setIsLoading(true);

        try {
            await verificationApi.confirm({
                email: userInfo.email.value,
                code: userInfo.verificationNumber.value,
            });

            await userApi.signup({
                email: userInfo.email.value,
                password: userInfo.password.value,
                username: userInfo.name.value,
                streetAddress: userInfo.address.value,
                detailAddress: userInfo.detailAddress.value,
            });

            alert("회원가입이 성공적으로 완료되었습니다.");
            window.location.href = ROUTE_LOGIN_PAGE;
        } catch (error) {
            const status = error.response?.status;
            setVerificationHelpText(signupErrorText[status]);
            setIsVerificationHelpText(false);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        handleSignup,
        handleSendVerification,
        isLoading,
        isSent,
        verificationHelpText,
        isVerificationHelpText,
    };
};

export default useSignupApi;
