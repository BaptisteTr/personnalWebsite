import React from "react";

import '../../fonts/stylesheet.css';
import InfoCard from "../InfoCard/InfoCard";
import Presentation from "../Presentation/Presentation";
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
            <InfoCard/>
        </div>
        ;
    }

}

export default HomeSection;