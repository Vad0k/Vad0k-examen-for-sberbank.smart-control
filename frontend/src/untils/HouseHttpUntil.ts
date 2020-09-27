import axios from "axios";
import {throws} from "assert";
import {IHousesRoot} from "../store/house/types";

const path = `${process.env.REACT_APP_BASE_URL}/api/houses`

export const loadDataHouses = async () => {
    return await axios.get(`${path}`).then(data => {
        const json = data.data;
        if (json && json.error) {
            return throws(() => {},'Дома не загрузились' + json.error);
        }
        return json as IHousesRoot
    })
}

export const updateDataHouse = async (id: string) => {
    return await axios.patch(`${path}`, {id: id}).then(data => {
        if (data.data.error) return throws(() => {}, `Данные не загрузились`)
        return data.data
    })
}

export const removeDataHouse = async (id: string) => {
    return await axios.delete(`${path}/${id}`).then(data => {
        if (data.data.error) return throws(() => {}, `Данные не загрузились`)
        return data.data
    })
}