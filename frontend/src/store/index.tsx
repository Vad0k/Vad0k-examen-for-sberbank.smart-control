import {combineReducers} from 'redux'
import {houseReducer} from "./house/reducer";
import {roomsReducer} from "./room/reducer";
import {buttonReducer} from "./buttons/reducer";

export type IStateRoot = ReturnType<typeof rootReducers>
export const rootReducers = combineReducers({
    houses: houseReducer,
    rooms: roomsReducer,
    buttons: buttonReducer,
})