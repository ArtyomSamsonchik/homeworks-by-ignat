import React, {HTMLProps, RefCallback} from 'react';
import ReactSlider, {ReactSliderProps} from "react-slider";
import s from "./CustomSlider.module.css";
import CustomThumb from "./Thumb/CustomThumb";
import ProgressGauge from "./ProgressGauge/ProgressGauge";

type RenderState<T> = { index: number; value: T };
type RenderThumbState<T> = RenderState<T> & { valueNow: number }
type RenderProps = HTMLProps<HTMLDivElement> & { ref: RefCallback<HTMLDivElement> }

type CustomSliderProps<T extends number | readonly number[]> = ReactSliderProps<T> & {
    filledTrack?: T     //0, 1, 2, 3...
    minValue?: number
    maxValue?: number
}

const CustomSlider = <T extends number | readonly number[]>(sliderProps: CustomSliderProps<T>) => {
    const {filledTrack = 0, minValue = 0, maxValue = 100, ...restSliderProps} = sliderProps

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
        let {className, ...restTrackProps} = trackProps

        const trackIsFilled = (Array.isArray(filledTrack) && filledTrack.includes(state.index))
            || filledTrack === state.index

        className = `${className} ${trackIsFilled ? s.filled : ""}`
        return <div className={className} {...restTrackProps}></div>
    }

    return (
        <div className={s.slider_container}>
            <ProgressGauge value={minValue}/>
            <ReactSlider className={s.slider}
                         trackClassName={s.track}
                         thumbClassName={s.thumb}
                         renderTrack={renderTrackCallback}
                         renderThumb={renderThumbCallback}
                         {...restSliderProps}
            />
            <ProgressGauge value={maxValue}/>
        </div>
    )
}

export default CustomSlider
