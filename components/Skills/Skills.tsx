import React from "react";

import '../../fonts/stylesheet.css';
import {locales} from "../../contexts/Locale";
import style from './Skills.module.css';
import logoFront from '../../Assets/reactjs_logo.svg';
import logoBack from '../../Assets/database_logo.svg';
import logoTools from '../../Assets/tools_logo.svg';

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

    frontEndSkills = new Array<string>("React","Angular","Storybook","Css");
    backEndSkills = new Array<string>("Java Spring","NodeJs","Oracle / MySQL");
    toolsSkills = new Array<string>("Git","Scrum","SOA Architecture","Test Driven Development");

    render() {
        return <div id={style["skillsDiv"]}>
            <h1 id={style["mySkillsTitle"]}>Mes compétences</h1>
            <p id={style["mySkillsDescription"]}>Lorem ipsum dolor est</p>
            <div id={style["skillsListDiv"]}>
                <SkillList title="Front-End" logo={logoFront} skills={this.frontEndSkills} />
                <SkillList title="Back-End" logo={logoBack} skills={this.backEndSkills} />
                <SkillList title="Outils et méthodes" logo={logoTools} skills={this.toolsSkills} />
            </div>
        </div>
        ;
    }
}

export default Skills;