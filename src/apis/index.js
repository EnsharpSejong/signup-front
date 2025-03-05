import axios from "axios";
import { userApi } from "./user";
import { verificationApi } from "./verification";

export const apiPostRequest = async (url, body) => {
    const { data } = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" },
    });
    return data;
};

export const apiPatchRequest = async (url, body) => {
    const { data } = await axios.patch(url, body, {
        headers: { "Content-Type": "application/json" },
    });
    return data;
};

export { userApi, verificationApi };
