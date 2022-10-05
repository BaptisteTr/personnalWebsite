import React, { FunctionComponent } from 'react';
import style from './ScrollTopButton.module.css';
import Image from "next/image";

export const ScrollTopButton: FunctionComponent = ({}) => {

return <a href="components/globalComponents/ScrollTopButton/ScrollTopButton#" onClick={(e) => {e.preventDefault();window.scrollTo(0, 0);}}>
        <div  className={style.circle}>
            <Image className={style.chevron} src="/chevron_top.svg" alt="chevron scroll top" width="35px" height="18px" />
        </div>
    </a>
}