import React from 'react';
import Presentation from './Presentation';

import { ComponentMeta , ComponentStory} from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Presentation background',
    component: Presentation,
} as ComponentMeta<typeof Presentation>;

export const Primary: ComponentStory<typeof Presentation> = () => <Presentation/>
