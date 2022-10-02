import React from "react";

import Presentation from "./Presentation/Presentation";
import style from './HomeSection.module.css';
import {Description} from "../../pages";

interface IProps {
    descriptions:Description[]
}

interface IState {
}

class HomeSection extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <div className={style.homeSection}>
            <Presentation descriptions={this.props.descriptions}/>
        </div>
        ;
    }

}

export default HomeSection;