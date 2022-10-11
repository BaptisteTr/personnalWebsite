import React from 'react';
import LanguageButton from './LanguageButton';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {withReactContext} from "storybook-react-context";
import {locales, LocalisationContext} from "../../../contexts/Locale";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Menu/LanguageButton',
  component: LanguageButton,
} as ComponentMeta<typeof LanguageButton>;

export const Primary: ComponentStory<typeof LanguageButton> = () => <LanguageButton/>
export const English: ComponentStory<typeof LanguageButton> = () => <LanguageButton/>

English.decorators = [withReactContext({
  Context: LocalisationContext,
  initialState: {
    locale: locales.english,
    toggleLocale: () => {}
  },
})];
