import React, {forwardRef, HTMLProps} from 'react';
import s from "./Thumb.module.css"

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
            <div className={s.counter}>{thumbValue}</div>
            <div {...restProps}></div>
        </div>
    )
})

export default CustomThumb