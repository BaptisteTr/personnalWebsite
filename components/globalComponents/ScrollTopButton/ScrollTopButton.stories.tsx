import React from 'react';
import {ScrollTopButton} from './ScrollTopButton';

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Global components/ScrollTopButton',
    component: ScrollTopButton,
} as ComponentMeta<typeof ScrollTopButton>;

export const Primary: ComponentStory<typeof ScrollTopButton> = () => <ScrollTopButton/>
