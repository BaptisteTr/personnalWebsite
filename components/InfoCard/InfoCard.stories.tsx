import React from 'react';
import InfoCard from './InfoCard';
import {locales, LocalisationContext} from "../../contexts/Locale";


import { ComponentMeta , ComponentStory} from '@storybook/react';
import { withReactContext } from 'storybook-react-context';

export default {
    title: 'InfoCard',
    component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

export const Primary: ComponentStory<typeof InfoCard> = () => <InfoCard/>
export const English: ComponentStory<typeof InfoCard> = () => <InfoCard/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];