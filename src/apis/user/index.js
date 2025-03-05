import { apiPostRequest, apiPatchRequest } from "..";

export const userApi = {
    // 이메일 체크
    checkEmail: async (email) => {
        return await apiPostRequest(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/email-check`, { email });
    },

    // 회원가입
    signup: async ({ email, password, username, streetAddress, detailAddress }) => {
        return await apiPostRequest(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/signup`, {
            email,
            password,
            username,
            streetAddress,
            detailAddress,
        });
    },

    // 로그인
    login: async ({ email, password }) => {
        return await apiPostRequest(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/login`, { email, password });
    },

    // 비밀번호 재설정
    resetPassword: async ({ email, password }) => {
        return await apiPatchRequest(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/password`, { email, password });
    },
};
