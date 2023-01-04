import React, {FC, useState} from 'react';
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import {API, APIResponseType} from "./RequestAPI";
import {AxiosError, isAxiosError} from "axios";
import s from "./HW13.module.css"

type RequestProps = {
    onResponse: (message: string) => void
}

const Request: FC<RequestProps> = ({onResponse}) => {
    const [success, setSuccess] = useState(false)

    const sendRequest = () => {
        API.post(success)
            .then(({data}) => {
                onResponse(data.errorText)
            })
            .catch((e: Error | AxiosError<APIResponseType>) => {
                let message: string
                if (isAxiosError(e)) {
                    message = e.response?.data.errorText || "something went wrong"
                } else {
                    message = e.message
                }
                onResponse(message)
            })
    }

    return (
        <div className={s.request}>
            <SuperButton onClick={sendRequest}>Send request</SuperButton>
            <SuperCheckbox checked={success} onChangeChecked={setSuccess}/>

        </div>
    )
}

export default Request