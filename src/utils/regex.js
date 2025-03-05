export const regexMap = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // 이메일 형식
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/, // 8~16자, 문자+숫자+특수문자 포함
    string: /^.{1,}$/, // 최소 1자 이상 (빈 값 방지)
    address: /(([가-힣A-Za-z·\d~\-\.]{2,}(로|길).[\d]+)|([가-힣A-Za-z·\d~\-\.]+(읍|동)\s)[\d]+)/, // 한국 도로명 주소 및 지번 주소
};

export const isValidInput = (type, value) => {
    return regexMap[type]?.test(value) ?? false;
};
