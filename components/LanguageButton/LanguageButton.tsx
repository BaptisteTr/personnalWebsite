import React from "react";
import {LocalisationContext} from "../../contexts/Locale";
import './LanguageButton.module.css';

interface IProps {
}

interface IState {
}

class LanguageButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return(
        <LocalisationContext.Consumer>
          {({locale, toggleLocale}) => (
              <button onClick={toggleLocale}>
                <p>{locale.buttonLabel}</p>
              </button>
          )}
        </LocalisationContext.Consumer>
    );
  }
}

export default LanguageButton 