import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../../common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css"

export type UserType = {
    _id: number
    name: string
    age: number
}

type ButtonType = "sortUp" | "sortDown" | "checkAge" | null

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const [activeButton, setActiveButton] = useState<ButtonType>(null)

    const mappedPeople = people.map(p => (
        <li key={p._id} className={s.item}>
            <span>{p.name} </span>
            <span>{p.age}</span>
        </li>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'SORT-BY-NAME', payload: 'up'}))
        setActiveButton("sortUp")
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: "SORT-BY-NAME", payload: "down"}))
        setActiveButton("sortDown")
    }
    const checkAge = () => {
        setPeople(homeWorkReducer(initialPeople, {type: "CHECK-AGE", payload: 18}))
        setActiveButton("checkAge")
    }

    const getButtonFinalClassName = (type: ButtonType) => {
        return `${s.control_button} ${type === activeButton ? s.active : ""}`
    }


    return (
        <div>
            <hr/>
            <h3>homeworks 8</h3>
            <div className={s.users_list}>
                <ul className={s.users_list_body}>{mappedPeople}</ul>
                <div className={s.buttons_container}>
                    <SuperButton className={getButtonFinalClassName("sortUp")}
                                 onClick={sortUp}
                    >sort up</SuperButton>
                    <SuperButton className={getButtonFinalClassName("sortDown")}
                                 onClick={sortDown}
                    >sort down</SuperButton>
                    <SuperButton className={getButtonFinalClassName("checkAge")}
                                 onClick={checkAge}
                    >check age</SuperButton>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
