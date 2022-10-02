import React from 'react';
import {PortfolioCard} from './PortfolioCard';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Project} from "../../../pages";

export default {
    title: 'Content/PortfolioCard',
    component: PortfolioCard,
} as ComponentMeta<typeof PortfolioCard>;

let project : Project = {
    date_created: "",
    description_eng: "English description",
    description_fr: "Projet Angular reproduisant le jeu Tetris dans le but de pratiquer l’utilisation et la communication inter-composants.",
    id: 0,
    illustration: "",
    picture: undefined,
    sort: "",
    sources_link: "#",
    technologies: [],
    title_eng: "Tetris",
    title_fr: "Tetris",
    visit_link: "#"
};

export const Primary: ComponentStory<typeof PortfolioCard> = () => <PortfolioCard  project={project}/>
