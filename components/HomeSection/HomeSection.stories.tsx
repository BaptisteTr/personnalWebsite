import React from 'react';
import HomeSection from './HomeSection';

import { ComponentMeta , ComponentStory} from '@storybook/react';
import {Description} from "../../pages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'HomeSection/HomeSection',
    component: HomeSection,
} as ComponentMeta<typeof HomeSection>;

let descriptions : Description[] = [
    {
        id:1,
        section_key:"presentation",
        description_fr:"description fr",
        description_eng:"description_eng"
    }
]

export const Primary: ComponentStory<typeof HomeSection> = () => <HomeSection descriptions={descriptions} scrollToContact={() => {}}/>
