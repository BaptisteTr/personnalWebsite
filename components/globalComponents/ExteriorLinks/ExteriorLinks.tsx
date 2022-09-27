import React, { FunctionComponent } from 'react';
import styles from './ExteriorLinks.module.css';
import Image from 'next/image'
type ExteriorLinksProps  = {
    color:string;
}

export const ExteriorLinks: FunctionComponent<ExteriorLinksProps> = ({color}) => {

    let maltIcon : string = "/Malt.svg";
    let linkedinIcon : string = "/Linkedin.svg";
    let githubIcon : string = "/Github.svg";

    if(color === "blue") {
        maltIcon = maltIcon.replace(".svg", "_blue.svg");
        linkedinIcon = linkedinIcon.replace(".svg", "_blue.svg");
        githubIcon = githubIcon.replace(".svg", "_blue.svg");
    }

    return <div className={styles.infoLinks}>
        <a href="components/globalComponents/ExteriorLinks/ExteriorLinks#" onClick={(e) => {e.preventDefault()}}><Image src={linkedinIcon} alt="Linkedin logo" width={40} height={40}/></a>
        <a href="components/globalComponents/ExteriorLinks/ExteriorLinks#" onClick={(e) => {e.preventDefault()}}><Image src={maltIcon} alt="Malt logo" width={40} height={40}/></a>
        <a href="components/globalComponents/ExteriorLinks/ExteriorLinks#" onClick={(e) => {e.preventDefault()}}><Image src={githubIcon} alt="Github logo" width={40} height={40}/></a>
    </div>;

}