import React, { FunctionComponent } from 'react';
import style from './Error404.module.css';
import Link from "next/link";

export const Error404 : FunctionComponent = ({}) => {

return <div className={style.divContainer404}>
        <h1>404 - Page inconnue</h1>
        <Link href="/">
            <a >
                <button className={style.BackButton}>Retour à l&apos;accueil</button>
            </a>
        </Link>
    </div>;
}