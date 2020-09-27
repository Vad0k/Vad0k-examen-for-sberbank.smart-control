import React from "react"
import styles from "./BtnCircle.module.scss"

type IProps = {
    id: string
    isActive: boolean
    charIcon: string
    callback: (id: string, e: React.MouseEvent<HTMLAnchorElement>) => void
    attributes?: {[key: string]: string | number | boolean}
}

const BtnCircle = ({id, isActive, charIcon, callback, attributes}: IProps) => {
    return (
        <a href="#"
            className={isActive ? [styles.BtnCircle, styles.active].join(' ') : styles.BtnCircle}
            onClick={e => {
            e.preventDefault();
            callback(id, e)
        }}
           {...attributes}
        >
            {charIcon}
        </a>
    )
}

export default BtnCircle