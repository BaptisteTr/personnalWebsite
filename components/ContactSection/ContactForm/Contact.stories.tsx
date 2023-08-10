import React from 'react';
import {Contact} from './Contact';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";
import {ContactSection} from "../ContactSection";
import {Description} from "../../../pages";

export default {
    title: 'ContactSection/ContactSection',
    component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

let description : Description = {
    id: 1,
    description_fr: "Description en fr",
    description_eng: "Description en eng",
    section_key: "contact"
}
let email_service = "", email_key = "", email_template_id = "";

export const Primary: ComponentStory<typeof Contact> = () => <Contact description={description} email_key={email_key} email_service={email_service} email_template_id={email_template_id}/>
export const English: ComponentStory<typeof Contact> = () => <Contact description={description} email_key={email_key} email_service={email_service} email_template_id={email_template_id}/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english,
        toggleLocale: () => {}
    },
})];
