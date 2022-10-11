import React from "react";

import style from './Presentation.module.css';

import InfoCard from "../InfoCard/InfoCard";
import {Description} from "../../../pages";
import {locales, LocalisationContext} from "../../../contexts/Locale";

interface IProps {
    descriptions:Description[]
}

interface IState {
}

class Presentation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    static contextType = LocalisationContext;
    context!: React.ContextType<typeof LocalisationContext>

    render() {

        let { locale } = this.context;
        let title,description: string|undefined;
        if(locale === locales.francais) {
            description = this.props.descriptions.find(d => d.section_key === "presentation")?.description_fr
            title = "Développeur web Freelance"
        } else {
            description = this.props.descriptions.find(d => d.section_key === "presentation")?.description_eng
            title = "Freelance web Developer"
        }

        return <React.Fragment>
            <div className={style.backgroundDiv} style={{backgroundImage: `url(/background.jpg)`}}></div>
            <div className={style.textDiv}>
                <div className={style.nameTitle}>
                    <h1 className={style.nameTitles}>Baptiste TRAUTMANN</h1>
                    <h2 className={style.nameTitles}>{title}</h2>
                </div>
                <div className={style.textTitle}>
                    <p className={style.textTitles}>{description}</p>
                </div>
            </div>
            <div className={style.infoCard} >
                <InfoCard/>
            </div>
        </React.Fragment>
        ;
    }

}

export default Presentation;