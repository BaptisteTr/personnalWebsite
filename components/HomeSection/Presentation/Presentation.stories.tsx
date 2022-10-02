import React from 'react';
import Presentation from './Presentation';

import { ComponentMeta , ComponentStory} from '@storybook/react';
import {Description} from "../../../pages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'HomeSection/Presentation background',
    component: Presentation,
} as ComponentMeta<typeof Presentation>;

let descriptions : Description[] = [
    {
        id:1,
        section_key:"services",
        description_fr:"description fr",
        description_eng:"description_eng"
    }
]

export const Primary: ComponentStory<typeof Presentation> = () => <Presentation descriptions={descriptions}/>
