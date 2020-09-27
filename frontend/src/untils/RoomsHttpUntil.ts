import axios from "axios";
import {throws} from "assert";
import {IRoomsRoot} from "../store/room/types";

const path = `${process.env.REACT_APP_BASE_URL}/api/rooms`

export const loadDataRooms = async (idSelectedHouse: string) => {
    return await axios.get(`${path}/${idSelectedHouse}`).then(data => {
        const json = data.data;
        if (json && json.error) return throws(() => {}, 'Комнаты не загрузились' + json.error);
        return json as IRoomsRoot
    })
}