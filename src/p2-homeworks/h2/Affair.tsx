import React from 'react'
import {AffairType} from "./HW2"
import s from "./Affairs.module.css"
import Button from "./common/Button"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const affairClassName = `${s.affair} ${s[props.affair.priority]}`

    return (
        <div className={affairClassName}>
            <div className={s.affair_text}>{props.affair.name}</div>
            <small className={s.priority}>{props.affair.priority} priority</small>
            <Button className={s.delete_button}
                    onClick={deleteCallback}
            >X</Button>
        </div>
    )
}

export default Affair
