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

export const Primary: ComponentStory<typeof ContactSection> = () => <ContactSection description={description}/>
