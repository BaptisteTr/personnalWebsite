import React, {FunctionComponent, useContext} from 'react';
import style from './PortfolioSection.module.css';
import '../../fonts/stylesheet.css';
import {PortfolioCard} from "../PortfolioCard/PortfolioCard";
import {StaticImageData} from "next/image";
import tetrisPicture from '../../Assets/tetris.png';
import inProgress from '../../Assets/inProgress.png';
import {LocalisationContext, locales} from "../../contexts/Locale";

type PortfolioSectionProps = {
}

type PortfolioItem = {
    title: string;
    picture: StaticImageData;
    description: string;
    technologies: Array<string>;
}

export const PortfolioSection: FunctionComponent<PortfolioSectionProps> = ({}) => {

    let portfolioItems : Array<PortfolioItem> = new Array<PortfolioItem>(
        {
            title : "tetris",
            picture : tetrisPicture,
            description : "tetris",
            technologies : ["Angular" , "CSS", "Javascript"],
        },{
            title : "En travaux",
            picture : inProgress,
            description : "tetris",
            technologies : ["Angular" , "CSS", "Javascript"],
        },{
            title : "En travaux",
            picture : inProgress,
            description : "tetris",
            technologies : ["Angular" , "Autre"],
        },{
            title : "En travaux",
            picture : inProgress,
            description : "tetris",
            technologies : ["Angular" ],
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