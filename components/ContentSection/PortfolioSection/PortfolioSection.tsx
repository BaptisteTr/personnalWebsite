import React, {FunctionComponent, useContext} from 'react';
import style from './PortfolioSection.module.css';
import {PortfolioCard} from "../PortfolioCard/PortfolioCard";
import {LocalisationContext, locales} from "../../../contexts/Locale";
import {Project} from "../../../pages";



type PortfolioSectionProps = {
    projects: Project[]
}

export const PortfolioSection: FunctionComponent<PortfolioSectionProps> = ({projects}) => {

    const localisation = useContext(LocalisationContext);
    let title: string = localisation.locale === locales.francais ? "Mes projets" : "My projects";

    return <div id={style["portfolioSectionDiv"]} >

        <h1 id={style["portfolioSectionTitle"]}>{title}</h1>
        <div id={style["portfolioSection"]}>
            {
                projects.map( (project : Project) => {
                    return <PortfolioCard project={project}  key={project.id}/>
                })
            }
        </div>
    </div>;
}