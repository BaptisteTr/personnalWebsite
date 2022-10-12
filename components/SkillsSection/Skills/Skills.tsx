import React from "react";
import style from './Skills.module.css';
import {Skill as SkillT} from "../../../pages";
import Image from "next/image";

interface IProps {
    skills:SkillT[]
    color : string
    title: string
    logo: string
}

interface IState {
}


class Skills extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render() {

        let blue = style.blue;
        let light_blue = style.lightBlue;
        let green = style.green;
        let color = blue;
        let blue_text = style.blue_text;
        let light_blue_text = style.lightBlue_text;
        let green_text = style.green_text;
        let text_color = blue_text;
        let blue_border = style.blue_border
        let light_blue_border = style.lightBlue_border;
        let green_border = style.green_border;
        let border_color = blue_border;

        if(this.props.color === "light-blue") {
            color = light_blue;
            text_color = light_blue_text;
            border_color = light_blue_border
        } else if(this.props.color === "green") {
            color = green;
            text_color = green_text;
            border_color = green_border;
        }
        return <div className={style.skillsDiv+" "+border_color}>
            <div className={style.skillLeftPanel}>
                <div className={style.logo+" "+color} >
                    <Image src={this.props.logo} alt={"logo skills"} height={"50px"} width={"50px"} />
                </div>
                <p className={style.skillTitle+" "+text_color}>{this.props.title}</p>
            </div>
            <div className={style.skillRightPanel}>
                {this.props.skills.map(s => {
                        return <span className={style.skillItem+" "+text_color} key={s.id}>{s.label}</span>
                    })
                }
            </div>
        </div>
        ;
    }
}

export default Skills;