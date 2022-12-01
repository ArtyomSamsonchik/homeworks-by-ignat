import React from "react";
import {useAppSelector} from "../h10/bll/store";
import {useDispatch} from "react-redux";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";

function HW12() {
    const options = useAppSelector(state => state.theme.available)
    const selected = useAppSelector(state => state.theme.selected)
    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 12</h3>
            <p>Select theme:</p>
            <SuperSelect value={selected} options={options} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
