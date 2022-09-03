import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {users, addUserCallback}
) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (name: string) => {
            setName(name)
            setError("")
    }

    const onEnterHandler = () => {
        addUser()
    }

    const addUser = () => {
        const trimmedName = name.trim()

        if (!trimmedName) {
            setError("Имя пользователя не может быть пустым! Повторите ввод.")
            setName("")
            return
        }

        addUserCallback(trimmedName)
        setName("")
        setTimeout(() => alert(`Hello  ${trimmedName}!`), 0)
    }

    const totalUsers = users.length

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnterHandler={onEnterHandler}
        />
    )
}

export default GreetingContainer
