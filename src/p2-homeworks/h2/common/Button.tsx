import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./Button.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    active?: boolean
}

const Button: React.FC<SuperButtonPropsType> = (
    {
        active, className,
        ...restProps
    }
) => {

    const finalClassName =
        `${s.button} ${active ? s.active : ""} ${className ? className : ""}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
}

export default Button;