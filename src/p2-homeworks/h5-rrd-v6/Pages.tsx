import React from 'react'
import {Route, Routes} from "react-router-dom"
import Error404 from "./pages/Error404"
import PreJunior from "./pages/PreJunior"
import Junior from "./pages/Junior"
import JuniorPlus from "./pages/Junior_plus"

type LinksType = "/pre-junior" | "/junior" | "/junior-plus"
type PathType = {
    [path: string]: LinksType
}

export const PATH: PathType = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Pages() {
    return (
        <Routes>
            <Route path={"/"} element={<PreJunior/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={"/*"} element={<Error404/>}/>
        </Routes>
    )
}

export default Pages
