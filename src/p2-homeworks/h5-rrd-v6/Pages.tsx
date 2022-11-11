import React from 'react'
import {Route, Routes} from "react-router-dom"
import Error404 from "./pages/Error404"
import PreJunior from "./pages/PreJunior"
import Junior from "./pages/Junior"
import JuniorPlus from "./pages/Junior_plus"
import {PATH} from "./HW5"

function Pages() {
    return (
        <Routes>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={"/"} element={<PreJunior/>}/>
            <Route path={"/*"} element={<Error404/>}/>
        </Routes>
    )
}

export default Pages
