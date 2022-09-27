import React, {useContext, createContext} from "react";
import {locales, LocalisationContext} from "../../../contexts/Locale";
import style from './Skills.module.css';

interface IProps {
}

interface IState {
}

interface SkillListProps {
    title : string ,
    logo : string,
    skills : Array<string>
}

const SkillList : React.FC<SkillListProps> = ({title, logo, skills}) => {

    return <div className={style.skillsList}>
        <img className={style.skillLogo} src={logo} alt={title + " logo"}/>
        <h1 className={style.skillTitle}>{title}</h1>
        {skills.map( (skill, key) => {
            return <span className={style.skillItem} key={key}>{skill}</span>
        })}
    </div>
}

class Skills extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    static contextType = LocalisationContext;
    context!: React.ContextType<typeof LocalisationContext>

    frontEndSkills = new Array<string>("React","Angular","Storybook","Css");
    backEndSkills = new Array<string>("Java Spring","NodeJs","Oracle / MySQL");
    toolsSkills = new Array<string>("Git","Scrum","SOA Architecture","Test Driven Development");

    render() {

        let { locale } = this.context;

        let skillTitle : string = "Outils et méthodes";
        let title : string = "Mes compétences";
        let description : string = "Expérience projets + Ci dessous technologies favorites. Spécialisation en cours";
        let logoFront = "/reactjs_logo.svg"
        let logoBack = "/database_logo.svg"
        let logoTools = "/tools_logo.svg"

        if(locale === locales.english) {
            skillTitle = "Tools and methods";
            title = "My skills";
            description = "English random text";
        }

        return <div id={style["skillsDiv"]}>
            <h1 id={style["mySkillsTitle"]}>{title}</h1>
            <p id={style["mySkillsDescription"]}>{description}</p>
            <div id={style["skillsListDiv"]}>
                <SkillList title="Front-End" logo={logoFront} skills={this.frontEndSkills} />
                <SkillList title="Back-End" logo={logoBack} skills={this.backEndSkills} />
                <SkillList title={skillTitle} logo={logoTools} skills={this.toolsSkills} />
            </div>
        </div>
        ;
    }
}

export default Skills;