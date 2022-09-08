import React, {useContext} from "react";

import '../../fonts/stylesheet.css';
import styles from './NavigationMenu.module.css';
import {locales, LocalisationContext} from "../../contexts/Locale";

interface IProps {
}

interface IState {
}

const NavigationMenu = () => {
    const localisation = useContext(LocalisationContext);
    let menuItems : Array<String>;

    if(localisation.locale === locales.francais) {
        menuItems = new Array<String>("Accueil","Expérience et formation","Compétences","Projets");
    } else {
        menuItems = new Array<String>("Home","Experiences and trainings","Skills","Projects");
    }

    return <div className={styles.topNav}>
        {menuItems.map( (content,i) =>
            <a className={styles.button} href="#" key={i}>{content}</a>
        )}
    </div>;

}

export default NavigationMenu;