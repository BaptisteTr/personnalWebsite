import Head from "next/head";
import React from "react";
import {Error404} from "../components/globalComponents/Error404/Error404";

const FourOhFour = () => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Page inconnue"/>
                <title>Baptiste Trautmann - Page inconnue</title>
            </Head>
            <Error404 />
        </div>
    );
};

export default FourOhFour;