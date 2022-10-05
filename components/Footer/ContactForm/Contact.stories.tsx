import React from 'react';
import {Contact} from './Contact';

import {ComponentStory} from '@storybook/react';
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";



export const Primary: ComponentStory<typeof Contact> = () => <Contact/>
export const English: ComponentStory<typeof Contact> = () => <Contact/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english,
        toggleLocale: () => {}
    },
})];
