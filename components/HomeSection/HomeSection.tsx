import React from "react";

import style from './HomeSection.module.css';
import {Description} from "../../pages";
import {locales, LocalisationContext} from "../../contexts/Locale";
import {CanvasSpace, Create, Pt} from "pts";
import {DownloadCVButton} from "../globalComponents/DownloadCVButton/DownloadCVButton";
import Image from "next/image";

interface IProps {
    descriptions:Description[]
    scrollToContact: () => void,
}

interface IState {
    width: number,
    height: number,
    sliding : Boolean
}


const colors = [
    "#00BF94", "#00ADB8", "#0099D7"
];

export function floatySpace(space: CanvasSpace) {

    const form = space.getForm();
    let landmarks: any;
    let mouse: any;
    let origin : any = [];
    let vectors : any = [];

    space.add({

        start: () => {

            // Elements
            let count = window.innerWidth * 0.06;
            if (count > 20) count = 20;
            mouse = space.center;
            let r = Math.min(space.size.x, space.size.y);

            // Make a face with 30 radial points with slight randomness
            landmarks = Create.radialPts( space.center, r/3, count);
            landmarks.map( (p: { to: (arg0: Pt) => void; add: (arg0: number, arg1: number) => void; rotate2D: (arg0: number, arg1: Pt) => void; x : number; y: number  }) => {
                p.add((Math.random()-0.5)*space.size.x, (Math.random()-0.5)*space.size.y );
                p.rotate2D( count*Math.PI/10, space.center);

            });

            for (let i=0; i<landmarks.length; i++) {
                origin.push(new Pt(landmarks[i].x, landmarks[i].y));
                vectors.push(new Pt(Math.random()-0.5, Math.random()-0.5));
            }

        },

        animate: () => {

            let r = Math.min(space.size.x, space.size.y);

            for (let i=0; i<landmarks.length; i++) {
                const pt = landmarks[i];
                const originPt = origin[i];

                form.fillOnly(colors[i%3]).point( landmarks[i], r/6, "circle" );

                const mouseXDistance = mouse.x - pt.x;
                const mouseYDistance = mouse.y - pt.y;
                const distFromMouse = Math.sqrt(Math.pow(mouseYDistance,2)+Math.pow(mouseXDistance,2));

                const distanceFromOriginX = originPt.x - pt.x;
                const distanceFromOriginY = originPt.y - pt.y;

                if (distFromMouse < 300) {
                    pt.add(-mouseXDistance/distFromMouse*5,-mouseYDistance/distFromMouse*5);
                } else if( distFromMouse > 400){
                    pt.add(distanceFromOriginX/40,distanceFromOriginY/40);
                } else {
                    originPt.to(space.center);
                    originPt.add((Math.random()-0.5)*space.size.x, (Math.random()-0.5)*space.size.y );
                }

                if(originPt.x <= 0 || originPt.x >= space.size.x) {
                    vectors[i].x = -vectors[i].x;
                }
                if(originPt.y <= 0 || originPt.y >= space.size.y) {
                    vectors[i].y = -vectors[i].y;
                }

                originPt.add(vectors[i].x, vectors[i].y);


                vectors[i].x = vectors[i].x + (Math.random() - 0.5)/10;
                vectors[i].y = vectors[i].y + (Math.random() - 0.5)/10;

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
    state = { width: 0, height: 0, sliding : true };

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

        let space = new CanvasSpace("#pts").setup({bgcolor: "#000000", retina: true, resize: true});
        floatySpace(space);
    };
    private interval: NodeJS.Timer | undefined;

    constructor(props: IProps) {
        super(props);
    }

    static contextType = LocalisationContext;
    context!: React.ContextType<typeof LocalisationContext>

    componentDidMount() {

        let space = new CanvasSpace("#pts").setup({bgcolor: "#000000", retina: true, resize: true});
        floatySpace(space);

        window.addEventListener('resize', this.updateDimensions);

        const swapState = () => {
            this.setState( {sliding : !this.state.sliding});
        }
        this.interval = setInterval(function() {
            swapState();
        },3000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {


        let { locale } = this.context;
        let title,description1,description2,buttonText: string|undefined;
        if(locale === locales.francais) {
            description1 = "Ingénieur logiciel"
            description2 = "Développement front et fullstack"
            title = "Développeur web"
            buttonText = "Contactez-moi !"
        } else {
            description1 = "Software engineer"
            description2 = "Front and fullstack development"
            title = "web Developer"
            buttonText = "Contact-me !"
        }



        return <div className={style.homeContainer}>
            <canvas id="pts" className={style.canvas}/>
            <div className={style.infoSection}>
                <div className={style.homeSection}>
                    <div className={style.textPart}>
                        <div className={style.sliderTitle}>
                            <h1 className={this.state.sliding ? style.active : style.inactive}>Baptiste Trautmann</h1>
                            <h1 className={this.state.sliding ? style.inactive : style.active}>Freelance</h1>
                        </div>
                        <h2 className={style.homeTitle}>{title}</h2>
                        <p className={style.homeDescription}>{description1} <br></br> {description2} </p>
                        <div className={style.buttons} >
                            <a href="" onClick={e => {e.preventDefault(); this.props.scrollToContact()}} className={style.contactButton}>{buttonText}</a>
                            <DownloadCVButton  color={"greenBordered"}/>
                        </div>
                    </div>
                    <div className={style.portraitPart}>
                        <Image id={style["portrait"]} src={"/portrait.jpeg"} alt="portrait" width={"300px"} height={"300px"} />
                    </div>

                </div>
            </div>

        </div>
        ;
    }

}

export default HomeSection;