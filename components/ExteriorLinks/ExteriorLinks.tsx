import React, { FunctionComponent } from 'react';
import styles from './ExteriorLinks.module.css';
import '../../fonts/stylesheet.css';
import linkedin from "../../Assets/Linkedin.svg";
import malt from "../../Assets/Malt.svg";
import github from "../../Assets/Github.svg";
type ExteriorLinksProps  = {
    color:string;
}

export const ExteriorLinks: FunctionComponent<ExteriorLinksProps> = ({color}) => {

    let colorStyle : string = color === "white" ? styles.whiteStyle : styles.blueStyle;

    return <div className={styles.infoLinks}>
        <a href="#" onClick={(e) => {e.preventDefault()}}><img className={colorStyle} src={linkedin} alt="linkedin logo"/></a>
        <a href="#" onClick={(e) => {e.preventDefault()}}><img className={colorStyle} src={malt} alt="malt logo"/></a>
        <a href="#" onClick={(e) => {e.preventDefault()}}><img className={colorStyle} src={github} alt="github logo"/></a>
    </div>;

}