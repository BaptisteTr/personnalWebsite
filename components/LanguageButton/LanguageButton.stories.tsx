import React from 'react';
import LanguageButton from './LanguageButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LanguageButton',
  component: LanguageButton,
};

export const Francais = () => <LanguageButton>Francais</LanguageButton>
