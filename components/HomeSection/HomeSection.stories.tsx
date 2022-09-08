import React from 'react';
import HomeSection from './HomeSection';

import { ComponentMeta , ComponentStory} from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'HomeSection',
    component: HomeSection,
} as ComponentMeta<typeof HomeSection>;

export const Primary: ComponentStory<typeof HomeSection> = () => <HomeSection/>
