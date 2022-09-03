import React, {useState} from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {PATH} from "./HW5";

function Header() {
    return (
        <div className={`${s.wrapper} ${s.blur_filter}`}>
            <div className={s.container}>
                <header className={s.header}>
                    <NavLink className={s.link} to={"/pre-junior"}>pre-junior</NavLink>
                    <NavLink className={s.link} to={PATH.JUNIOR}>junior</NavLink>
                    <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
                </header>
                <div className={s.arrow}>
                    <div className={s.left_side}></div>
                    <div className={s.right_side}></div>
                </div>
            </div>
        </div>
    )
}

export default Header
