import React, { FunctionComponent } from 'react';
import styles from './ExteriorLinks.module.css';
type ExteriorLinksProps  = {
    color:string;
}

export const ExteriorLinks: FunctionComponent<ExteriorLinksProps> = ({color}) => {

    let colorStyle : string = color === "white" ? styles.whiteStyle : styles.blueStyle;

    return <div className={styles.infoLinks}>
        <a href="components/globalComponents/ExteriorLinks/ExteriorLinks#" onClick={(e) => {e.preventDefault()}}><img className={colorStyle} src="/Linkedin.svg" alt="linkedin logo"/></a>
        <a href="components/globalComponents/ExteriorLinks/ExteriorLinks#" onClick={(e) => {e.preventDefault()}}><img className={colorStyle} src="/Malt.svg" alt="malt logo"/></a>
        <a href="components/globalComponents/ExteriorLinks/ExteriorLinks#" onClick={(e) => {e.preventDefault()}}><img className={colorStyle} src="/Github.svg" alt="github logo"/></a>
    </div>;

}