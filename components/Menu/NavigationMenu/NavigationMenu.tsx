import React, {FunctionComponent, useContext} from "react";

import styles from './NavigationMenu.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

type NavigationMenuProps = {
    scrollToSkills: () => void,
    scrollToProjects: () => void,
    scrollToContact: () => void
}

const NavigationMenu : FunctionComponent<NavigationMenuProps> = ({scrollToSkills, scrollToProjects, scrollToContact}) => {
    const localisation = useContext(LocalisationContext);
    let menuItems : Array<{label : string, scrollTo : () => void}>;


    if(localisation.locale === locales.francais) {
        menuItems = new Array<{label : string, scrollTo : () => void}>({label : "Compétences", scrollTo : scrollToSkills}, {label : "Projets", scrollTo : scrollToProjects}, {label : "Contact", scrollTo : scrollToContact});
    } else {
        menuItems = new Array<{label : string, scrollTo : () => void}>({label : "Skills", scrollTo : scrollToSkills}, {label : "Projects", scrollTo : scrollToProjects}, {label : "Contact", scrollTo : scrollToContact});
    }

    return <div className={styles.topNav}>
        {menuItems.map( (content,i) =>
            <a className={styles.button} onClick={() => content.scrollTo()} key={i}><span>{content.label}</span></a>
        )}
    </div>;
}

export default NavigationMenu;