import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import SuperButton from "../../common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (filter: FilterType) => {
        return () => props.setFilter(filter)
    }

    const getControlButtonClassName = (buttonFilter: FilterType) => {
        return `${s.button} ${s.control_button} ${buttonFilter === props.filter ? s.active : ""}`
    }

    return (
        <div className={s.affairs_list}>
            <div className={s.affairs_body}>{mappedAffairs}</div>

            <div className={s.control_buttons_container}>
                <SuperButton className={getControlButtonClassName("all")}
                             onClick={setFilter("all")}
                >All</SuperButton>
                <SuperButton className={getControlButtonClassName("high")}
                             onClick={setFilter("high")}
                >High</SuperButton>
                <SuperButton className={getControlButtonClassName("middle")}
                             onClick={setFilter("middle")}
                >Middle</SuperButton>
                <SuperButton className={getControlButtonClassName("low")}
                             onClick={setFilter("low")}
                >Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
