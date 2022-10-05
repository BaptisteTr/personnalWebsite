import { useContext } from "react";
import React from "react";
import {LocalisationContext , locales } from "../../../contexts/Locale";
import styles from './InfoCard.module.css';
import {ExteriorLinks} from "../../globalComponents/ExteriorLinks/ExteriorLinks";

import {DownloadCVButton} from "../../globalComponents/DownloadCVButton/DownloadCVButton";
import Image from "next/image";

interface IProps {
}

interface IState {
}

const Content = () =>
{
    const localisation = useContext(LocalisationContext);
    let frcontent = <div className={styles.contentText}>
            <p className={styles["trade"]}>Ingénieur logiciel</p>
            <p className={styles["location"]}>Strasbourg, France</p>
            <a className={styles["mail"]} href="mailto:contact@baptistetrautmann.com">contact@baptistetrautmann.com</a>
        </div>;

    let engcontent = <div className={styles.contentText}>
        <p>Software engineer</p>
        <p>Strasbourg, France</p>
        <a href="mailto:contact@baptistetrautmann.com">contact@baptistetrautmann.com</a>
    </div>
    if(localisation.locale === locales.francais) {
        return frcontent;
    } else {
        return engcontent;
    }

}

class InfoCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return(
            <div className={styles.infocard}>
                <Image className={styles.portrait} src="/Portrait.png" alt="portrait image" height="150px" width="150px"/>
                <h1 className={styles.text}>Baptiste TRAUTMANN</h1>
                <Content/>
                <ExteriorLinks color="white"/>
                <DownloadCVButton color="white"/>
            </div>
        );
    }

}

InfoCard.contextType = LocalisationContext;

export default InfoCard;