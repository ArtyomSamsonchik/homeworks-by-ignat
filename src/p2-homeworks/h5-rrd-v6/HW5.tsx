import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";



function HW5() {
    return (
        <>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*todo разблочить перед деплоем в гит. Закоментил, т.к. с этим тегом не работает localhost:3000*/}
            {/*todo подумать, куда переместить объект PATH*/}
            {/*todo подсвечивать выбранную ссылку*/}
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </>
    )
}

export default HW5
