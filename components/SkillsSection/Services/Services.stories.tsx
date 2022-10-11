import React from 'react';
import Services from './Services';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import Skills from "../Skills/Skills";
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";
import {Description} from "../../../pages";

export default {
    title: 'Content/Services',
    component: Services,
} as ComponentMeta<typeof Services>;

let descriptions : Description[] = [
    {
        id:1,
        section_key:"services",
        description_fr:"description fr",
        description_eng:"description_eng"
    }
]


export const Primary: ComponentStory<typeof Services> = () => <Services descriptions={descriptions}/>
export const English: ComponentStory<typeof Skills> = () => <Services descriptions={descriptions}/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];