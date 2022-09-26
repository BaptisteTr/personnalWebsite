import React, {FunctionComponent, useContext} from 'react';
import style from './PortfolioSection.module.css';
import {PortfolioCard} from "../PortfolioCard/PortfolioCard";
import {LocalisationContext, locales} from "../../../contexts/Locale";

type PortfolioSectionProps = {
}

type PortfolioItem = {
    title: string;
    picture: string;
    description: string;
    technologies: Array<string>;
}

export const PortfolioSection: FunctionComponent<PortfolioSectionProps> = ({}) => {

    let portfolioItems : Array<PortfolioItem> = new Array<PortfolioItem>(
        {
            title : "Tetris",
            picture : "/tetris.png",
            description : "Projet Angular reproduisant le jeu Tetris dans le but de pratiquer l’utilisation et la communication inter-composants.",
            technologies : ["Angular" , "CSS", "Javascript"],
        },{
            title : "En travaux",
            picture : "/inProgress.png",
            description : "tetris",
            technologies : ["Angular" , "CSS", "Javascript"],
        },{
            title : "En travaux 2",
            picture : "/inProgress.png",
            description : "tetris",
            technologies : ["Angular" , "Autre"],
        },{
            title : "En travaux 3",
            picture : "/inProgress.png",
            description : "tetris",
            technologies : ["Angular"],
        },
    );

    const localisation = useContext(LocalisationContext);
    let title: string = localisation.locale === locales.francais ? "Mes projets" : "My projects";

    return <div id={style["portfolioSectionDiv"]} >

        <h1 id={style["portfolioSectionTitle"]}>{title}</h1>
        <div id={style["portfolioSection"]}>
            {
                portfolioItems.map( (item) => {
                    return <PortfolioCard key={item.title} title={item.title} description={item.description} technologies={item.technologies} picture={item.picture} />
                })
            }
        </div>
    </div>;
}