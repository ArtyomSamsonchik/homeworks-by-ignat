import React, {forwardRef, HTMLProps} from 'react';
import s from "./Thumb.module.css"
import ProgressGauge from "../ProgressGauge/ProgressGauge";

type ThumbProps = HTMLProps<HTMLDivElement> & {
    thumbValue: number
}

const CustomThumb = forwardRef<HTMLDivElement, ThumbProps>((props, ref) => {
    const {style, thumbValue, ...restProps} = props

    return (
        <div ref={ref}
             style={style}
             className={s.thumb_container}
        >
            <ProgressGauge className={s.counter} value={thumbValue}/>
            <div {...restProps}></div>
        </div>
    )
})

export default CustomThumb