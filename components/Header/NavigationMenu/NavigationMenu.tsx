import React, {useContext} from "react";

import styles from './NavigationMenu.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

interface IProps {
}

interface IState {
}

const NavigationMenu = () => {
    const localisation = useContext(LocalisationContext);
    let menuItems : Array<String>;

    if(localisation.locale === locales.francais) {
        menuItems = new Array<String>("Accueil","Services","Compétences","Projets");
    } else {
        menuItems = new Array<String>("Home","Services","Skills","Projects");
    }

    return <div className={styles.topNav}>
        {menuItems.map( (content,i) =>
            <a className={styles.button} href="#" key={i}>{content}</a>
        )}
    </div>;

}

export default NavigationMenu;