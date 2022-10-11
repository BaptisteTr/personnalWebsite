import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import style from './SkillsSection.module.css';
import Skills from "./Skills/Skills";
import {Description, Skill} from "../../pages";

type ContentSectionProps = {
    skills:Skill[],
    descriptions:Description[];
}

const SkillsSection = forwardRef<any,ContentSectionProps>((props, ref) => {

    const servicesRef = useRef(null);
    const skillsRef = useRef(null);

    useImperativeHandle(ref, () => ({
        get services() {
            return servicesRef.current;
        },
        get skills() {
            return skillsRef.current;
        }
    }));

    let frontSkills = props.skills.filter(s=>s.section==="front");
    let backSkills = props.skills.filter(s=>s.section==="back");
    let toolsSkills = props.skills.filter(s=>s.section==="tools");

    return <div className={style.contentSectionContainer}>
            <div className={style.bigBackgroundWord}>SKILLS</div>
            <h1>Mes compétences</h1>
            <div className={style.contentContainer}>
                <p>Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                {props.descriptions.map(d => {
                    return <p key={d.id}>{d.description_fr}</p>
                })}
            </div>
            <div className={style.skillsContainer}>
                <Skills color={"blue"} logo={"/reactjs_logo.svg"} skills={frontSkills} title={"Développement Front-end"}/>
                <Skills color={"light-blue"} logo={"/database_logo.svg"} skills={backSkills} title={"Développement Back-end"}/>
                <Skills color={"green"} logo={"/tools_logo.svg"} skills={toolsSkills} title={"Outils et méthodes"}/>
            </div>
        </div>;
})

SkillsSection.displayName = "SkillsSection";
export default SkillsSection;