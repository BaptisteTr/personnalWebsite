import React from 'react';
import NavigationMenu from './NavigationMenu';
import {locales, LocalisationContext} from "../../contexts/Locale";

import { ComponentMeta , ComponentStory} from '@storybook/react';
import { withReactContext } from 'storybook-react-context';

export default {
    title: 'NavigationMenu',
    component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

export const Primary: ComponentStory<typeof NavigationMenu> = () => <NavigationMenu/>
export const English: ComponentStory<typeof NavigationMenu> = () => <NavigationMenu/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];