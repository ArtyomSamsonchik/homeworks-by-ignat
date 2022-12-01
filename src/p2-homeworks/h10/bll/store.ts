import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store = createStore(rootReducer)

export default store

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
