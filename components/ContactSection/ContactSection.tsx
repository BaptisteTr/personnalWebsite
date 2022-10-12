import React, {FunctionComponent, useContext} from 'react';
import style from './ContactSection.module.css';
import {Contact} from "./ContactForm/Contact";
import Image from "next/image";
import {DownloadCVButton} from "../globalComponents/DownloadCVButton/DownloadCVButton";
import {locales, LocalisationContext} from "../../contexts/Locale";
import {Description} from "../../pages";

type FooterSectionProps = {
    description : Description | undefined;
}

export const ContactSection: FunctionComponent<FooterSectionProps> = ({description}) => {


    const localisation = useContext(LocalisationContext);
    let title: string = localisation.locale === locales.francais ? "Contactez moi!" : "Contact me!";

return <React.Fragment>
        <div className={style.footerContainer}>

            <div className={style.bigBackgroundWord}>@</div>

            <h1>{title}</h1>
            <div className={style.footerLeftPanel}>
                <Contact description={description}/>
            </div>

            <div className={style.footerRightPanel}>
                <div className={style.map} >
                    <div className={style.contactInfos}>
                        <p>Baptiste TRAUTMANN</p>
                        <p>Strasbourg, France</p>
                        <a href="mailto:contact@baptistetrautmann.com">contact@baptistetrautmann.com</a>
                        <DownloadCVButton color="green" />
                    </div>
                    <div id={style["mapPointerCircle"]} >
                        <Image id={style["mapPointer"]} src={"/logo-color.svg"} alt="map pointer" width={"80px"} height={"80px"} />
                        <div id={style["mapPointerAngle"]} />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}