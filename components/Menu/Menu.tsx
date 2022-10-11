import React from "react";

import NavigationMenu from "./NavigationMenu/NavigationMenu";
import LanguageButton from "./LanguageButton/LanguageButton";
import MainLogo from "./MainLogo/MainLogo";
import style from './Menu.module.css';
import {ExteriorLinks} from "../globalComponents/ExteriorLinks/ExteriorLinks";

type MenuProps = {
    scrollToSkills: () => void,
    scrollToProjects: () => void,
    scrollToContact: () => void
}


class Menu extends React.Component<MenuProps>{
    constructor(props: MenuProps) {
        super(props);
    }

    render() {
        return <>
            <div className={style.headerBox}>
                <MainLogo/>
                <div className={style.menuBox}>
                    <NavigationMenu scrollToSkills={this.props.scrollToSkills} scrollToProjects={this.props.scrollToProjects} scrollToContact={this.props.scrollToContact}/>
                    <ExteriorLinks color={"white"} />
                    <LanguageButton/>
                </div>
            </div>
        </>
            ;
    }
}

export default Menu;