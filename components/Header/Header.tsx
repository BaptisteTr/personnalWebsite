import React from "react";

import NavigationMenu from "./NavigationMenu/NavigationMenu";
import LanguageButton from "./LanguageButton/LanguageButton";
import style from './header.module.css';

type HeaderProps = {
    scrollToHome: () => void,
    scrollToServices: () => void,
    scrollToSkills: () => void,
    scrollToProjects: () => void,
    scrollToContact: () => void
}


class Header extends React.Component<HeaderProps>{
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return <header>
            <div className={style.headerBox}>
                <NavigationMenu scrollToHome={this.props.scrollToHome} scrollToServices={this.props.scrollToServices} scrollToSkills={this.props.scrollToSkills} scrollToProjects={this.props.scrollToProjects} scrollToContact={this.props.scrollToContact}/>
                <LanguageButton/>
            </div>
        </header>
            ;
    }
}

export default Header;