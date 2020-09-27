import React, {Dispatch, useEffect, useState} from 'react'
import {getActiveRoomOfRooms} from "../../../store/room/selector";
import {IStateRoot} from "../../../store";
import {connect, ConnectedProps} from "react-redux";
import ProgressCircle from "../hocs/ProgressCircle/ProgressCircle";
import {getActiveHouseOfHouses} from "../../../store/house/selector";
import {changeDataButtonsAction, changeValueButtonAction} from "../../../store/buttons/actions";
import BtnCircle from "../hocs/BtnCircle/BtnCircle";
import {getListButtons} from "../../../store/buttons/selector";
import {IButtonsRoot} from "../../../store/buttons/types";
import {loadDataButtons} from "../../../untils/ButtonsHttpUntil";

const mapStateToProps = (state: IStateRoot) => ({
    idActiveHouse: getActiveHouseOfHouses(state),
    idActiveRoom: getActiveRoomOfRooms(state),
    buttons: getListButtons(state)
})
const mapDispatchToProps = (dispatch: Dispatch<any>, props: any) => ({
    changeValue: (idHouse: string, idRoom: string, id: string, e: any) => {
        dispatch(changeValueButtonAction(idHouse, idRoom, id, (+e.target.value + 1).toString()))
    },
    changeDates: (state: IButtonsRoot) => {
        dispatch(changeDataButtonsAction(state))
    }
})
const connector = connect(mapStateToProps, mapDispatchToProps);

type IPropsFromRedux = ConnectedProps<typeof connector>
type IProps = IPropsFromRedux & {}


const ButtonList = (props: IProps) => {

    const [isLoading, setLoading] = useState(true)

    // loading data
    useEffect(() => {
        setLoading(true)
        loadDataButtons(props.idActiveHouse, props.idActiveRoom).then((state) => {
            props.changeDates(state as IButtonsRoot)
            setTimeout(() => setLoading(false), 600)
        });
    }, [
        props.idActiveHouse,
        props.idActiveRoom
    ]) // обновляем комнаты при изменении дома или комнаты

    return (
        <>
            {
                isLoading
                    ? <ProgressCircle isLoading={isLoading} height={19} />
                    :
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {Object.keys(props.buttons).map(id => (
                            <BtnCircle
                                key={id}
                                id={id}
                                charIcon={props.buttons[id].title}
                                isActive={false}
                                callback={(id, e) => {
                                    alert('Не успел сделать')
                                    props.changeValue(
                                        props.idActiveHouse,
                                        props.idActiveRoom,
                                        id,
                                        e
                                    )
                                }}
                            />
                        ))}
                    </div>
            }
        </>
    )
}

export default connector(ButtonList)