import React, {forwardRef, useContext, useEffect, useImperativeHandle, useRef} from 'react';
import style from './SkillsSection.module.css';
import Skills from "./Skills/Skills";
import {Description, Skill} from "../../pages";
import {locales, LocalisationContext} from "../../contexts/Locale";

type ContentSectionProps = {
    skills:Skill[],
    descriptions:Description[];
}

const SkillsSection = forwardRef<any,ContentSectionProps>((props, ref) => {

    const servicesRef = useRef(null);
    const skillsRef = useRef(null);

    const localisation = useContext(LocalisationContext);

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

    let frontTitle = localisation.locale === locales.francais ? "Développement Front-end" : "Front-end Development";
    let backTitle = localisation.locale === locales.francais ? "Développement Back-end" : "Back-end Development";
    let toolsTitle = localisation.locale === locales.francais ? "Outils et méthodes" : "Tools and processes";

    let title = localisation.locale === locales.francais ? "Mes compétences" : "My skills"

    return <div className={style.contentSectionContainer}>
            <div className={style.bigBackgroundWord}>SKILLS</div>
            <h1>{title}</h1>
            <div className={style.contentContainer}>
                {props.descriptions.filter(d => d.section_key.startsWith("services")).map(d => {
                    return <p key={d.id}>{localisation.locale === locales.francais ? d.description_fr : d.description_eng}</p>
                })}
            </div>
            <div className={style.skillsContainer}>
                <Skills color={"blue"} logo={"/reactjs_logo.svg"} skills={frontSkills} title={frontTitle}/>
                <Skills color={"light-blue"} logo={"/database_logo.svg"} skills={backSkills} title={backTitle}/>
                <Skills color={"green"} logo={"/tools_logo.svg"} skills={toolsSkills} title={toolsTitle}/>
            </div>
        </div>;
})

SkillsSection.displayName = "SkillsSection";
export default SkillsSection;