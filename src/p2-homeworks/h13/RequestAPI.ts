import axios from "axios";

export type APIResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

const instance = axios.create({
    baseURL: "https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test"
})

export const API = {
    post(success: boolean) {
        return instance.post<APIResponseType>("", {success})
    }
}