import React from 'react'
import s from "./Error404.module.css"
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton"
import {NavLink} from "react-router-dom"
import {PATH} from "../HW5"

function Error404() {
    return (
        <div className={s.error_container}>
            <h1 className={s.error_code}>404</h1>
            <div className={s.message}>Page not found!</div>
            <div className={s.kitten}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <SuperButton>
                <NavLink to={PATH.PRE_JUNIOR}>Go to Home Page</NavLink>
            </SuperButton>
        </div>
    )
}

export default Error404
