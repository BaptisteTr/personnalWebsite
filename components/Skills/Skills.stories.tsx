import React from 'react';
import Skills from './Skills';

import { ComponentMeta , ComponentStory} from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Skills',
    component: Skills,
} as ComponentMeta<typeof Skills>;

export const Primary: ComponentStory<typeof Skills> = () => <Skills/>
