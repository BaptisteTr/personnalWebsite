import React from 'react';
import style from './Services.module.css';
import {locales, LocalisationContext} from "../../../contexts/Locale";
import {Description} from "../../../pages";

interface IProps {
    descriptions:Description[]
}

interface IState {
}

type ServicesListProps = {
    title:string,
    logo:string,
    text:string|undefined
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

        let description,descriptionFullstack, descriptionChatbot, descriptionSpring,title: string|undefined;
        if(locale === locales.francais) {
            description = this.props.descriptions.find(d => d.section_key === "services")?.description_fr
            descriptionFullstack = this.props.descriptions.find(d => d.section_key === "services_fullstack")?.description_fr
            descriptionChatbot = this.props.descriptions.find(d => d.section_key === "services_chatbot")?.description_fr
            descriptionSpring = this.props.descriptions.find(d => d.section_key === "services_spring")?.description_fr
            title="Mes services"
        } else {
            description = this.props.descriptions.find(d => d.section_key === "services")?.description_eng
            descriptionFullstack = this.props.descriptions.find(d => d.section_key === "services_fullstack")?.description_eng
            descriptionChatbot = this.props.descriptions.find(d => d.section_key === "services_chatbot")?.description_eng
            descriptionSpring = this.props.descriptions.find(d => d.section_key === "services_spring")?.description_eng
            title="My services"
        }

        let logoFullstack = "/stack_logo.svg"
        let logoChatbot = "/chatbot_logo.svg"
        let logoSpring = "/spring_logo.svg"
        let chatbotTitle = "Développement chatbot"


        if(locale === locales.english) {
            chatbotTitle = "Chatbot engineering";
        }

        return <div id={style["servicesDiv"]}>
            <h1 id={style["myServicesTitle"]}>{title}</h1>
            <p id={style["myServicesDescription"]}>{description}</p>
            <div id={style["servicesListDiv"]}>
                <ServicesList title="Web fullstack" logo={logoFullstack} text={descriptionFullstack} />
                <ServicesList title={chatbotTitle} logo={logoChatbot} text={descriptionChatbot} />
                <ServicesList title="Java Spring" logo={logoSpring} text={descriptionSpring} />
            </div>
        </div>;
    }
}

export default Services;