import React from "react";
import {LocalisationContext} from "../../../contexts/Locale";
import styles from './LanguageButton.module.css';

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
              <a href="#" className={styles.button} onClick={toggleLocale}>
                {locale.buttonLabel}
              </a>
          )}
        </LocalisationContext.Consumer>
    );
  }
}

export default LanguageButton 