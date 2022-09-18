import {UserType} from "../HW8";

type SortAT = {
    type: "SORT-BY-NAME"
    payload: "up" | "down"
}

type CheckAT = {
    type: "CHECK-AGE"
    payload: number
}

type ActionsType = SortAT | CheckAT

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'SORT-BY-NAME': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === "up" ? newState : newState.reverse()
        }

        case 'CHECK-AGE': {
            return state.filter(user => user.age >= action.payload)
        }

        default:
            return state
    }
}