import React from 'react';
import LanguageButton from './LanguageButton';
import {ComponentStory} from "@storybook/react";
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Header/LanguageButton',
  component: LanguageButton,
};

export const Francais: ComponentStory<typeof LanguageButton> = () => <LanguageButton/>
export const English: ComponentStory<typeof LanguageButton> = () => <LanguageButton/>

English.decorators = [withReactContext({
  Context: LocalisationContext,
  initialState: {
    locale: locales.english,
    toggleLocale: () => {}
  },
})];
