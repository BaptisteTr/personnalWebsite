import React from 'react';
import Services from './Services';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import Skills from "../Skills/Skills";
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";

export default {
    title: 'Services',
    component: Services,
} as ComponentMeta<typeof Services>;

export const Primary: ComponentStory<typeof Services> = () => <Services/>
export const English: ComponentStory<typeof Skills> = () => <Services/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];