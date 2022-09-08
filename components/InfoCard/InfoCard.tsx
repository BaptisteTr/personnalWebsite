import { useContext } from "react";
import React from "react";
import {LocalisationContext , locales } from "../../contexts/Locale";
import styles from './InfoCard.module.css';
import portrait from "../../Assets/Portrait.png";
import linkedin from "../../Assets/Linkedin.svg";
import malt from "../../Assets/Malt.svg";
import github from "../../Assets/Github.svg";

import '../../fonts/stylesheet.css';

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


const DownloadButton = () =>
{
    const localisation = useContext(LocalisationContext);
    let content

    if(localisation.locale === locales.francais) {
        content = <p>Télécharger CV</p>;
    } else {
        content = <p>Download CV</p>;
    }

    return <button>{content}</button>;

}

class InfoCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return(
            <div className={styles.infocard} >
                <img className={styles.error} src={portrait} alt="portrait image"/>
                <h1 className={styles.text}>Baptiste Trautmann</h1>
                <Content/>
                <div className={styles.infoLinks}>
                    <img src={linkedin} alt="linkedin logo"/>
                    <img src={malt} alt="malt logo"/>
                    <img src={github} alt="github logo"/>
                </div>
                <DownloadButton/>
            </div>
        );
    }

}

InfoCard.contextType = LocalisationContext;

export default InfoCard;