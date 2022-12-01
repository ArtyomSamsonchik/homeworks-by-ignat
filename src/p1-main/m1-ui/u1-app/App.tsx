import React, {useEffect} from 'react';
import s from './App.module.css';
import HW5 from "../../../p2-homeworks/h5-rrd-v6/HW5"
import {useAppSelector} from "../../../p2-homeworks/h10/bll/store";

function App() {
    const theme = useAppSelector(state => state.theme.selected)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    return (
        <div className={s.App}>
            <h2>react homeworks:</h2>
            <HW5/>
        </div>
    )
}

export default App
