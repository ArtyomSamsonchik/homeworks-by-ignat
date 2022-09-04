import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function HW5() {
    return (
        <>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </>
    )
}

export default HW5
