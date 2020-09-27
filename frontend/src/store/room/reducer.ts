import {
    CHANGE_DATA_ROOMS,
    CHANGE_VALUE_ROOMS,
    IRoomsActionTypes,
    IRoomsRoot,
    REMOVE_ROOM_BY_ID_OF_ROOMS
} from "./types";

const initState:IRoomsRoot = {
    idActive: "1",

    rooms: {
        //"1": {"title": "test house", sort: 0}
    }
}

export const roomsReducer = (state = initState, action: IRoomsActionTypes) => {
    switch (action.type) {
        case CHANGE_VALUE_ROOMS: {
            return {
                ...state,
                idActive: action.value
            }
        }
        case CHANGE_DATA_ROOMS: {
            return {
                ...state,
                ...action.state
            }
        }
        case REMOVE_ROOM_BY_ID_OF_ROOMS: {
            return {
                ...state,
                rooms: Object.keys(state.rooms)
                    .filter(id => action.id !== id)
                    .reduce((obj, id) => ({...obj, [id]: state.rooms[id]}), {})
            }
        }
    }

    return state
}