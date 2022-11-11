import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {

    const mappedOptions = options
        ? options.map((el, i) => <option key={el + "-" + i} value={el}>{el}</option>)
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalSelectName = `${s.selectContainer} ${className ? className : ""}`

    return (
        <div className={finalSelectName}>
            <select  onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
            <div className={s.arrow}></div>
        </div>
    )
}

export default SuperSelect
