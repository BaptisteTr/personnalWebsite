import React from 'react';
import Skills from './Skills';

import { ComponentMeta , ComponentStory} from '@storybook/react';
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";
import {Description, Skill} from "../../../pages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Content/Skills',
    component: Skills,
} as ComponentMeta<typeof Skills>;

let skills : Skill[] = [
    {id:0, section:"front", label:"test"},
    {id:1, section:"front", label:"test"},
    {id:2, section:"front", label:"test"},
    {id:3, section:"front", label:"test"},
    {id:4, section:"front", label:"test"},
    {id:5, section:"front", label:"test"},
    {id:6, section:"front", label:"test"},
    {id:7, section:"front", label:"test"},
    {id:8, section:"front", label:"test"}
];

let descriptions : Description[] = [
    {
        id:1,
        section_key:"skills",
        description_fr:"description fr",
        description_eng:"description_eng"
    }
]

export const Primary: ComponentStory<typeof Skills> = () => <Skills skills={skills} descriptions={descriptions}/>
export const English: ComponentStory<typeof Skills> = () => <Skills skills={skills} descriptions={descriptions}/>

English.decorators = [withReactContext({
    Context: LocalisationContext,
    initialState: {
        locale: locales.english
    },
})];