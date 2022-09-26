import React from 'react';
import {PortfolioSection} from './PortfolioSection';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import LanguageButton from "../../Header/LanguageButton/LanguageButton";
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";

export default {
    title: 'Content/PortfolioSection',
    component: PortfolioSection,
} as ComponentMeta<typeof PortfolioSection>;

export const Primary: ComponentStory<typeof PortfolioSection> = () => <PortfolioSection/>
export const English: ComponentStory<typeof PortfolioSection> = () => <PortfolioSection/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english,
        toggleLocale: () => {}
    },
})];

