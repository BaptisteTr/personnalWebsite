import React, { FunctionComponent } from 'react';
import style from './FooterInfos.module.css';
import '../../fonts/stylesheet.css';
import {ExteriorLinks} from "../ExteriorLinks/ExteriorLinks";
import {ScrollTopButton} from "../ScrollTopButton/ScrollTopButton";
import {DownloadCVButton} from "../DownloadCVButton/DownloadCVButton";

type FooterInfosProps = {
}

export const FooterInfos: FunctionComponent<FooterInfosProps> = ({}) => {


return <div className={style.infosDiv}>
    <ScrollTopButton />
    <ExteriorLinks color="blue"/>
    <DownloadCVButton color="blue"/>
</div>;
}