import {createSelector} from 'reselect'
import {IStateRoot} from "../index";
import {IHousesList, IHousesRoot} from "./types";

export const getRootHouse = createSelector([
    (state: IStateRoot) => state.houses,
],
    (houses) => houses
)

export const getListHouses = createSelector([
    getRootHouse
],
        (houses: IHousesRoot) => houses.houses
)

export const getActiveHouseOfHouses = createSelector([
    getRootHouse
],
    (houses: IHousesRoot) => houses.idActive
)
