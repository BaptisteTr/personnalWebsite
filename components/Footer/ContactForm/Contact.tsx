import React, {FunctionComponent, useContext, useState} from 'react';
import style from './Contact.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

type ContactProps = {
}



const resetInput = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, defaultValue: string) => {
    if(e && e.target.value === defaultValue) {
        e.target.value = "";
    }
}

const resetLabels = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, defaultValue: string) => {
    if(e && e.target.value.trim() === "") {
        e.target.value = defaultValue;
    }
}



export const Contact: FunctionComponent<ContactProps> = ({}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Sending');

        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        })

    }

    const localisation = useContext(LocalisationContext);
    let title: string = localisation.locale === locales.francais ? "Posez moi vos question!" : "Ask me anything!";

    return <div id={style["contactDiv"]}>
    <form id={style["contactForm"]} onSubmit={(e) => {handleSubmit(e)}} >
        <p>{title}</p>
        <input id={style["contactNameInput"]} type="text" onChange={(e)=>{setName(e.target.value)}} onBlur={(e)=>resetLabels(e, localisation.locale === locales.francais ? "Nom" : "Name")} onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Nom" : "Name")} defaultValue={localisation.locale === locales.francais ? "Nom" : "Name"} />
        <input id={style["contactEmailInput"]} type="text" onChange={(e)=>{setEmail(e.target.value)}} onBlur={(e)=>resetLabels(e, localisation.locale === locales.francais ? "Adresse email" : "Email adress")} onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Adresse email" : "Email adress")}  defaultValue={localisation.locale === locales.francais ? "Adresse email" : "Email adress"} />
        <textarea id={style["contactMessageInput"]}  name="message" onChange={(e)=>{setMessage(e.target.value)}} onBlur={(e)=>resetLabels(e, localisation.locale === locales.francais ? "Votre message" : "Your message")} onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Votre message" : "Your message")}  defaultValue={localisation.locale === locales.francais ? "Votre message" : "Your message"}></textarea>
        <input id={style["contactSubmit"]} type="submit" value={localisation.locale === locales.francais ? "Envoyer" : "Send"}/>
    </form>
</div>;
}