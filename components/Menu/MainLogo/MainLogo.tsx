import React, { FunctionComponent } from 'react';
import style from './MainLogo.module.css';
import Image from "next/image";


const MainLogo: FunctionComponent = ({}) => {


return <a className={style.logoBox} href="#" onClick={(e) => {e.preventDefault();window.scrollTo(0, 0);}}>
    <Image className={style.logo} src={"/logo-no-background.svg"} alt="Main logo" width={200} height={200}/>
    <p className={style.nameTitle}>Baptiste<br/>TRAUTMANN</p>
</a>;
}

export default MainLogo;