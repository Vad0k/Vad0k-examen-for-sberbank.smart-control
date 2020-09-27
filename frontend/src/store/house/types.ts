export const CHANGE_VALUE_HOUSE = 'CHANGE_VALUE_HOUSE'
export const CHANGE_DATA_HOUSE = 'CHANGE_DATA_HOUSE'

export interface IHousesRoot {
    idActive: string
    houses: IHousesList
}
export interface IHousesList {
    [key: string]: {
        title: string,
        sort: number
    }
}


interface changeValueHouseAction {
    type: typeof CHANGE_VALUE_HOUSE
    value: string
}
interface changeDataHouseAction {
    type: typeof CHANGE_DATA_HOUSE
    state: IHousesRoot
}

export type IHouseActionTypes = changeValueHouseAction | changeDataHouseAction