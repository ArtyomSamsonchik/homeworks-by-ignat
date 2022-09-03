import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import Button from "./common/Button"

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

    const checkButtonIsActive = (buttonFilterValue: FilterType) => {
        return buttonFilterValue === props.filter
    }

    return (
        <div className={s.affairs_list}>
            <div className={s.affairs_body}>{mappedAffairs}</div>

            <div className={s.control_buttons_container}>
                <Button className={s.control_button}
                        active={checkButtonIsActive("all")}
                        onClick={setFilter("all")}
                >All</Button>
                <Button className={s.control_button}
                        active={checkButtonIsActive("high")}
                        onClick={setFilter("high")}
                >High</Button>
                <Button className={s.control_button}
                        active={checkButtonIsActive("middle")}
                        onClick={setFilter("middle")}
                >Middle</Button>
                <Button className={s.control_button}
                        active={checkButtonIsActive("low")}
                        onClick={setFilter("low")}
                >Low</Button>
            </div>
        </div>
    )
}

export default Affairs
