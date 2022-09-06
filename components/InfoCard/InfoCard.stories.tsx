import React from 'react';
import InfoCard from './InfoCard';

import { ComponentMeta , ComponentStory} from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'InfoCard',
    component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

export const Primary: ComponentStory<typeof InfoCard> = () => <InfoCard/>
export const English: ComponentStory<typeof InfoCard> = () => <InfoCard/>
