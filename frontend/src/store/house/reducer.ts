import {CHANGE_DATA_HOUSE, CHANGE_VALUE_HOUSE, IHouseActionTypes, IHousesRoot} from "./types";

const initState:IHousesRoot = {
    idActive: "1",
    houses: {
        //"1": {"title": "test house", sort: 0}
    }
}

export const houseReducer = (state = initState, action: IHouseActionTypes) => {
    switch (action.type) {
        case CHANGE_VALUE_HOUSE: {
            return {
                ...state,
                idActive: action.value
            }
        }
        case CHANGE_DATA_HOUSE: {
            console.log('reducer', state, action.state)
            return {
                ...state,
                ...action.state
            }
        }
    }

    return state
}