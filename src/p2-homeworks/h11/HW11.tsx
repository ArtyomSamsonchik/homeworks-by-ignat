import React, {useState} from 'react'
import CustomSlider from "../../common/Slider/CustomSlider";
import s from "./HW11.module.css"

function HW11() {
    const MIN_VALUE = 0
    const MAX_VALUE = 100

    const [value1, setValue1] = useState(MIN_VALUE)
    const [value2, setValue2] = useState(MAX_VALUE)

    const getMultiChangeHandler = (...cb: Array<(value: number) => void>) => (values: number[]) => {
                cb.forEach((cb, i) => cb(values[i]))
        }

    const onDoubleSliderChangeHandler = getMultiChangeHandler(setValue1, setValue2)

    return (
        <div>
            <hr/>
            <h3>homeworks 11</h3>
            <div className={s.slider_container}>
                <CustomSlider onChange={setValue1} value={value1}/>
                <CustomSlider value={[value1, value2]}
                              filledTrack={[1]}
                              pearling
                              minDistance={7}
                              onChange={onDoubleSliderChangeHandler}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11