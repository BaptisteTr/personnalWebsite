import React from "react";
import {locales, LocalisationContext} from "../../../contexts/Locale";
import style from './Skills.module.css';
import {Description, Skill as SkillT} from "../../../pages";

interface IProps {
    skills:SkillT[],
    descriptions:Description[]
}

interface IState {
}

interface SkillListProps {
    title : string ,
    logo : string,
    skills : SkillT[]
}

const SkillList : React.FC<SkillListProps> = ({title, logo, skills}) => {

    return <div className={style.skillsList}>
        <img className={style.skillLogo} src={logo} alt={title + " logo"}/>
        <h1 className={style.skillTitle}>{title}</h1>
        {skills.map( (skill, key) => {
            return <span className={style.skillItem} key={key}>{skill.label}</span>
        })}
    </div>
}

class Skills extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    static contextType = LocalisationContext;
    context!: React.ContextType<typeof LocalisationContext>

    render() {
        let { locale } = this.context;
        let description: string|undefined;
        if(locale === locales.francais) {
            description = this.props.descriptions.find(d => d.section_key === "skills")?.description_fr
        } else {
            description = this.props.descriptions.find(d => d.section_key === "skills")?.description_eng
        }

        let frontEndSkills = this.props.skills.filter(s => s.section === "front");
        let backEndSkills = this.props.skills.filter(s => s.section === "back");
        let toolsSkills = this.props.skills.filter(s => s.section === "tools");

        let skillTitle : string = "Outils et méthodes";
        let title : string = "Mes compétences";
        let logoFront = "/reactjs_logo.svg"
        let logoBack = "/database_logo.svg"
        let logoTools = "/tools_logo.svg"

        if(locale === locales.english) {
            skillTitle = "Tools and methods";
            title = "My skills";
        }

        return <div id="skillsDiv" className={style.skillsDiv}>
            <h1 id={style["mySkillsTitle"]}>{title}</h1>
            <p id={style["mySkillsDescription"]}>{description}</p>
            <div id={style["skillsListDiv"]}>
                <SkillList title="Front-End" logo={logoFront} skills={frontEndSkills} />
                <SkillList title="Back-End" logo={logoBack} skills={backEndSkills} />
                <SkillList title={skillTitle} logo={logoTools} skills={toolsSkills} />
            </div>
        </div>
        ;
    }
}

export default Skills;