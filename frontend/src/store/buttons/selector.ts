import {createSelector} from 'reselect'
import {IStateRoot} from "../index";
import {IButtonsRoot} from "./types";

export const getRootButtons = createSelector([
    (state: IStateRoot) => state.buttons,
],
    (houses) => houses
)

export const getListButtons = createSelector([
    getRootButtons
],
        (buttons: IButtonsRoot) => buttons.buttons
)