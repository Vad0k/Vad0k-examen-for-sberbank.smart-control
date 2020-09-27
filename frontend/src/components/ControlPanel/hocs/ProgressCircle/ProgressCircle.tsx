import React from 'react'
import icon from './loading.gif'

type IProps = {
    isLoading: boolean
    height: number
}

const ProgressCircle = (props: IProps) => (
    <>
    {props.isLoading && (
       <img
           src={icon}
           alt={"loading"}
           height={props.height || 19}
           style={{margin: '0 auto', display: 'block'}}
       />
    )}
    </>
)

export default ProgressCircle;
