import React from "react";

import Presentation from "./Presentation/Presentation";
import style from './HomeSection.module.css';

interface IProps {
}

interface IState {
}

class HomeSection extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <div className={style.homeSection}>
            <Presentation/>
        </div>
        ;
    }

}

export default HomeSection;