import React, { FunctionComponent } from 'react';
import style from './ScrollTopButton.module.css';

type ScrollTopButtonProps = {
}

export const ScrollTopButton: FunctionComponent<ScrollTopButtonProps> = ({}) => {

return <a href="components/globalComponents/ScrollTopButton/ScrollTopButton#" onClick={(e) => {e.preventDefault();window.scrollTo(0, 0);}}>
        <div  className={style.circle}>
            <img className={style.chevron} src="/chevron_top.svg" alt="chevron scroll top"/>
        </div>
    </a>
}