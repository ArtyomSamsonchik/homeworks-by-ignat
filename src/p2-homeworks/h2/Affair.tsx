import React from 'react'
import {AffairType} from "./HW2"
import s from "./Affairs.module.css"
import SuperButton from "../../common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const affairClassName = `${s.affair} ${s[props.affair.priority]}`
    const finalButtonClassName = `${s.button} ${s.delete_button}`

    return (
        <div className={affairClassName}>
            <div className={s.affair_text}>{props.affair.name}</div>
            <small className={s.priority}>{props.affair.priority} priority</small>
            <SuperButton className={finalButtonClassName}
                onClick={deleteCallback}
            >X</SuperButton>
        </div>
    )
}

export default Affair
