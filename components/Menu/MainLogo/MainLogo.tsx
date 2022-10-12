import React, {FunctionComponent, useContext} from 'react';
import style from './MainLogo.module.css';
import Image from "next/image";
import {locales, LocalisationContext} from "../../../contexts/Locale";

type MainLogoProps = {
    setMenuVisible: (e:boolean) => void
}

const MainLogo: FunctionComponent<MainLogoProps> = ({setMenuVisible}) => {

    const localisation = useContext(LocalisationContext);

return <a className={style.logoBox} href="#" onClick={(e) => {e.preventDefault();window.scrollTo(0, 0); setMenuVisible(false);}}>
    <Image className={style.logo} src={"/logo-no-background.svg"} alt="Main logo" width={200} height={200}/>
    <h1 className={style.nameTitle}>Baptiste<br/>TRAUTMANN</h1>
    <p className={style.trade}>{localisation.locale===locales.francais?"Développeur web":"Web developer"}</p>
</a>;
}

export default MainLogo;