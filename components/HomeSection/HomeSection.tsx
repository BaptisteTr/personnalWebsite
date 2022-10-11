import React from "react";

import style from './HomeSection.module.css';
import {Description} from "../../pages";
import {locales, LocalisationContext} from "../../contexts/Locale";
import InfoCard from "./InfoCard/InfoCard";
import Image from "next/image";
import {CanvasSpace, Create, Line, Pt} from "pts";

interface IProps {
    descriptions:Description[]
}

interface IState {
}


const colors = [
    "#00BF94", "#00ADB8", "#0099D7"
];

export function floatySpace(space: CanvasSpace) {

    const form = space.getForm();
    let landmarks: any;
    let mouse: any;
    let brightness: (number)[] = [];

    space.add({

        start: () => {

            // Elements
            let count = window.innerWidth * 0.16;
            if (count > 150) count = 150;
            let r = Math.min(space.size.x, space.size.y);
            mouse = space.center;


            // Make a face with 30 radial points with slight randomness
            landmarks = Create.radialPts( space.center, r, count);
            landmarks.map( (p: { to: (arg0: Pt) => void; add: (arg0: number, arg1: number) => void; rotate2D: (arg0: number, arg1: Pt) => void; }) => {
                p.to(space.center);
                p.add(Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
                p.rotate2D( count*Math.PI/count, space.center);
                brightness.push(0.1);
            });
        },

        animate: () => {

            let angle = new Pt(space.width/4,-space.height).angle();

            for (let i=0; i<landmarks.length; i++) {
                const pt = landmarks[i];

                pt.rotate2D( 1 / 2000, space.center);
                form.fillOnly(colors[i%3]).point( landmarks[i], 1.5, "circle" );

                let ln = Line.fromAngle(landmarks[i], angle, window.innerHeight);

                const distFromMouse = Math.abs(Line.distanceFromPt(ln, mouse));

                if (distFromMouse < 50) {
                    if (brightness[i] < 0.4) brightness[i] += 0.015;
                } else {
                    if (brightness[i] > 0.1) brightness[i]-= 0.01;
                }

                form.strokeOnly("#FFFFFF", brightness[i]).line(ln);

            }
        },
        action: function(type, x, y) {
            if (type == "move") {
                mouse.to(x, y);
            }
        }
    });

    // bind mouse events and play animation
    space.bindMouse().bindTouch().play();
}

class HomeSection extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    static contextType = LocalisationContext;
    context!: React.ContextType<typeof LocalisationContext>

    componentDidMount() {

        let space = new CanvasSpace("#pts").setup({bgcolor: "#1D1D1D", retina: true, resize: true});
        floatySpace(space);
    }

    render() {


        let { locale } = this.context;
        let title,description,buttonText: string|undefined;
        if(locale === locales.francais) {
            description = "Ingénieur logiciel en développement front et fullstack"
            title = "Développeur web Freelance"
            buttonText = "Contactez-moi!"
        } else {
            description = "Software engineer in front and fullstack development"
            title = "Freelance web Developer"
            buttonText = "Contact-me!"
        }

        return <div className={style.homeContainer}>
            <canvas id="pts" className={style.canvas}/>

            <div className={style.infoSection}>
                <div className={style.homeSection}>
                    <h1 className={style.homeName}>Baptiste TRAUTMANN</h1>
                    <h2 className={style.homeTitle}>{title}</h2>
                    <p className={style.homeDescription}>{description}</p>
                    <a href="#" className={style.contactButton}>{buttonText}</a>

                </div>
            </div>


            <div className={style.infoCardSection}>
                <InfoCard />
            </div>
        </div>
        ;
    }

}

export default HomeSection;