import React, { FunctionComponent } from 'react';
import style from './FooterSection.module.css';
import {Contact} from "./ContactForm/Contact";
import {FooterInfos} from "./FooterInfos/FooterInfos";

type FooterSectionProps = {
}

export const FooterSection: FunctionComponent<FooterSectionProps> = ({}) => {


return <React.Fragment>
        <div className={style.footerSection}>
            <Contact/>
            <p>contact@baptistetrautmann.com</p>
            <FooterInfos/>
        </div>
        <div className={style.blueFooter}>
            <p>Développé par Baptiste Trautmann 2022</p>
        </div>
    </React.Fragment>;
}