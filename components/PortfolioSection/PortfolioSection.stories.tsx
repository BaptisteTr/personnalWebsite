import React from 'react';
import {PortfolioSection} from './PortfolioSection';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../contexts/Locale";
import {Description} from "../../pages";

export default {
    title: 'Content/PortfolioSection',
    component: PortfolioSection,
} as ComponentMeta<typeof PortfolioSection>;

let description : Description = {
    id: 1,
    description_fr: "Description en fr",
    description_eng: "Description en eng",
    section_key: "projects"
}

export const Primary: ComponentStory<typeof PortfolioSection> = () => <PortfolioSection projects={[]} description={description}/>
export const English: ComponentStory<typeof PortfolioSection> = () => <PortfolioSection projects={[]} description={description}/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english,
        toggleLocale: () => {}
    },
})];

