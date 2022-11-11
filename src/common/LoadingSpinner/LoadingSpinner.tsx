import React, {FC} from 'react';
import spinnerImage from "../../assets/images/LoadingSpinner.svg"
import s from "./LoadingSpinner.module.css"

type LoadingSpinnerProps = {
    className?: string
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({className}) => {
    const finalClassName =  `${s.spinner} ${className ? className : ""}`

    return (
        <div className={finalClassName}>
            <img src={spinnerImage} alt="spinner"/>
        </div>
    )
}

export default LoadingSpinner