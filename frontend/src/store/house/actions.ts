import {CHANGE_DATA_HOUSE, CHANGE_VALUE_HOUSE, IHouseActionTypes, IHousesRoot} from "./types";

export const changeValueHouseAction = (value: string): IHouseActionTypes => ({
    type: CHANGE_VALUE_HOUSE,
    value
})
export const changeDataHousesAction = (state: IHousesRoot): IHouseActionTypes => ({
    type: CHANGE_DATA_HOUSE,
    state
})

