import { useState, useEffect } from "react";
import { isValidInput } from "../utils/regex";
import { userApi } from "../apis";
import { emailErrorText, ERROR_STATUS } from "../constant";

const useEmailValidation = (email, dispatch) => {
    const [emailHelpText, setEmailHelpText] = useState("");

    const handleEmailValidation = () => isValidInput("email", email.value) && email.isUnique;

    const changeEmailHelpText = (status) => {
        dispatch({ type: "SET_IS_UNIQUE", field: "email", isUnique: false });
        setEmailHelpText(emailErrorText[status] || emailErrorText[ERROR_STATUS.INTERNAL_SERVER_ERROR]);
    };

    const handleEmailHelpText = () => {
        const isEmailValid = isValidInput("email", email.value);
        dispatch({ type: "SET_IS_VALID", field: "email", isValid: isEmailValid });

        if (!isEmailValid) {
            dispatch({ type: "SET_IS_UNIQUE", field: "email", isUnique: false });
            setEmailHelpText("");
            return;
        }

        setEmailHelpText("중복 이메일 확인 중...");
        dispatch({ type: "SET_IS_UNIQUE", field: "email", isUnique: undefined });

        userApi
            .checkEmail(email.value)
            .then((isUnique) => {
                setEmailHelpText(isUnique ? "사용 가능한 이메일입니다." : "이미 등록된 이메일입니다.");
                dispatch({ type: "SET_IS_UNIQUE", field: "email", isUnique });
            })
            .catch((error) => {
                changeEmailHelpText(error.response.status);
            });
    };

    useEffect(() => {
        handleEmailHelpText();
    }, [email.value]);

    return { emailHelpText, handleEmailValidation };
};

export default useEmailValidation;
