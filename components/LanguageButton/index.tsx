import React from "react";

interface IProps {
}

interface IState {
  playOrPause?: string;
}

class LanguageButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      playOrPause: 'Play'
    };
  }

  render() {
    return(
      <div>
        <button>
          English
        </button>
      </div>
    );
  }
}

export default LanguageButton 