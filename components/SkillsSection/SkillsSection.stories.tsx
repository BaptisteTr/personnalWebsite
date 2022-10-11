import React from 'react';
import SkillsSection from './SkillsSection';

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'SkillsSection',
    component: SkillsSection,
} as ComponentMeta<typeof SkillsSection>;

let descriptions = [{
    id: 1,
    description_fr: "description fr",
    description_eng: "description eng",
    section_key:"front"
},{
    id: 2,
    description_fr: "description fr",
    description_eng: "description eng",
    section_key:"back"
},{
    id: 3,
    description_fr: "description fr",
    description_eng: "description eng",
    section_key:"tools"
},
]

let skills = [
    {id:0, section:"front", label:"React"},
    {id:1, section:"front", label:"Angular"},
    {id:2, section:"front", label:"CSS"},
    {id:3, section:"front", label:"Storybook"},
]

export const Primary: ComponentStory<typeof SkillsSection> = () => <SkillsSection descriptions={descriptions} skills={skills}/>
