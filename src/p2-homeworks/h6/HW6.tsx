import React, {useState} from 'react'
import s from "./HW6.module.css"
import SuperEditableSpan from '../../common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../../common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<typeof value>('editable-span-value', value)
    }
    const restore = () => {
        const newValue = restoreState<typeof value>('editable-span-value', "default text")
        setValue(newValue)
    }

    return (
        <div>
            <h3>homeworks 6</h3>
            <SuperEditableSpan
                value={value}
                onChangeText={setValue}
                spanProps={{children: value ? undefined : 'enter text...',}}
            />
            <div className={s.buttons_container}>
                <SuperButton className={s.button} onClick={save}>save</SuperButton>
                <SuperButton className={s.button} onClick={restore}>restore</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
