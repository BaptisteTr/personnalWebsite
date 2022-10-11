import React, { FunctionComponent } from 'react';
import style from './FooterInfos.module.css';
import {ExteriorLinks} from "../../globalComponents/ExteriorLinks/ExteriorLinks";
import {ScrollTopButton} from "../../globalComponents/ScrollTopButton/ScrollTopButton";
import {DownloadCVButton} from "../../globalComponents/DownloadCVButton/DownloadCVButton";

type FooterInfosProps = {
}

export const FooterInfos: FunctionComponent<FooterInfosProps> = ({}) => {


return <div className={style.infosDiv}>
    <ScrollTopButton />
    <ExteriorLinks color="white"/>
    <DownloadCVButton color="green"/>
</div>;
}