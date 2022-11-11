type loadingAT = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingAT): typeof initState => {
    switch (action.type) {
        case "SET-IS-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: "SET-IS-LOADING",
    isLoading
}) as const