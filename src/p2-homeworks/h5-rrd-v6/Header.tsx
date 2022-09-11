import React, {useEffect, useState} from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {PATH} from "./HW5";

function Header() {
    const linkFromStorage = sessionStorage.getItem("activeLink")
    const initLink = linkFromStorage
        ? JSON.parse(linkFromStorage)
        : PATH.PRE_JUNIOR

    const [activeLink, setActiveLink] = useState(initLink)

    useEffect(() => {
        sessionStorage.setItem("activeLink", JSON.stringify(activeLink))
    }, [activeLink])

    const setActiveLinkHandler = (newLink: string) => {
        return () => setActiveLink(newLink)
    }

    const getLinkClassName = (linkName: string) => {
        return `${s.link} ${linkName === activeLink ? s.active : ""}`
    }

    return (
        <div className={`${s.wrapper} ${s.blur_filter}`}>
            <div className={s.container}>
                <header className={s.header}>
                    <NavLink className={getLinkClassName(PATH.PRE_JUNIOR)}
                             to={"/pre-junior"}
                             onClick={setActiveLinkHandler(PATH.PRE_JUNIOR)}
                    >pre-junior
                    </NavLink>
                    <NavLink className={getLinkClassName(PATH.JUNIOR)}
                             to={PATH.JUNIOR}
                             onClick={setActiveLinkHandler(PATH.JUNIOR)}
                    >junior
                    </NavLink>
                    <NavLink className={getLinkClassName(PATH.JUNIOR_PLUS)}
                             to={PATH.JUNIOR_PLUS}
                             onClick={setActiveLinkHandler(PATH.JUNIOR_PLUS)}
                    >junior+
                    </NavLink>
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
