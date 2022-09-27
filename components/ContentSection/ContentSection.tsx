import React from 'react';
import style from './ContentSection.module.css';
import Skills from "./Skills/Skills";
import {CanvasSpace, Create, Line, Pt} from "pts";
import Services from "./Services/Services";

type ContentSectionProps = {}

const colors = [
    "#02054F", "#2B3487", "#32699F"
];

export function floatySpace(space: CanvasSpace) {

    const form = space.getForm();
    let landmarks: any;
    let mouse: any;
    let brightness: (number)[] = [];

    space.add({

        start: (bound) => {

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
                form.fillOnly(colors[i%3]).point( landmarks[i], 2, "circle" );

                let ln = Line.fromAngle(landmarks[i], angle, 2000);

                const distFromMouse = Math.abs(Line.distanceFromPt(ln, mouse));

                if (distFromMouse < 50) {
                    if (brightness[i] < 0.4) brightness[i] += 0.015;
                } else {
                    if (brightness[i] > 0.1) brightness[i]-= 0.01;
                }

                form.strokeOnly("#32699F", brightness[i]).line(ln);

            }
        },
        action: function(type, x, y, evt) {
            if (type == "move") {
                mouse.to(x, y);
            }
        }
    });

    // bind mouse events and play animation
    space.bindMouse().bindTouch().play();
}

export class ContentSection extends React.Component {

    componentDidMount() {
        let space = new CanvasSpace("#pts").setup({bgcolor: "#E6ECFF", retina: true, resize: true});
        floatySpace(space);
    }

    render() {
        return <div id="canvasContainer" className={style.canvasContainer}>
            <canvas id="pts" className={style.canvas}/>
            <div className={style.contentContainer}>
                <Services/>
                <Skills/>
            </div>
        </div>;
    }
}