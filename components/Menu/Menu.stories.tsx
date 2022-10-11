import React from 'react';
import { ComponentMeta , ComponentStory} from '@storybook/react';
import Menu from "./Menu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Menu/Menu',
    component: Menu,
} as ComponentMeta<typeof Menu>;

export const Primary: ComponentStory<typeof Menu> = () => <Menu scrollToContact={() => {}} scrollToHome={() => {}} scrollToProjects={() => {}} scrollToServices={() => {}} scrollToSkills={() => {}}/>
