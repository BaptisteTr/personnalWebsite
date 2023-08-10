import React from 'react';
import {ContactSection} from './ContactSection';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Description} from "../../pages";

export default {
    title: 'FooterSection',
    component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

let description : Description = {
    id: 1,
    description_fr: "Description en fr",
    description_eng: "Description en eng",
    section_key: "contact"
}

let email_service = "", email_key = "", email_template_id = "";

export const Primary: ComponentStory<typeof ContactSection> = () => <ContactSection description={description} email_key={email_key} email_service={email_service} email_template_id={email_template_id}/>
