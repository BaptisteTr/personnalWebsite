import React, { FunctionComponent } from 'react';
import styles from './ExteriorLinks.module.css';
import Image from 'next/image'
type ExteriorLinksProps  = {
    color:string;
    burger:boolean;
}

export const ExteriorLinks: FunctionComponent<ExteriorLinksProps> = ({color, burger}) => {

    let maltIcon : string = "/Malt.svg";
    let linkedinIcon : string = "/Linkedin.svg";
    let githubIcon : string = "/Github.svg";

    if(color === "blue") {
        maltIcon = maltIcon.replace(".svg", "_blue.svg");
        linkedinIcon = linkedinIcon.replace(".svg", "_blue.svg");
        githubIcon = githubIcon.replace(".svg", "_blue.svg");
    }

    return <div className={styles.infoLinks+" "+burger?styles.burger:""}>
        <a href="https://www.linkedin.com/in/baptiste-trautmann-268366158/"><Image src={linkedinIcon} alt="Linkedin logo" width={30} height={30}/></a>
        <a href="https://www.malt.fr/profile/baptistetrautmann"><Image src={maltIcon} alt="Malt logo" width={30} height={30}/></a>
        <a href="https://github.com/BaptisteTr"><Image src={githubIcon} alt="Github logo" width={30} height={30}/></a>
    </div>;

}