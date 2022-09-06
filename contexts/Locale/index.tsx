import React, { createContext } from 'react'

interface LocaleInterface {
    buttonLabel: string;
    value: string;
}

interface LocaleContextInterface {
    francais : LocaleInterface,
    english : LocaleInterface
}

export interface LocalisationContextInterface {
    locale : LocaleInterface,
    toggleLocale : () => void
}

export const locales : LocaleContextInterface = {
    francais: {
        buttonLabel: "English",
        value: "eng"
    },
    english: {
        buttonLabel: "Français",
        value: "fr"
    },
}

export const LocalisationContext = createContext< LocalisationContextInterface >({
    locale: locales.francais,
    toggleLocale: () => {},
});