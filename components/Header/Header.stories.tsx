import React from 'react';
import { ComponentMeta , ComponentStory} from '@storybook/react';
import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => <Header/>
