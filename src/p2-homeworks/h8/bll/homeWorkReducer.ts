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
            return [...state].sort((a, b) => {
                if (action.payload === "up") {
                    return a.name > b.name ? 1 : -1
                }
                else {
                    return b.name > a.name ? 1 : -1
                }
            })
        }

        case 'CHECK-AGE': {
            return state.filter(user => user.age >=18)
        }

        default: return state
    }
}