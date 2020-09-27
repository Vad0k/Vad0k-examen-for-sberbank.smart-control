import {createSelector} from 'reselect'
import {IStateRoot} from "../index";
import {IRoomsRoot} from "./types";

export const getRootRooms = createSelector([
    (state: IStateRoot) => state.rooms,
],
    (houses) => houses
)

export const getListRoom = createSelector([
        getRootRooms
],

        (rooms: IRoomsRoot) => rooms.rooms
)

export const getActiveRoomOfRooms = createSelector([
    getRootRooms
],
    (rooms: IRoomsRoot) => rooms.idActive
)
