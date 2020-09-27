import {
    CHANGE_DATA_ROOMS,
    CHANGE_VALUE_ROOMS,
    IRoomsActionTypes,
    IRoomsRoot,
    REMOVE_ROOM_BY_ID_OF_ROOMS
} from "./types";

export const changeValueRoomsAction = (value: string): IRoomsActionTypes => ({
    type: CHANGE_VALUE_ROOMS,
    value
})
export const changeDataRoomsAction = (state: IRoomsRoot): IRoomsActionTypes => ({
    type: CHANGE_DATA_ROOMS,
    state

})
export const removeRoomsAction = (id: string): IRoomsActionTypes => ({
    type: REMOVE_ROOM_BY_ID_OF_ROOMS,
    id
})