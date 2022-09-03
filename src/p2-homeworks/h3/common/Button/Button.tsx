import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./Button.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {

}

const Button: React.FC<SuperButtonPropsType> = (
    {
        disabled, className,
        ...restProps
    }
) => {

    const finalClassName =
        `${s.button} ${disabled ? s.disabled : ""} ${className ? className : ""}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
};

export default Button;