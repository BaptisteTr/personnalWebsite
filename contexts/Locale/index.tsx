import React, { createContext } from 'react'

export const locales = {
    francais: {
        buttonLabel: "English",
        value: "eng"
    },
    english: {
        buttonLabel: "Français",
        value: "fr"
    },
}

export const LocalisationContext = createContext({
    locale: locales.francais,
    toggleLocale: () => {},
});