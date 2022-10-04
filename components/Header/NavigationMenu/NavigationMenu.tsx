import React, {FunctionComponent, useContext} from "react";

import styles from './NavigationMenu.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

type NavigationMenuProps = {
    scrollToHome: () => void,
    scrollToServices: () => void,
    scrollToSkills: () => void,
    scrollToProjects: () => void,
    scrollToContact: () => void
}

const NavigationMenu : FunctionComponent<NavigationMenuProps> = ({scrollToHome, scrollToServices, scrollToSkills, scrollToProjects, scrollToContact}) => {
    const localisation = useContext(LocalisationContext);
    let menuItems : Array<{label : string, scrollTo : () => void}>;


    if(localisation.locale === locales.francais) {
        menuItems = new Array<{label : string, scrollTo : () => void}>({label : "Accueil", scrollTo : scrollToHome},{label : "Services", scrollTo : scrollToServices},{label : "Compétences", scrollTo : scrollToSkills}, {label : "Projets", scrollTo : scrollToProjects}, {label : "Contact", scrollTo : scrollToContact});
    } else {
        menuItems = new Array<{label : string, scrollTo : () => void}>({label : "Home", scrollTo : scrollToHome},{label : "Services", scrollTo : scrollToServices},{label : "Skills", scrollTo : scrollToSkills}, {label : "Projects", scrollTo : scrollToProjects}, {label : "Contact", scrollTo : scrollToContact});
    }

    return <div id="topNav" className={styles.topNav}>
        {menuItems.map( (content,i) =>
            <a className={styles.button} onClick={() => content.scrollTo()} key={i}>{content.label}</a>
        )}
    </div>;
}

export default NavigationMenu;