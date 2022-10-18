import React, {useRef} from "react";
import style from './Skills.module.css';
import {Skill as SkillT} from "../../../pages";
import Image from "next/image";
import { useInView } from 'react-intersection-observer'

interface IProps {
    skills:SkillT[]
    color : string
    title: string
    logo: string
}

interface IState {
}


function Skills(props: IProps) {

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

    const {ref, inView} = useInView({triggerOnce : true});



    if (props.color === "light-blue") {
        color = light_blue;
        text_color = light_blue_text;
        border_color = light_blue_border
    } else if (props.color === "green") {
        color = green;
        text_color = green_text;
        border_color = green_border;
    }
    return <div ref={ref} className={`${style.skillsDiv} ${border_color} ${inView ? style.slide : ""}`}>
        <div className={style.skillLeftPanel}>
            <div className={style.logo + " " + color}>
                <Image src={props.logo} alt={"logo skills"} height={"50px"} width={"50px"}/>
            </div>
            <p className={style.skillTitle + " " + text_color}>{props.title}</p>
        </div>
        <div className={style.skillRightPanel}>
            {props.skills.map(s => {
                return <span className={style.skillItem + " " + text_color} key={s.id}>{s.label}</span>
                })
            }
        </div>
    </div>
        ;
}

export default Skills;