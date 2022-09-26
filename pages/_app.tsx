import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../fonts/stylesheet.css';
import {locales, LocalisationContext} from "../contexts/Locale";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {

    const contextLocale = locales.francais;

    const [locale, setLocale] = useState(contextLocale);

  return <LocalisationContext.Provider value ={{
      locale: locale,
      toggleLocale : () => {
          locale === locales.francais
              ? setLocale(locales.english)
              : setLocale(locales.francais)
      }
  }}>
      <Component {...pageProps} />
  </LocalisationContext.Provider>
}

export default MyApp
