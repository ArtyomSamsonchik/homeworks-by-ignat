export function saveState<T>(key: string, state: T) {
    localStorage.setItem(key, JSON.stringify(state))
}

export function restoreState<T>(key: string, defaultState: T) {

    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}

// ---------------------------------------------------------------------------------------------------------------
// пример использования:

// type StateType = {
//     x: string
//     y: number
// }
//
// saveState<StateType>('test', {x: "Hello", y: 1})
//
// const state: StateType = restoreState<StateType>('test', {x: "", y: 0})
// console.log(state)