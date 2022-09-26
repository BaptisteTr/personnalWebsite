import React from "react";

import style from './Presentation.module.css';

import background from "../../../Assets/background.jpg";
import InfoCard from "../InfoCard/InfoCard";

interface IProps {
}

interface IState {
}

class Presentation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <div className={style.backgroundDiv} style={{backgroundImage: `url(/background.jpg)`}}></div>
            <div className={style.textDiv}>
                <div className={style.nameTitle}>
                    <h1 className={style.nameTitles}>Baptiste TRAUTMANN</h1>
                    <h2 className={style.nameTitles}>Développeur web Freelance</h2>
                </div>
                <div className={style.textTitle}>
                    <p className={style.textTitles}>Déscription : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum</p>
                </div>
            </div>
            <div className={style.infoCard} >
                <InfoCard/>
            </div>
        </React.Fragment>
        ;
    }

}

export default Presentation;