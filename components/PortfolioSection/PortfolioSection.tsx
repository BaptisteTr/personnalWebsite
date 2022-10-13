import React, {FunctionComponent, useContext} from 'react';
import style from './PortfolioSection.module.css';
import {PortfolioCard} from "./PortfolioCard/PortfolioCard";
import {LocalisationContext, locales} from "../../contexts/Locale";
import {Description, Project} from "../../pages";



type PortfolioSectionProps = {
    projects: Project[],
    description: Description | undefined
}

export const PortfolioSection: FunctionComponent<PortfolioSectionProps> = ({projects,description}) => {

    const localisation = useContext(LocalisationContext);
    let title: string = localisation.locale === locales.francais ? "Mes projets" : "My projects";

    return <div id={style["portfolioSectionDiv"]} >
        <div className={style.bigBackgroundWord}>Projects</div>
        <h1 id={style["portfolioSectionTitle"]}>{title}</h1>
        <p className={style.description}>{localisation.locale === locales.francais ? description?.description_fr : description?.description_eng}</p>
        <div id={style["portfolio"]}>
            {
                projects.map( (project : Project) => {
                    return <PortfolioCard project={project}  key={project.id}/>
                })
            }
        </div>
    </div>;
}