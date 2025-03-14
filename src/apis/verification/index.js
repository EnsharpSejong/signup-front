import { apiPostRequest } from "..";

export const verificationApi = {
    // 전송
    request: async (email) => {
        return await apiPostRequest(`${import.meta.env.VITE_API_BASE_URL}/api/v1/email-verification/request`, {
            email,
        });
    },

    // 확인
    confirm: async ({ email, code }) => {
        return await apiPostRequest(`${import.meta.env.VITE_API_BASE_URL}/api/v1/email-verification/confirm`, {
            email,
            code,
        });
    },
};
