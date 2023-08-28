import React, {useEffect, useRef} from "react";
import style from './Skills.module.css';
import {Skill as SkillT} from "../../../pages";
import Image from "next/image";

interface IProps {
    skills:SkillT[]
    color : string
    title: string
    logo: string
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
    const divRef = useRef(null);

    function rotatebox(event: MouseEvent, element: any) {
        const x = event.clientX;
        const y = event.clientY;

        const middleX = element.offsetLeft + element.clientWidth / 2;
        const middleY = element.offsetTop - element.clientHeight / 2;

        if(window.innerWidth > 990) {

            const offsetX = ((Math.min(x, middleX*2) - middleX) / middleX) * 20;
            const offsetY = ((Math.min(y, middleY*2) - middleY) / middleY) * 20;
            element.style.transform = `perspective(5000px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;

        } else {
            element.style.transform = ``;
        }

    }

    useEffect(() => {
        addEventListener("mousemove", (e) => rotatebox(e, divRef.current));
    }, []);


    if (props.color === "light-blue") {
        color = light_blue;
        text_color = light_blue_text;
    } else if (props.color === "green") {
        color = green;
        text_color = green_text;
    }
    return <div ref={divRef} className={`${style.skillsDiv}`}>
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