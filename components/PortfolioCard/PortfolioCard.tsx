import React, { FunctionComponent } from 'react';
import '../../fonts/stylesheet.css';

import style from './PortfolioCard.module.css';
import {StaticImageData} from "next/image";

type PortfolioCardProps = {

    title : string,
    description : string,
    technologies : Array<string>,
    picture : StaticImageData

}

export const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({title, description, technologies, picture}) => {

return <div className={style.portfolioCard}>
    <div className={style.picture} style={{backgroundImage: `url(${picture})`}} />
    <h1 className={style.portfolioTitle}>{title}</h1>
    <div className={style.portfolioSeparator}/>
    <p className={style.portfolioDescription}>{description}</p>
    <div className={style.portfolioTechs}>
        {technologies.map( (tech) => {
            return <p className={style.portfolioTech} key={tech} >{tech}</p>
            })
        }
    </div>
    <div className={style.portfolioButtons}>
        <a href="#"><span className={style.portfolioButton}>Visiter</span></a>
        <a href="#"><span className={style.portfolioButton}>Sources</span></a>
    </div>
</div>;
}