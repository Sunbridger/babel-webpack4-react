import React from 'react';
import { ThemeContext } from './theme-context.js';
export default class ThemedButton extends React.Component {
    render() {
      return (
          <div>
            <ThemeContext.Consumer>
                {
                    ({theme,changeStyle}) => {
                        return <button onClick={changeStyle} style={{backgroundColor: theme.background}}>按钮consumer</button>
                    }
                }
            </ThemeContext.Consumer>
          </div>
      );
    }
}
