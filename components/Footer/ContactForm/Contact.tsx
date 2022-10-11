import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import style from './Contact.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

type ModalProps = {
    modal:string,
    unSetModal:() => void
}

const Modal : FunctionComponent<ModalProps> = ({ modal, unSetModal }) => {
    useEffect(() => {
        const bind = (e: { keyCode: number; }) => {
            if (e.keyCode !== 27) {
                return
            }

            if (document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName)) {
                return
            }

            unSetModal()
        }

        document.addEventListener('keyup', bind)
        return () => document.removeEventListener('keyup', bind)
    }, [modal, unSetModal])

    return (
        <div className={style.modal}>
            {modal != '' &&
                <div className={style.modal__inner}>
                    <button className={style.modal__close_btn} onClick={(e) => {
                        e.preventDefault();
                        unSetModal()
                    }}>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path
                                d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                        </svg>
                    </button>
                    {modal}
                </div>
            }
        </div>
    )
}


export const Contact: FunctionComponent = ({}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [modal, setModal] = useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data = {
            name,
            email,
            message
        }

        if(data.name === "" ) {
            setErrorName(true);
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
            setErrorEmail(true);
        } else if(data.message === "" ) {
            setErrorMessage(true);
        } else {
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.status === 200) {
                    setName('')
                    setEmail('')
                    setMessage('')
                    setErrorName(false)
                    setErrorEmail(false)
                    setErrorMessage(false)
                    setModal("Message envoyé! Je vous recontacte dans les plus brefs délais.")
                } else {
                    setModal("Erreur lors de l'envoi de mail.")
                }
            })
        }
    }

    const resetInput = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, defaultValue: string) => {
        if(e && e.target.value === defaultValue) {
            e.target.value = "";
            setErrorName(false);
            setErrorEmail(false);
            setErrorMessage(false);
        }
    }

    const resetLabels = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, defaultValue: string) => {
        if(e && e.target.value.trim() === "") {
            e.target.value = defaultValue;
        }
    }

    const localisation = useContext(LocalisationContext);

    return <>
    <form id={style["contactForm"]} onSubmit={(e) => {handleSubmit(e)}} >
        <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
        <div className={style.inputContainer}>
            <input id={style["contactNameInput"]} type="text"
                   onChange={(e)=>{setName(e.target.value)}}
                   onBlur={(e)=>resetLabels(e, localisation.locale === locales.francais ? "Nom" : "Name")}
                   onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Nom" : "Name")}
                   defaultValue={localisation.locale === locales.francais ? "Nom" : "Name"}
            />
            <span className={style.separator+" "+`${errorName ? style.inputError : ""}`}/>
        </div>
        <div className={style.inputContainer}>
            <input id={style["contactEmailInput"]} type="text"
                   onChange={(e)=>{setEmail(e.target.value)}}
                   onBlur={(e)=>resetLabels(e, localisation.locale === locales.francais ? "Adresse email" : "Email adress")}
                   onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Adresse email" : "Email adress")}
                   defaultValue={localisation.locale === locales.francais ? "Adresse email" : "Email adress"}
            />
            <span className={style.separator+" "+`${errorEmail ? style.inputError : ""}`}/>
        </div>

        <div className={style.inputContainer}>
            <textarea id={style["contactMessageInput"]}  name="message"
                      onChange={(e)=>{setMessage(e.target.value)}}
                      onBlur={(e)=>resetLabels(e, localisation.locale === locales.francais ? "Votre message" : "Your message")}
                      onFocus={(e) => resetInput(e,localisation.locale === locales.francais ? "Votre message" : "Your message")}
                      defaultValue={localisation.locale === locales.francais ? "Votre message" : "Your message"}
            ></textarea>
            <span className={style.separator+" "+`${errorMessage ? style.inputError : ""}`} />

        </div>

        <span className={style.separator}> </span>
        <div id={style["modal_and_submitDiv"]}>
            <Modal modal={modal} unSetModal={() => {setModal('')}}></Modal>
            <input id={style["contactSubmit"]} type="submit" value={localisation.locale === locales.francais ? "Envoyer" : "Send"}/>
        </div>
    </form>
</>;
}