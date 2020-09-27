import {CHANGE_DATA_BUTTONS, CHANGE_VALUE_BUTTON, IButtonActionTypes, IButtonsRoot} from "./types";


const initState:IButtonsRoot = {
    buttons: {
        //"1": {"title": "test house", value:"0"}
    }
}

export const buttonReducer = (state = initState, action: IButtonActionTypes) => {
    switch (action.type) {
        case CHANGE_VALUE_BUTTON: {
            return {
                ...state,
                [action.idButton]: {
                    ...[action.idButton],
                    value: action.value
                }
            }
        }
        case CHANGE_DATA_BUTTONS: {
            return {
                ...state,
                ...action.state
            }
        }
    }

    return state
}