import axios from "axios";
import type { ISignUp } from "../models/SignUp";
import type { ILogin } from "../models/Login";

class AuthRequests {
    baseUrl: string;
    constructor(url: string) {
        this.baseUrl = url;
    }
    async signUp(data: ISignUp) {
        let response;
        console.log(data);
        try {
            response = await axios.post(`${this.baseUrl}/register/`, data);
            return response.data;
        } catch (e: unknown) {
            return "error";
        }
    }

    async logIn(data: ILogin) {
        let response;
        console.log(data);
        try {
            response = await axios.post(`${this.baseUrl}/login/`, data);
            return response.data;
        } catch (e: unknown) {
            return "error";
        }
    }
}

export default AuthRequests;
