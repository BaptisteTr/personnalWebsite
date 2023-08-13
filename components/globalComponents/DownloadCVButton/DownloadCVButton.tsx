import React, {FunctionComponent, useContext} from 'react';
import style from './DownloadCVButton.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

type DownloadCVButtonProps = {
    color: string;
}

export const DownloadCVButton: FunctionComponent<DownloadCVButtonProps> = ({color}) => {

    const localisation = useContext(LocalisationContext);
    let content;

    let colorStyle : string;
    switch (color) {
        case "green" :
            colorStyle = style.greenCVButton
            break;
        case "blue" :
            colorStyle = style.blueCVButton;
            break;
        case "greenBordered" :
            colorStyle = style.greenCVButtonBordered;
            break;
        default :
            colorStyle = style.whiteCVButton;
            break;
    }
    const classes = `${colorStyle} ${style.cvButton}`;

    if(localisation.locale === locales.francais) {
        content = "Télécharger CV";
    } else {
        content = "Download CV";
    }

    return <a href="/CV.pdf" className={classes}><span>{content}</span></a>;

}