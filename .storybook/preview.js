import {LocalisationContext, locales} from "../contexts/Locale";
import {useState} from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  locale: {
    name: 'Localisation',
    description: 'Website Localisation',
    defaultValue: 'francais',
    toolbar: {
      icon: 'lightning',
      items: ['francais', 'english'],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {

    const contextLocale = context.globals.locale === 'francais' ? locales.francais : locales.english;

    const [locale, setLocale] = useState(contextLocale);

    return (
        <LocalisationContext.Provider value={{toggleLocale : () => {
            locale === locales.francais
                ? setLocale(locales.english)
                : setLocale(locales.francais)}
          , locale:locale}}>
          <Story/>
        </LocalisationContext.Provider>
    )
  }
]