import React, {FunctionComponent, useContext} from 'react';

import style from './PortfolioCard.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";
import {Project} from "../../../pages";

type PortfolioCardProps = {
    project : Project
}

export const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({project}) => {

    const localisation = useContext(LocalisationContext);
    let title,description,button : string;
    if(localisation.locale === locales.francais) {
        title = project.title_fr;
        description = project.description_fr;
        button = "Visiter";
    } else {
        title = project.title_eng;
        description = project.description_eng;
        button = "Visit";
    }


return <div className={style.portfolioCard} style={{backgroundImage: `url(${project.illustration})`}}>
    <div className={style.cardContent}>
        <h1 className={style.portfolioTitle}>{title}</h1>
        <p className={style.portfolioDescription}>{description}</p>
        <div className={style.portfolioTechs}>
            {project.technologies.map( (tech) => {
                return <p className={style.portfolioTech} key={tech.Technologies_id.label} >{tech.Technologies_id.label}</p>
                })
            }
        </div>
        <div className={style.portfolioButtons}>
            <a href={project.visit_link}><span className={style.portfolioButton}>{button}</span></a>
            <a href={project.sources_link}><span className={style.portfolioButton}>Sources</span></a>
        </div>
    </div>
</div>;
}