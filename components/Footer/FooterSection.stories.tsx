import React from 'react';
import {FooterSection} from './FooterSection';

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'FooterSection',
    component: FooterSection,
} as ComponentMeta<typeof FooterSection>;

export const Primary: ComponentStory<typeof FooterSection> = () => <FooterSection/>
