export const helpTextMap = {
    name: "공백 기입 불가능",
    email: "유효하지 않은 메일입니다.",
    password: "8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해주세요",
    address: "주소를 입력해주세요",
};

export const verificationTextMap = {
    send: "인증번호가 전송되었습니다.",
    resend: "인증번호가 재전송되었습니다.",
    emailFail: "올바르지 않은 이메일입니다.",
    verificationFail: "인증번호가 일치하지 않습니다.",
};

export const emailErrorText = {
    400: "유효하지 않은 메일입니다.",
    409: "이미 등록된 이메일입니다.",
    500: "이메일 검사 중 오류가 발생했습니다.",
};

export const signupErrorText = {
    400: "인증번호가 일치하지 않습니다.",
    500: "회원가입 처리 중 오류가 발생했습니다. 다시 시도해주세요.",
};

export const loginErrorText = {
    400: "유효하지 않은 메일입니다.",
    401: "비밀번호가 일치하지않습니다.",
    404: "존재하지 않는 이메일입니다.",
    500: "회원가입 처리 중 오류가 발생했습니다. 다시 시도해주세요.",
};
