import React from 'react';
import {FooterInfos} from './FooterInfos';

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'FooterInfos',
    component: FooterInfos,
} as ComponentMeta<typeof FooterInfos>;

export const Primary: ComponentStory<typeof FooterInfos> = () => <FooterInfos/>
