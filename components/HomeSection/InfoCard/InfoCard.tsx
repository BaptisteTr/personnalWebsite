import React from "react";
import {LocalisationContext , locales } from "../../../contexts/Locale";
import styles from './InfoCard.module.css';

import Image from "next/image";
import {DownloadCVButton} from "../../globalComponents/DownloadCVButton/DownloadCVButton";

interface IProps {
}

interface IState {
}

const Content = () =>
{

    return <div className={styles.contentText}>
        <p className={styles.text}>Strasbourg, France</p>
        <a className={styles.email} href="mailto:contact@baptistetrautmann.com">contact@baptistetrautmann.com</a>
        <DownloadCVButton color={"green"} />
    </div>

}

class InfoCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return(
            <div className={styles.infocard}>
                <div className={styles.infoLeftPane}>
                    <Image className={styles.portrait} src={"/logo-color.svg"} alt="portrait image" height="100px" width="100px"/>
                </div>
                <div className={styles.infoRightPane}>
                    <Content/>
                </div>
            </div>
        );
    }

}

InfoCard.contextType = LocalisationContext;

export default InfoCard;