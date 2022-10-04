import React, {FunctionComponent, useContext} from 'react';
import style from './DownloadCVButton.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";
import Link from "next/link";

type DownloadCVButtonProps = {
    color: string;
}

export const DownloadCVButton: FunctionComponent<DownloadCVButtonProps> = ({color}) => {

    const localisation = useContext(LocalisationContext);
    let content;

    let colorStyle : string = color === "white" ? style.whiteCVButton : style.blueCVButton;
    const classes = `${colorStyle} ${style.cvButton}`;

    if(localisation.locale === locales.francais) {
        content = "Télécharger CV";
    } else {
        content = "Download CV";
    }

    return <a href="/CV.pdf" className={classes}><span>{content}</span></a>;

}