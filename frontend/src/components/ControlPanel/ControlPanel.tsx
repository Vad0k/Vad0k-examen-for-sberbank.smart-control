import React, {useRef, useState} from "react"
import styles from "./ControlPanel.module.scss"
import BtnCircle from "./hocs/BtnCircle/BtnCircle";
import SelectHouse from "./SelectHouse/SelectHouse";
import SelectRoom from "./SelectRoom/SelectRoom";
import ListButtons from "./ListButtons/ListButtons";


const ControlPanel = () => (
    <div className={styles.ControlPanel}>

        <div className={styles.title}>Выбрать дом</div>
        <SelectHouse />

        <div className={styles.title}>Выбрать комнату</div>
        <SelectRoom />

        <div className={styles.title}>Кнопки</div>
        <ListButtons />
    </div>
)

export default ControlPanel;
