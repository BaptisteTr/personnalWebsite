import React, { FunctionComponent } from 'react';
import style from './ScrollTopButton.module.css';
import '../../fonts/stylesheet.css';
import chevron from "../../Assets/chevron_top.svg";

type ScrollTopButtonProps = {
}

export const ScrollTopButton: FunctionComponent<ScrollTopButtonProps> = ({}) => {

return <a href="#" onClick={(e) => {e.preventDefault();window.scrollTo(0, 0);}}>
        <div  className={style.circle}>
            <img className={style.chevron} src={chevron} alt="chevron scroll top"/>
        </div>
    </a>
}