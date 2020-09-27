import axios from "axios";
import {throws} from "assert";
import {IButtonsRoot} from "../store/buttons/types";

const path = `${process.env.REACT_APP_BASE_URL}/api/buttons`

export const loadDataButtons = async (idHouse: string, idRoom: string) => {
    return await axios.get(`${path}/${idHouse}/${idRoom}`).then(data => {
        const json = data.data;
        if (json && json.error) {
            return throws(() => {},'Дома не загрузились' + json.error);
        }
        return json as IButtonsRoot
    })
}

export const updateDataValueButton = async (idHouse: string, idRoom: string, idButton: string, value: string) => {
    return await axios.patch(`${path}`, {
        idHouse,
        idRoom,
        idButton,
        value
    }).then(data => {
        const json = data.data;
        if (json && json.error) {
            return throws(() => {},'Дома не загрузились' + json.error);
        }
        return json as IButtonsRoot
    })
}