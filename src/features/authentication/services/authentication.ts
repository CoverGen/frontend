import axios, { AxiosError } from "axios";
import type { ISignUp } from "../models/SignUp";
import type { ILogin } from "../models/Login";
class AuthRequests {
    baseUrl: string;
    constructor(url: string) {
        this.baseUrl = url;
    }
    async signUp(data: ISignUp) {
        let response;
        try {
            response = await axios.post(`${this.baseUrl}/register/`, data);
            return response.data;
        } catch (e: unknown) {
            return "error";
        }
    }
    async logIn(data: ILogin) {
        let response;
        try {
            response = await axios.post(`${this.baseUrl}/login/`, data);
            return response.data;
        } catch (e: unknown) {
            // (OLD) if (e instanceof AxiosError) return e.response?.data;
            // return the error entirely to be evaluated
            if (e instanceof AxiosError) return e;
        }
    }
}
export default AuthRequests;
