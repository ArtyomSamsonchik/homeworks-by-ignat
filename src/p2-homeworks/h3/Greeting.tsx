import React from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3"
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";

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
                <SuperInputText value={name}
                                placeholder={"Enter username here"}
                                error={error}
                                onChangeText={setNameCallback}
                                onEnter={onEnterHandler}
                />
                <SuperButton disabled={!!error}
                             onClick={addUser}
                >add
                </SuperButton>
                <div className={s.users_count}>{totalUsers}</div>
            </div>
            <ol className={s.users_list}>{usersList}</ol>
        </div>
    )
}

export default Greeting
