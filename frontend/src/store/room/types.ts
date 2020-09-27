export const CHANGE_VALUE_ROOMS = 'CHANGE_VALUE_ROOMS'
export const CHANGE_DATA_ROOMS = 'CHANGE_DATA_ROOMS'
export const REMOVE_ROOM_BY_ID_OF_ROOMS = 'REMOVE_ROOM_BY_ID_OF_ROOMS'

export interface IRoomsRoot {
    idActive: string
    rooms: IRoomsList
}
export interface IRoomsList {
    [key: string]: {
        title: string,
        sort: number
    }
}


interface changeValueRoomAction {
    type: typeof CHANGE_VALUE_ROOMS
    value: string
}
interface changeDataRoomAction {
    type: typeof CHANGE_DATA_ROOMS
    state: IRoomsRoot
}
interface changeRemoveRoomAction {
    type: typeof REMOVE_ROOM_BY_ID_OF_ROOMS
    id: string
}

export type IRoomsActionTypes = changeValueRoomAction | changeDataRoomAction | changeRemoveRoomAction