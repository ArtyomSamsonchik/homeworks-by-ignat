import React from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3"
import Button from "./common/Button/Button"
import Input from "./common/InputText/InputText"

type GreetingPropsType = {
    users: Array<UserType>
    name: string
    setNameCallback: (name: string) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnterHandler: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        users,
        name,
        setNameCallback,
        addUser,
        error,
        totalUsers,
        onEnterHandler
    }
) => {
    const usersList = users.map(user => <li key={user._id}>{user.name}</li>)

    return (
        <div>
            <div className={s.input_container}>
                <Input value={name}
                       placeholder={"Enter username here"}
                       error={error}
                       onChangeText={setNameCallback}
                       onEnter={onEnterHandler}
                />
                <Button disabled={!!error}
                        onClick={addUser}
                >add</Button>
                <div className={s.users_count}>{totalUsers}</div>
            </div>
            <ol className={s.users_list}>{usersList}</ol>
        </div>
    )
}

export default Greeting
