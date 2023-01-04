import React, {useState} from 'react';
import Request from "./Request";
import s from "./HW13.module.css";

const Hw13 = () => {
    const [message, setMessage] = useState("Nothing to display yet")

    return (
        <div>
            <p>Set request's success value by clicking on checkbox:</p>
            <Request  onResponse={setMessage}/>
            <p className={s.message}>{message}</p>
        </div>
    )
}

export default Hw13