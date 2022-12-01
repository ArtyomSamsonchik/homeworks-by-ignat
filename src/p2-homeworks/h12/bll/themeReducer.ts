type changeThemeAT = ReturnType<typeof changeThemeAC>

const initState = {
    available: ["light", "dark-orange", "dark-hotpink", "dark-cyan", "dark-dimmed"],
    selected: "dark-cyan"
}

export const themeReducer = (state = initState, action: changeThemeAT): typeof initState=> {
    switch (action.type) {
        case "CHANGE-APP-THEME":
            return {...state, selected: action.themeName}
        default:
            return state
    }
}

export const changeThemeAC = (themeName: string) => ({
    type: "CHANGE-APP-THEME",
    themeName: themeName
}) as const