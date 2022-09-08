import React from "react";

import '../../fonts/stylesheet.css';
import style from './Presentation.module.css';

import background from "../../Assets/background.jpg";

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
            <div className={style.backgroundDiv} style={{backgroundImage: `url(${background})`}}></div>
            <div className={style.textDiv}>
                <h1>Baptiste TRAUTMANN</h1>
                <h2>Développeur web Freelance</h2>
                <p>Déscription : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum</p>
            </div>
        </React.Fragment>
        ;
    }

}

export default Presentation;