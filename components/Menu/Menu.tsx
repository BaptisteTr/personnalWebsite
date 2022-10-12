import React, {useState} from "react";

import NavigationMenu from "./NavigationMenu/NavigationMenu";
import LanguageButton from "./LanguageButton/LanguageButton";
import MainLogo from "./MainLogo/MainLogo";
import style from './Menu.module.css';
import {ExteriorLinks} from "../globalComponents/ExteriorLinks/ExteriorLinks";

type MenuProps = {
    scrollToSkills: () => void,
    scrollToProjects: () => void,
    scrollToContact: () => void,
    isMenuVisible: boolean,
    setMenuVisible: (e:boolean) => void,
}


class Menu extends React.Component<MenuProps>{
    constructor(props: MenuProps) {
        super(props);
        props.isMenuVisible;
    }

    render() {
        return <>
            <a className={style.menuBurger} href="" onClick={(e) => {e.preventDefault(); this.props.setMenuVisible(!this.props.isMenuVisible)}}>
                <svg className={style.menuIcon} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24.75 24.75" >
                    <g>
                        {!this.props.isMenuVisible &&
                            <path className={style.menuIconSvg} d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
                            c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
                            c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
                        }
                        {this.props.isMenuVisible &&
                            <path className={style.menuIconSvg} d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                        }
                    </g>
                </svg>
            </a>
            <div className={(this.props.isMenuVisible?style.menuVisible:style.menuHidden)+" "+style.leftMenuBox}>
                <MainLogo setMenuVisible={this.props.setMenuVisible}/>
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