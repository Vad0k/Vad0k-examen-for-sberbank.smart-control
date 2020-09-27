import React, {Dispatch, useEffect, useState} from 'react'
import {getRootHouse} from "../../../store/house/selector";
import {IStateRoot} from "../../../store";
import {changeDataHousesAction, changeValueHouseAction} from "../../../store/house/actions";
import {connect, ConnectedProps} from "react-redux";
import {IHousesRoot} from "../../../store/house/types";
import ProgressCircle from "../hocs/ProgressCircle/ProgressCircle";
import {loadDataHouses} from "../../../untils/HouseHttpUntil";

const mapStateToProps = (state: IStateRoot) => ({
    houses: getRootHouse(state)
})
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    changeValue: (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeValueHouseAction(e.target.value))
    },
    changeDates: (state: IHousesRoot) => {
        dispatch(changeDataHousesAction(state))
    }
})
const connector = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true });

type IPropsFromRedux = ConnectedProps<typeof connector>
type IProps = IPropsFromRedux & {}


const SelectHouse = React.forwardRef((props: IProps, ref) =>  {

    const [isLoading, setLoading] = useState(true)

    // loading data
    useEffect(() => {
        setLoading(true)
        loadDataHouses().then((stateHouse) => {
            props.changeDates(stateHouse as IHousesRoot)
            setTimeout(() => setLoading(false), 600)
        });
    }, [])

    return (
        <>
            {
                isLoading
                ? <ProgressCircle isLoading={isLoading} height={19} />
                :
                <select onChange={props.changeValue} value={props.houses.idActive}>
                    {Object.keys(props.houses.houses).map((id) => (
                        <option value={id} key={id}>{props.houses.houses[id].title}</option>
                    ))}
                </select>
            }
        </>
    )
})

export default connector(SelectHouse)