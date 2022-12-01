import React from 'react'
import SuperButton from '../../common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import {AppStateType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const loading = useSelector((state: AppStateType) => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 10</h3>
            {loading
                ? (
                    <LoadingSpinner/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
