import React, {FunctionComponent, useContext} from 'react';
import style from './DownloadCVButton.module.css';
import '../../fonts/stylesheet.css';
import {locales, LocalisationContext} from "../../contexts/Locale";

type DownloadCVButtonProps = {
    color: string;
}

export const DownloadCVButton: FunctionComponent<DownloadCVButtonProps> = ({color}) => {

    const localisation = useContext(LocalisationContext);
    let content;

    let colorStyle : string = color === "white" ? style.whiteCVButton : style.blueCVButton;
    const classes = `${colorStyle} ${style.cvButton}`;
    console.log(color +" "+colorStyle);

    if(localisation.locale === locales.francais) {
        content = "Télécharger CV";
    } else {
        content = "Download CV";
    }

    return <a href="#" onClick={(e) => {e.preventDefault();window.scrollTo(0, 0);}} className={classes}><span>{content}</span></a>;

}