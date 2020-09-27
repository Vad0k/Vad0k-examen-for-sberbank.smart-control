import {CHANGE_DATA_BUTTONS, CHANGE_VALUE_BUTTON, IButtonActionTypes, IButtonsRoot} from "./types";

export const changeValueButtonAction = (idHouse: string, idRoom: string, idButton: string, value: string): IButtonActionTypes => ({
    type: CHANGE_VALUE_BUTTON,
    idHouse,
    idRoom,
    idButton,
    value
})
export const changeDataButtonsAction = (state: IButtonsRoot): IButtonActionTypes => ({
    type: CHANGE_DATA_BUTTONS,
    state
})

