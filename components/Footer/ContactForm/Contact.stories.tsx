import React from 'react';
import {Contact} from './Contact';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";
import {FooterSection} from "../FooterSection";

export default {
    title: 'Footer/FooterSection',
    component: FooterSection,
} as ComponentMeta<typeof FooterSection>;

export const Primary: ComponentStory<typeof Contact> = () => <Contact/>
export const English: ComponentStory<typeof Contact> = () => <Contact/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english,
        toggleLocale: () => {}
    },
})];
