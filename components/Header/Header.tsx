import React from "react";

import '../../fonts/stylesheet.css';
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import LanguageButton from "../LanguageButton/LanguageButton";
import style from './header.module.css';

interface IProps {
}

interface IState {
}

class Header extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <header>
                <div className={style.headerBox}>
                    <NavigationMenu/>
                    <LanguageButton/>
                </div>
            </header>
        ;
    }

}

export default Header;