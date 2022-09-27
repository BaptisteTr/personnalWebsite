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
            <a href="#">contact@baptistetrautmann.com</a>
            <FooterInfos/>
        </div>
        <div className={style.blueFooter}>
            <p>Développé par Baptiste Trautmann 2022</p>
        </div>
    </React.Fragment>;
}