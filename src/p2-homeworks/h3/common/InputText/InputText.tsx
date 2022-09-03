import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import s from './InputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    labelClassName?: string
}

const InputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyDown, onEnter,
        error,
        className, spanClassName,
        labelClassName,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    };

    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown && onKeyDown(e);

        onEnter && e.key === 'Enter' && onEnter();
    };

    const finalSpanClassName = `${s.error_message} ${spanClassName ? spanClassName : ''}`;
    const finalInputClassName = `${s.input} ${className ? className : ""}`;
    const finalLabelClassName =
        `${s.label} ${error ? s.error : ""} ${labelClassName ? labelClassName: ""}`;

    return (
        <label className={finalLabelClassName}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </label>
    );
};

export default InputText;
