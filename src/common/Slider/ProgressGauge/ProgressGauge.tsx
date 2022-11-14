import React, {FC} from 'react';
import s from "./ProgressGauge.module.css"

type ProgressGaugeProps = {
    className?: string
    value?: string | number
}

const ProgressGauge: FC<ProgressGaugeProps> = (props) => {
    const {value, className} = props
    const finalClassName = `${s.gauge} ${className ? className : ""}`

    return <div className={finalClassName}>{value}</div>
}

export default ProgressGauge