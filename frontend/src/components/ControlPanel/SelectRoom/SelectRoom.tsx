import React, {Dispatch, useEffect, useState} from 'react'
import {getRootRooms} from "../../../store/room/selector";
import {IStateRoot} from "../../../store";
import {connect, ConnectedProps} from "react-redux";
import {IRoomsRoot} from "../../../store/room/types";
import ProgressCircle from "../hocs/ProgressCircle/ProgressCircle";
import {changeDataRoomsAction, changeValueRoomsAction} from "../../../store/room/actions";
import {loadDataRooms} from "../../../untils/RoomsHttpUntil";
import {getActiveHouseOfHouses} from "../../../store/house/selector";

const mapStateToProps = (state: IStateRoot) => ({
    idActiveHouse: getActiveHouseOfHouses(state),
    rooms: getRootRooms(state)
})
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    changeValue: (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeValueRoomsAction(e.target.value))
    },
    changeDates: (state: IRoomsRoot) => {
        dispatch(changeDataRoomsAction(state))
    }
})
const connector = connect(mapStateToProps, mapDispatchToProps);

type IPropsFromRedux = ConnectedProps<typeof connector>
type IProps = IPropsFromRedux & {}


const SelectHouse = React.forwardRef((props: IProps, ref) =>  {

    const [isLoading, setLoading] = useState(true)

    // loading data
    useEffect(() => {
        setLoading(true)
        loadDataRooms(props.idActiveHouse).then((state) => {
            props.changeDates(state as IRoomsRoot)
            setTimeout(() => setLoading(false), 600)
        });
    }, [props.idActiveHouse]) // обновляем комнаты при изменении дома

    return (
        <>
            {
                isLoading
                    ? <ProgressCircle isLoading={isLoading} height={19} />
                    :
                    <select onChange={props.changeValue} value={props.rooms.idActive}>
                        {Object.keys(props.rooms.rooms).map((id) => (
                            <option value={id} key={id}>{props.rooms.rooms[id].title}</option>
                        ))}
                    </select>
            }
        </>
    )
})

export default connector(SelectHouse)