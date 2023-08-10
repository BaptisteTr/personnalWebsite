import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../fonts/fonts.css';
import {locales, LocalisationContext} from "../contexts/Locale";
import {useState} from "react";
import Script from 'next/script'

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

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload" id="google">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Component {...pageProps} />
  </LocalisationContext.Provider>
}

export default MyApp
