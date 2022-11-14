import React, {HTMLProps, RefCallback} from 'react';
import ReactSlider, {ReactSliderProps} from "react-slider";
import s from "./CustomSlider.module.css";
import CustomThumb from "./Thumb/CustomThumb";

type RenderState<T> = { index: number; value: T };
type RenderThumbState<T> = RenderState<T> & { valueNow: number }
type RenderProps = HTMLProps<HTMLDivElement> & { ref: RefCallback<HTMLDivElement> }

type CustomSliderProps<T extends number | readonly number[]> = ReactSliderProps<T> & {
    filledTrack?: T
}

const CustomSlider = <T extends number | readonly number[]>(sliderProps: CustomSliderProps<T>) => {
    const renderThumbCallback = (thumbProps: RenderProps, state: RenderThumbState<T>) => {
        const {ref, ...restThumbProps} = thumbProps

        return (
            <CustomThumb ref={ref}
                         thumbValue={state.valueNow}
                         {...restThumbProps}
            />
        )
    }

    const renderTrackCallback = (trackProps: RenderProps, state: RenderState<T>) => {
        const filledTrack = sliderProps.filledTrack || 0
        let {className, ...restTrackProps} = trackProps

        const trackIsFilled = (Array.isArray(filledTrack)
            && filledTrack.includes(state.index))
            || filledTrack === state.index

        className = `${className} ${trackIsFilled ? s.filled : ""}`
        return <div className={className} {...restTrackProps}></div>
    }

    return (
        <ReactSlider className={s.slider}
                     trackClassName={s.track}
                     thumbClassName={s.thumb}
                     renderTrack={renderTrackCallback}
                     renderThumb={renderThumbCallback}
                     {...sliderProps}
        />
    )
}

export default CustomSlider
