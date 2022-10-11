import React from 'react';
import Skills from './Skills';

import { ComponentMeta , ComponentStory} from '@storybook/react';
import {Description, Skill} from "../../../pages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Content/Skills',
    component: Skills,
} as ComponentMeta<typeof Skills>;

let skills : Skill[] = [
    {id:0, section:"front", label:"React"},
    {id:1, section:"front", label:"Angular"},
    {id:2, section:"front", label:"CSS"},
    {id:3, section:"front", label:"Storybook"},
];

let descriptions : Description[] = [
    {
        id:1,
        section_key:"skills",
        description_fr:"description fr",
        description_eng:"description_eng"
    }
]

export const Primary: ComponentStory<typeof Skills> = () => <Skills skills={skills} color={"blue"} logo={"/reactjs_logo.svg"} title={"Développement Front-end"}/>
export const LightBlue: ComponentStory<typeof Skills> = () => <Skills skills={skills} color={"light-blue"} logo={"/reactjs_logo.svg"} title={"Développement Back-end"}/>
export const Green: ComponentStory<typeof Skills> = () => <Skills skills={skills} color={"green"} logo={"/reactjs_logo.svg"} title={"Outils et méthodes"}/>

// English.decorators = [withReactContext({
//     Context: LocalisationContext,
//     initialState: {
//         locale: locales.english
//     },
// })];