import React from 'react';
import style from './Services.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";

interface IProps {
}

interface IState {
}

type ServicesListProps = {
    title:string,
    logo:string,
    text:string
}

const ServicesList : React.FC<ServicesListProps> = ({title, logo, text}) => {

    return <div className={style.servicesList}>
        <img className={style.serviceLogo} src={logo} alt={title + " logo"}/>
        <h1 className={style.serviceTitle}>{title}</h1>
        <p className={style.serviceDescription}>{text}</p>
    </div>
}

class Services extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    static contextType = LocalisationContext;
    context!: React.ContextType<typeof LocalisationContext>

    render() {

        let { locale } = this.context;

        let description : string = "Développement fullstack - Prestation dev java - Développement de modules chatbots";
        let logoFullstack = "/stack_logo.svg"
        let logoChatbot = "/chatbot_logo.svg"
        let logoSpring = "/spring_logo.svg"
        let chatbotTitle = "Développement chatbot"
        let fullstackDesc = "description en français"
        let chatbotDesc = "description en français"
        let springDesc = "description en français"


        if(locale === locales.english) {
            chatbotTitle = "Chatbot engineering";
            fullstackDesc = "Description in english";
            chatbotDesc = "Description in english";
            springDesc = "Description in english";
            description = "English random text";
        }

        return <div id={style["servicesDiv"]}>
            <h1 id={style["myServicesTitle"]}>Mes services</h1>
            <p id={style["myServicesDescription"]}>{description}</p>
            <div id={style["servicesListDiv"]}>
                <ServicesList title="Web fullstack" logo={logoFullstack} text={fullstackDesc} />
                <ServicesList title={chatbotTitle} logo={logoChatbot} text={chatbotDesc} />
                <ServicesList title="Java Spring" logo={logoSpring} text={springDesc} />
            </div>
        </div>;
    }
}

export default Services;