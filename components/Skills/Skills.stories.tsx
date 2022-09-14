import React from 'react';
import Skills from './Skills';

import { ComponentMeta , ComponentStory} from '@storybook/react';
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../contexts/Locale";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Skills',
    component: Skills,
} as ComponentMeta<typeof Skills>;

export const Primary: ComponentStory<typeof Skills> = () => <Skills/>
export const English: ComponentStory<typeof Skills> = () => <Skills/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];