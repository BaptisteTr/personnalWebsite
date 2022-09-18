import React from 'react';
import {PortfolioCard} from './PortfolioCard';
import picture from '../../Assets/tetris.png';

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'PortfolioCard',
    component: PortfolioCard,
} as ComponentMeta<typeof PortfolioCard>;

let technologies = new Array("angular", "javascript", "autre");
let description = "Projet Angular reproduisant le jeu Tetris dans le but de pratiquer l’utilisation et la communication inter-composants.";

export const Primary: ComponentStory<typeof PortfolioCard> = () => <PortfolioCard description={description} picture={picture} technologies={technologies} title="Tetris"/>
