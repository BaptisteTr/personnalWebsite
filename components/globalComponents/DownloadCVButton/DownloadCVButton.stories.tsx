import React from 'react';
import {DownloadCVButton} from './DownloadCVButton';

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Global components/DownloadCVButton',
    component: DownloadCVButton,
    parameters: {
        backgrounds: {
            values: [
                {name: 'white', value: 'white'},
                {name: 'blue', value: 'blue'},
            ]
        }
    }
} as ComponentMeta<typeof DownloadCVButton>;

export const Primary: ComponentStory<typeof DownloadCVButton> = () => <DownloadCVButton color="blue"/>
export const White: ComponentStory<typeof DownloadCVButton> = () => <DownloadCVButton color="white"/>
