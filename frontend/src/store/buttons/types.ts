export const CHANGE_VALUE_BUTTON = 'CHANGE_VALUE_BUTTON'
export const CHANGE_DATA_BUTTONS = 'CHANGE_DATA_BUTTONS'

export interface IButtonsRoot {
    buttons: IButtonsList
}
export interface IButtonsList {
    [key: string]: {
        title: string,
        value: string
    }
}

interface changeValueButtonAction {
    type: typeof CHANGE_VALUE_BUTTON
    idHouse: string
    idRoom: string
    idButton: string
    value: string
}
interface changeDataButtonAction {
    type: typeof CHANGE_DATA_BUTTONS
    state: IButtonsRoot
}

export type IButtonActionTypes = changeValueButtonAction | changeDataButtonAction