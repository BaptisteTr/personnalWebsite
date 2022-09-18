import React, {FunctionComponent, useContext} from 'react';
import style from './Contact.module.css';
import '../../fonts/stylesheet.css';
import {locales, LocalisationContext} from "../../contexts/Locale";

type ContactProps = {
}

const resetInput = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, defaultValue: string) => {
    if(e && e.target.value === defaultValue) {
        e.target.value = "";
    }
}

export const Contact: FunctionComponent<ContactProps> = ({}) => {

    const localisation = useContext(LocalisationContext);
    let title: string = localisation.locale === locales.francais ? "Posez moi vos question!" : "Ask me anything!";

    return <div id={style["contactDiv"]}>
    <form id={style["contactForm"]}>
        <p>{title}</p>
        <input id={style["contactNameInput"]} type="text" onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Nom" : "Name")} defaultValue={localisation.locale === locales.francais ? "Nom" : "Name"} />
        <input id={style["contactEmailInput"]} type="text" onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Adresse email" : "Email adress")}  defaultValue={localisation.locale === locales.francais ? "Adresse email" : "Email adress"} />
        <textarea id={style["contactMessageInput"]}  name="message" onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Votre message" : "Your message")}  defaultValue={localisation.locale === locales.francais ? "Votre message" : "Your message"}></textarea>
        <input id={style["contactSubmit"]} type="submit" value={localisation.locale === locales.francais ? "Envoyer" : "Send"}/>
    </form>
</div>;
}