import React from 'react';
import NavigationMenu from './NavigationMenu';
import {locales, LocalisationContext} from "../../../contexts/Locale";

import { ComponentMeta , ComponentStory} from '@storybook/react';
import { withReactContext } from 'storybook-react-context';

export default {
    title: 'Header/NavigationMenu',
    component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

export const Primary: ComponentStory<typeof NavigationMenu> = () => <NavigationMenu scrollToContact={() => {}} scrollToHome={() => {}} scrollToProjects={() => {}} scrollToServices={() => {}} scrollToSkills={() => {}}/>
export const English: ComponentStory<typeof NavigationMenu> = () => <NavigationMenu scrollToContact={() => {}} scrollToHome={() => {}} scrollToProjects={() => {}} scrollToServices={() => {}} scrollToSkills={() => {}}/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];