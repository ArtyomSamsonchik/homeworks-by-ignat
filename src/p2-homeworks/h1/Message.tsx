import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.user_image}>
                <img src={props.avatar} alt="user"/>
            </div>
            <div className={s.message_body}>
                <div className={s.user_name}>{props.name}</div>
                <div className={s.message_text}>{props.message}</div>
                <div className={s.message_time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
