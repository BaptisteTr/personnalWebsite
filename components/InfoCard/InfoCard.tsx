import { useContext } from "react";
import React from "react";
import {LocalisationContext , locales } from "../../contexts/Locale";
import styles from './InfoCard.module.css';
import portrait from "../../Assets/Portrait.png";
import {ExteriorLinks} from "../ExteriorLinks/ExteriorLinks";

import '../../fonts/stylesheet.css';
import {DownloadCVButton} from "../DownloadCVButton/DownloadCVButton";

interface IProps {
}

interface IState {
}

const Content = () =>
{
    const localisation = useContext(LocalisationContext);
    let frcontent = <p className={styles.text}>
            Ingénieur logiciel<br/>
            Strasbourg, France<br/><br/>
            contact@baptistetrautmann.com
        </p>;

    let engcontent = <p className={styles.text}>
        Software engineer<br/>
        Strasbourg, France<br/><br/>
        contact@baptistetrautmann.com
    </p>
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
                <img className={styles.error} src={portrait} alt="portrait image"/>
                <h1 className={styles.text}>Baptiste Trautmann</h1>
                <Content/>
                <ExteriorLinks color="white"/>
                <DownloadCVButton color="white"/>
            </div>
        );
    }

}

InfoCard.contextType = LocalisationContext;

export default InfoCard;